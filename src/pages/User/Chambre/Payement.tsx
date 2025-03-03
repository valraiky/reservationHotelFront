import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import  { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { AddPayement } from '../../../Components/fetchData/Payement';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../../../Components/Alert/succes';

type Props = {
    id : number
    totalAmount : number
    nom : string,
    setPay : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Payement({id,totalAmount,nom,setPay}: Props) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret,setClientSecret] = useState("")
    const queryClient = useQueryClient();
    const [alertVisible, setAlertVisible] = useState(false);
    const navigate = useNavigate();

    const showAlert = () => setAlertVisible(true);
    const closeAlert = () => {setAlertVisible(false);navigate("/");};

    const mutation = useMutation(
        (newPayement : any) => AddPayement(newPayement),
        {
            onSuccess(value) {
                queryClient.invalidateQueries("payement");
                setClientSecret(value.clientSecret) 
                console.log(clientSecret)
                setPay(false)
                showAlert()
            },
            onError(error) {
                console.log(error);
            }
        }
    );

     const {  handleSubmit } = useForm();

       const onSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            setError("Impossible de récupérer l'élément de la carte. Veuillez réessayer.");
            return;
        }
        mutation.mutate({
            amount:  Math.ceil(totalAmount / 4690.13 ) ,
            reservation_id: id,
            payment_method: 'card',
        });

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: nom,
                },
            },
        });

        if (result.error) {
            setError(result.error.message!);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                showAlert();
            }
        }
    };


  return (
    <>
    <CustomAlert
        visible={alertVisible}
        title="Payement réussie"
        message="Votre payement avec stripe a été effectuée avec succès."
        onClose={closeAlert}
      />
        <div className='fixed w-full h-full top-0 left-0 bg-black bg-opacity-10 flex justify-center items-center ' >
            <div className='w-96 h-48 bg-white rounded-lg relative'>
                <button className='bg-red-400 text-white text-2xl px-2 absolute right-0' onClick={() => setPay(false)  }>x</button>
                <h1 className='text-black text-2xl text-center font-bold p-4'>Payement <span className='text-xs'> avec <span className='bg-cyan-500 px-2 py-1 rounded-lg text-white'>stripe</span> </span> </h1>
                <h1 className='text-center'><span className='bg-gray-200  px-4 py-1 rounded-md'> {Math.ceil(totalAmount / 4690.13 )} $  </span> <span className='text-xs text-gray-500'> {totalAmount} Ar </span></h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full text-center mt-4'>
                    <CardElement className="text-2xl " />
                    <button
                        type="submit"
                        className="bg-black text-white px-8 py-2 mt-4 rounded-xl cursor-pointer hover:bg-gray-800"
                        disabled={!stripe}
                    >
                        Payer
                    </button>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    </>
  )
}
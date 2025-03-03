import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import Accuieil from "./pages/User/Accueil/Accuieil";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { AddPayement } from "./Components/fetchData/Payement";

export default function App() {
    // const stripe = useStripe();
    // const elements = useElements();
    // const [error, setError] = useState(null);
    // const [clientSecret,setClientSecret] = useState("")
    // const queryClient = useQueryClient();

    // const mutation = useMutation(
    //     (newPayement) => AddPayement(newPayement),
    //     {
    //         onSuccess(value) {
    //             queryClient.invalidateQueries("payement");
    //             setClientSecret(value.clientSecret) 
    //             console.log(clientSecret)
    //         },
    //         onError(error) {
    //             console.log(error);
    //         }
    //     }
    // );

    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = async (data) => {
    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     const cardElement = elements.getElement(CardElement);

    //     // Envoyer les détails de la réservation et du paiement à votre backend
    //     mutation.mutate({
    //         amount: data.amount,
    //         reservation_id: data.reservation_id,
    //         payment_method: 'card',
    //     });

    //     // Confirmer le paiement avec Stripe
    //     const result = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: cardElement,
    //             billing_details: {
    //                 name: data.name,
    //             },
    //         },
    //     });

    //     if (result.error) {
    //         setError(result.error.message);
    //     } else {
    //         if (result.paymentIntent.status === 'succeeded') {
    //             alert('Payment successful!');
    //         }
    //     }
    // };

    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Name"
                />
                {errors.name && <p>{errors.name.message}</p>}

                <input
                    {...register("amount", { required: "Amount is required" })}
                    type="number"
                    placeholder="Amount"
                />
                {errors.amount && <p>{errors.amount.message}</p>}

                <input
                    {...register("reservation_id", { required: "Reservation ID is required" })}
                    type="text"
                    placeholder="Reservation ID"
                />
                {errors.reservation_id && <p>{errors.reservation_id.message}</p>}

                <CardElement className="w-full h-8 text-xl border-4 border-black" />

                <button
                    type="submit"
                    className="bg-black text-white px-8 py-4 rounded-xl cursor-pointer hover:bg-gray-800"
                    disabled={!stripe}
                >
                    Pay
                </button>

                {error && <div>{error}</div>}
            </form> */}
            <Accuieil />
        </>
    );
}

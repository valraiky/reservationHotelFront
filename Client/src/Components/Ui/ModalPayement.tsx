import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../Alert/succes';
import HeaderClient from '../header/HeaderClient';

type Props = {}

export default function ModalPayement({}: Props) {
    const [alertVisible, setAlertVisible] = useState(false);
    const navigate = useNavigate();

    const showAlert = () => setAlertVisible(true);
    const closeAlert = () => {setAlertVisible(false);navigate("/");};
  return (
    <div>
         <CustomAlert
        visible={alertVisible}
        title="Payement réussie"
        message="Votre payement avec stripe a été effectuée avec succès."
        onClose={closeAlert}
      />
      <HeaderClient />
      <div>
            <h1 className=''> <span className=' text-2xl bg-primary '>Payement</span> </h1>
      </div>
    </div>
  )
}
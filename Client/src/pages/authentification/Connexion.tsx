import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient} from "react-query";
import {AxiosError} from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import HeaderClient from "../../Components/header/HeaderClient";
import { Login } from "../../Components/typescript/Login";
import ErrorServer from "../../Components/Ui/ErrorServer";
import TitlePrimary from "../../Components/Ui/TitlePrimary";
import InputText from "../../Components/Ui/Input/InputText";
import { validateEmail } from "./validation/Email";
import Footer from "../../Components/footer/Footer";
import { validatePassword } from "./validation/Password";
import { Loginfetch } from "../../Components/fetchData/Login";
import InputSubmit from "../../Components/Ui/Input/InputSubmit";
import ForgetPassword from "../../Components/Ui/Text/ForgetPassword";
type Testa = {
  message : string
}

export default function Connexion() {
  const { register, formState: { errors }, handleSubmit } = useForm<Login>();
  const navigate = useNavigate();
  const {setRole, setToken,setUser} = useContext(DataContext)
  const [errorServer, setErrorServer] = useState<string>("");
  const queryClient = useQueryClient();


  const mutation = useMutation(Loginfetch, {
    onSuccess: (value) => {
      queryClient.invalidateQueries('users');
      setUser(value.userId)
      setRole(value.role)
      setToken(value.data)
      value.role === "Admin" ? navigate("/Admin") : navigate("/")
    },
    onError: (error : AxiosError<Testa>) => {
      if (error.response && error.response.data) {
        setErrorServer(error.response.data.message);
      } else {
        setErrorServer("An unexpected error occurred");
      }
    }
  });

  const onSubmit = async (formData: Login) => {
    mutation.mutate(formData);
  };

  return (
    <>
      <HeaderClient />
      <div className="mt-10 w-full h-full flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] h-auto bg-slate-100 rounded-xl p-4">
          <TitlePrimary title="Connecter Vous"/>
          {errorServer && ( <ErrorServer errorServer={errorServer} /> )}
          <InputText label="Email" register={register("email",validateEmail)} Err={errors.email?.message}/>
          <InputText show={true} label="Mot de passe" register={register("password",validatePassword)} Err={errors.password?.message}/>
          <InputSubmit />
          <ForgetPassword />
        </form>
      </div>
      <Footer />
    </>
  );
}

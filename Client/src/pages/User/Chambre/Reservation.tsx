import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import Footer from "../../../Components/footer/Footer";
import { DataContext } from "../../../context/DataContext";
import HeaderClient from "../../../Components/header/HeaderClient";
import CardOnlyChambreSmall from "../../../Components/Card/CardOnlyChambreSmall";
import CardImage from "../../../Components/Card/CardImage";
import CalculatePrice from "../../../Components/Ui/CalculatePrice";
import { addReservation, fetchReservation} from "../../../Components/fetchData/Reservation";
import { Reservation } from "../../../Components/typescript/Reservation";
import { fetchOneId } from "../../../Components/fetchData/fetchChambre";
import { ChambreTypeData } from "../../../Components/typescript/chambre";
import { calculateDaysBetweenDates } from "./CalculateDay";
import InputText from "../../../Components/Ui/Input/InputText";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Payement from "./Payement";
import { fetchUser } from "../../../Components/fetchData/Users";
import { User } from "../../../Components/typescript/User";

export default function Reservations() {
  const  [pay , setPay] = useState(false)
  const { token ,userId } = useContext(DataContext);
  const { id } = useParams();
  const idParse = parseInt(id!)
  const { data : User } = useQuery<User[], Error>(['user', token], () => fetchUser(token!));
  const { data : dataChambre } = useQuery<ChambreTypeData, Error>(['chambreId', idParse], () => fetchOneId(idParse));
  const { data : dataReservation } = useQuery<Reservation[], Error>(['reservationId', idParse], () => fetchReservation(token!));
  const [idReserv,setIdReserv] = useState()
  const { register, watch, formState: { errors }, handleSubmit, setError, clearErrors ,control } = useForm<Reservation>();
  const queryClient = useQueryClient();
  const [totalDays, setTotalDays] = useState(0);
  const newName = User?.find((u) => u.id === userId  )


  const mutation = useMutation(
    (formData: Reservation) => addReservation(token!, formData), {
    onSuccess: (value) => {
      queryClient.invalidateQueries('reservation');
      setIdReserv(value)
      setPay(true)
    },
    onError: (error) => {
      console.error("Error during mutation: ", error);
    }
  });

  const start = watch("dateEntrer");
  const end = watch('dateSortie');

  useEffect(() => {
    if (start && end) {
      const days = calculateDaysBetweenDates(new Date(start), new Date(end));
      setTotalDays(days);
    }
  }, [start, end]);


  const disabledDates = dataReservation?.flatMap((reservation: any) => {
    const start = new Date(reservation.dateEntrer);
    const end = new Date(reservation.dateSortie);
    const dateArray = [];
    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      dateArray.push(new Date(d));
    }
    return dateArray;
  }) || [];


  const onSubmit = async (formData: Reservation) => {
    if (dataChambre) formData.prixTotal = totalDays * dataChambre.prix
    formData.idChambre = idParse;
    formData.idUser = userId!
    formData.status = "En attente"

    if (new Date(formData.dateEntrer) >= new Date(formData.dateSortie)) {
      setError('dateSortie', {
        type: 'manual',
        message: "La date de sortie doit être ultérieure à la date d'entrée."
      });
      return;
    }
    clearErrors('dateSortie');
    mutation.mutate(formData);

    
  };

  return (
    <div>

      <HeaderClient />
      <div className="mt-10 w-full flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[600px] pb-8 bg-slate-100 rounded-xl p-4 max-[600px]:h-[900px]">
          <h1 className="text-5xl mt-4 mb-4 font-bold text-center bg-white p-4">Réserver</h1>
          <div className="gap-4 flex flex-row justify-between max-[600px]:flex-col mb-4">
            <CardImage img={dataChambre?.img} className={"h-60"} />
            <CardOnlyChambreSmall Name={dataChambre?.name} type={dataChambre?.type} prix={dataChambre?.prix} id={dataChambre?.id}/>
          </div>
          
          <div className="mb-4 ">
            <label className="w-full font-bold block">Date d'entrée</label>
            <Controller
              name="dateEntrer"
              control={control}
              rules={{ required: "Ce champ est requis" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  minDate={new Date()}
                  excludeDates={disabledDates}
                  dateFormat="yyyy-MM-dd"
                  className="h-10 w-96 bg-white rounded-lg pl-2 border-b-4 focus:border-l-4 border-fuchsia-500 outline-none"
                />
              )}
            />
            {errors.dateEntrer && <span className="text-red-500">{errors.dateEntrer.message}</span>}
          </div>
          <div className="mb-4 ">
            <label className="w-full font-bold block">Date de sortie</label>
            <Controller
              name="dateSortie"
              className="w-full "
              control={control}
              rules={{ required: "Ce champ est requis" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  minDate={new Date()}
                  excludeDates={disabledDates}
                  dateFormat="yyyy-MM-dd"
                  className="h-10 w-96 bg-white rounded-lg pl-2 border-b-4 focus:border-l-4 border-fuchsia-500 outline-none"
                />
              )}
            />
            {errors.dateSortie && <span className="text-red-500">{errors.dateSortie.message}</span>}
          </div>
          {/* <InputDate  label="Date d'entrée" register={register("dateEntrer",{required: "Ce champ est requis"})}  min={formattedDate} Err={errors.dateEntrer?.message} />
          <InputDate  label="Date de sortie" register={register("dateSortie",{required: "Ce champ est requis"})}  min={formattedDate} Err={errors.dateSortie?.message} /> */}
          <InputText  label="Telephone" register={register("telephone",{required: "Ce champ est requis"})}  Err={errors.telephone?.message} />
          <div className="text-center mt-4 flex flex-row justify-between">
            <input type="submit"   className="rounded-xl text-white font-bold px-8 py-2 bg-Primary" />
            <CalculatePrice prix={dataChambre?.prix} totalDays={totalDays}/>
          </div>
        </form>
      </div>

      <Footer />
        { pay &&  <Payement setPay={setPay}  nom={newName?.username!} id={idReserv!} totalAmount={dataChambre?.prix! * totalDays} /> } 
    </div>
  );
}
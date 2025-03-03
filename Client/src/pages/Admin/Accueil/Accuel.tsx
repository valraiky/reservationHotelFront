import { useQuery } from "react-query";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale, BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Reservation } from "../../../Components/typescript/Reservation";
import { User } from "../../../Components/typescript/User";
import { ChambreTypeData } from "../../../Components/typescript/chambre";
import { fetchUser } from "../../../Components/fetchData/Users";
import { fetchChambreInfinitepage } from "../../../Components/fetchData/fetchChambre";
import { fetchReservation } from "../../../Components/fetchData/Reservation";
import { option } from "./data/option";
import MenuAdmin from "../../../Components/menuAdmin/MenuAdmin";
import CardState from "../../../Components/Card/CardState";

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export default function AdminAccueil() {
    const { token } = useContext(DataContext)
    const { data: reservations, isLoading: isLoadingReservations } = useQuery<Reservation[]>(["reservations", token], () => fetchReservation(token!));
    const { data: users, isLoading: isLoadingUsers } = useQuery<User[]>(["users", token], () => fetchUser(token!));
    const { data: chambres, isLoading: isLoadingChambres } = useQuery<ChambreTypeData[]>(["chambres", token], () => fetchChambreInfinitepage(token!));
    const [menu, setMenu] = useState<boolean>(false);

    if (isLoadingReservations || isLoadingUsers || isLoadingChambres) return <div>Loading...</div>;

    const data = {
        labels: chambres?.map(u => `porte ${u.name}`),
        datasets: [
            {
                label: 'Prix des Chambres en Ar',
                data: chambres?.map((u) => u.prix), 
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    const options = option
    const totalRevenue = reservations?.reduce((accumulator, reservation) => accumulator + reservation.prixTotal, 0);

    return (
        <div className="flex flex-row justify-between">
            <MenuAdmin menu={menu}  setMenu={setMenu}/>
            <div className="w-full flex flex-row justify-center items-start pt-4 max-[1500px]:mt-8">
                <div className="flex flex-col items-center ">
                    <CardState users={users} chambres={chambres} reservations={reservations} totalRevenue={totalRevenue} />
                    <div className="max-xl:w-[600px] max-md:w-[300px] h-[600px] relative mt-8  chart-container">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )
}

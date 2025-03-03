import { Link, useParams } from "react-router-dom"
import {useQuery } from "react-query";
import { useContext, useState } from "react";
import Footer from "../../../Components/footer/Footer";
import { DataContext } from "../../../context/DataContext";
import { ChambreTypeData } from "../../../Components/typescript/chambre";
import { fetchOneId } from "../../../Components/fetchData/fetchChambre";
import HeaderClient from "../../../Components/header/HeaderClient";
import CardImage from "../../../Components/Card/CardImage";
import CardOnlyChambre from "../../../Components/Card/CardOnlyChambre";

export default function ChambreId() {
  const [dmd,setDmd] = useState("")
  const { token } = useContext(DataContext);
  const { id  } = useParams<{id : string}>()
  const idParse = parseInt(id!)
  const { data ,isLoading  } = useQuery<ChambreTypeData, Error>( ['chambreId',idParse],() => fetchOneId(idParse!));

  if (isLoading) {
    return <div className="flex justify-center items-center w-full h-full bg-Primary-wh">...Loading </div>
  }
    return (
    <div>
        <HeaderClient />
        {
          dmd !== "" &&
            <div>
              <h1 className="bg-red-500 bg-opacity-15 text-red-500 text-base text-center font-bold">{dmd} <Link to={"/Connexion"} className="text-lg bg-Primary-Text-Hover border-b-4 border-purple-500 hover:border-purple-600" >Connexion</Link></h1>
            </div>
        }
        <div className="flex justify-center w-full">
          <div className="mt-10  flex flex-row justify-between w-[1200px] gap-5 max-[1200px]:flex-col">
             <CardImage img={data?.img} className="h-80"/>
              <CardOnlyChambre setDmd={setDmd} Name={data?.name}  id={data?.id}  prix={data?.prix} token={token} type={data?.type} />
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
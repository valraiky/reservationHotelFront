import { useQuery } from "react-query";
import { useState, useContext } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc"
import Header from "../Header/Header";
import { DataContext } from "../../../context/DataContext";
import {  fetchChambre } from "../../../Components/fetchData/fetchChambre";
import { modal } from "../../../Components/typescript/modal";
import Pagination from "../../../Components/Pagination/Pagination";
import CardChambre from "../../../Components/Card/CardChambre";
import { ChambreTypeData, chambreType } from "../../../Components/typescript/chambre";
import CardModalDelete from "../../../Components/Card/CardModalDelete";
import Search from "../../../Components/Ui/Search";
import Trier from "../../../Components/Ui/Trier";
import { Link } from "react-router-dom";

export default function AdminChambre() {
  const [page, setPage] = useState(1);
  const limit = 4;
  const [menu, setMenu] = useState<boolean>(false);
  const { token } = useContext(DataContext);
  const [deleteChambreState, setDeleteChambreState] = useState<modal>({ modal: false, id : 0 });
  const [search ,setSearch] = useState("")
  const [short ,setShort] = useState("")
  const { data, isLoading, isError } = useQuery<chambreType>(['chambres',page , limit,search,short ] , () => fetchChambre( page!,limit!,search!,short!));

  if (isLoading) {return <h1 className="">Loading...</h1>;}
  if (isError || !data) { return <div>Error loading data</div>;}

  return (
    <div className="flex flex-row">
      <div className="w-[300px] max-[1500px]:hidden">
          <Header  />
      </div>
      <div className="max-[1500px]:block  hidden ">
          <div className=" absolute z-50 max-[1500px]:mt-2">   
              <IoMenuSharp style={{color : "white" }} onClick={() => setMenu(true)} size={40}  className={`cursor-pointer border-4 border-purple-500 bg-purple-500 ${menu ? "hidden" : "" }`}/>{/*  */}  
              <VscChromeClose style={{color : "white"}} onClick={() => setMenu(false)} size={40} className={`cursor-pointer border-4 border-white   ${menu ? "" : "hidden" }`}/> {/**/} 
          </div>
          <div className={`absolute   ${menu ? "opacity-100 duration-200 z-10" : "opacity-0 duration-200 -z-10"}`}>
              <Header />
          </div>
      </div>

      <div className="w-[100%] pt-5 ">
        <div className="w-full flex flex-row justify-between mb-4">
          <div className="w-full px-10 mt-2 max-sm:mb-4">
            <h1 className="bg-Primary-Text  ml-2 text-4xl font-bold text-center max-sm:text-lg">Liste des Chambres</h1>
            <div className="flex flex-row max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center justify-between w-full">
                <Trier setShort={setShort} />
                <Search setSearch={setSearch} setPage={setPage}/>
            </div>
          </div>
        </div>
        <div className="px-8 my-4">
          <Link to={"/AdminAjouterChambre"} className="bg-Primary text-white font-bold px-4 py-2 rounded-lg shadow-md">+ Ajouter un chambre</Link>
        </div>

        <div className="px-8 flex flex-row max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center max-sm:mt-4 justify-between flex-wrap gap-2">
          {data?.data && data.data.map((i : ChambreTypeData) =>{
            return (
              <CardChambre  idEdit={i.id} setDeleteChambreState={setDeleteChambreState} img={i.img} Name={i.name} prix={i.prix} type={i.type} id={i.id} voirPlus={true} />
          )
          } )}
          {data.data.length === 0 && <h1 className="text-black font-bold text-2xl">Aucun Chambre</h1> }
        </div>
        <Pagination data={data} page={page} limit={limit} setPage={setPage}/>
      </div>
      <CardModalDelete deleteChambreState={deleteChambreState} id={deleteChambreState.id} setDeleteChambreState={setDeleteChambreState} token={token!} />
    </div>
  );
}

import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardEditDelete from "./CardEditDelete";

type Props = {
    id : number ;
    Name : string ; 
    type : string ;
    prix : number ;
    img : string ;
    voirPlus ?: boolean;
    setDeleteChambreState ?: ({modal, id} : {modal : boolean , id : number}) => void
    idEdit ?: number
    like ?: number
}

export default function CardChambre({id,Name,type,prix,img,voirPlus,setDeleteChambreState,idEdit,like}: Props) {
  return (
    <div key={id} className="shadow-xl rounded-2xl bg-slate-100 w-64 pb-8 mb-4 cursor-pointer  ">
        <div className="flex flex-row justify-center mt-4">
            <h1 className="text-center w-48 font-bold text-xl bg-Primary-Text">Porte {Name}</h1>
            <div className="absolute translate-x-28">
                <span className="text-red-500 text-xl inline-block">{like} </span>
                <FaRegHeart style={{ fontSize: 25, color: "red" }} className="inline-block"/>
            </div>
        </div>

        <div className="w-full h-[160px] flex flex-row justify-center mb-12 mt-2">
            <img className="rounded-xl h-40 w-[250px]" src={`http://localhost:3030${img}`} alt={`http://localhost:3030${img}`} />
        </div>

        <div className="">
            <div className="flex flex-row justify-between px-4">
                <h2 className="text-sm rounded-md font-bold bg-fuchsia-100 text-fuchsia-500 px-2 py-1">{prix} Ar</h2>
                <p className="text-sm rounded-md bg-white text-gray-900 font-bold px-2 py-1">{type} </p>
                
            </div>
            {
                voirPlus ? 
                        <CardEditDelete setDeleteChambreState={setDeleteChambreState!} id={idEdit!} /> : 
                        <div className={`flex flex-row justify-center mt-4 px-4 `}>
                            <Link to={`/Chambre/${id}`} className="bg-Primary text-white px-2 py-1 rounded-md">Voir Plus ...</Link>
                        </div>
            }
            
        </div>
    </div>
  )
}
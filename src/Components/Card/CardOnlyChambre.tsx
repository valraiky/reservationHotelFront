import { useNavigate } from 'react-router-dom';

type Props = {
    Name ?: string;
    type ?: string;
    prix ?: number;
    id ?: number;
    token ?: string;
    setDmd : (a : string) => void
}

export default function CardOnlyChambre({Name,type,id,prix,token,setDmd}: Props) {
    const navigate = useNavigate();
  return (
    <div className=" border-black w-full">      
        <h1 className="text-3xl font-bold text-center bg-Primary-Text">Porte {Name} </h1>
        <div className="px-8 mt-2">
            <p className="text-sm text-gray-500"> <span className="font-bold text-black"> Description </span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quidem, laborum numquam, illum rerum dolorem accusamus modi fugiat incidunt hic, facilis voluptate assumenda! Repellat aspernatur corrupti asperiores quas sapiente dicta!</p>
        </div>
        
        <div className="flex flex-row justify-between px-8 mt-4 max-[500px]:flex-col max-[500px]:gap-4">
            <div className="bg-gray-200 p-4 rounded-lg">
            <h1 className="text-md font-bold max-[1200px]:text-center">Type de Chambre </h1>
            <p className="text-white text-xl font-bold text-center bg-Primary-Text"> {type} </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
            <h1 className="text-md font-bold max-[1200px]:text-center">Prix de Chambre</h1>
            <p className="text-white text-xl font-bold text-center bg-Primary-Text"> {prix} Ar</p>
            </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap mx-8 mt-4">
            <button className="px-8 py-2 rounded-xl text-center bg-Primary text-white text-xl font-bold" onClick={() => {
            token === "" ? setDmd("Vous n'etes pas connecter , connecter vous : ") : navigate(`/Reservation/${id}`)
            }}>Reserver</button>
        </div>
    </div>
  )
}
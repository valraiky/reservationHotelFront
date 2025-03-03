import { FaHotel } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { LinkMenuAdmin } from "../../../Components/menuAdmin/LinkMenu";

export default function Header() {
    const {pathname} = useLocation()
  return (
    <div className="bg-Primary-wh  h-screen w-[300px] pt-4">
        <div className="mb-10  flex justify-center ">
            <div className="flex flex-row">
                <FaHotel size={50} color="white" style={{display:"inline-block"}} />
                
                <div className="ml-4">
                    <h1 className=" border-black text-white text-3xl font-bold text-center"> Hôtel </h1>
                    <h1 className=" border-black text-white text-3xl font-bold text-center">  Mayana</h1>
                </div>
            </div>
        </div>
   
        <div className="flex flex-col justify-between h-[200px] px-6">
            {
                LinkMenuAdmin.map((menu) => {
                    const isActived = pathname === menu.route
                    return(
                            <Link to={menu.route} className={`${isActived ? "ActiveMenu hover:bg-white" : "" } px-4 py-2 font-semibold bg-white text-black m-2 flex flex-row justify-center rounded-lg hover:bg-slate-200 cursor-pointer `}  >
                                <span className="text-purple-500 text-xl"> {<menu.icons size={30} />} </span>   
                                <span className="bg-Primary-Text ml-2"> {menu.label} </span>
                            </Link>)
                    })
            }
        </div>
    </div>
  )
}
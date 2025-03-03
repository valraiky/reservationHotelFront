import { IoLogInSharp, IoLogOutSharp } from "react-icons/io5"
import { RiLogoutCircleFill } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"

type Props = {
    token : string,
    setToken : (token : string) => void
}

export default function Auth({token,setToken}: Props) {
  const navigate = useNavigate()
  return (
        <div className="flex flex-row  ">
            <div className="flex flex-row max-[1300px]:hidden ">
              <div className="">
              {
                token && <a onClick={() => { setToken("") ; navigate("/")}} className="text-gray-600 bg-white rounded-xl cursor-pointer hover:bg-gray-200 px-4 py-1" ><span className=" text-2xl inline-block "><RiLogoutCircleFill className="inline-block" size={20}/></span>  Deconnexion  </a>                      
              }
              </div>
              {
                !token && <div className="flex flex-row h-11">
                              <Link className="text-gray-600 rounded-l-lg flex flex-row  py-2 px-4 bg-white hover:bg-slate-200 font-bold" to={"/Connexion"}>Connexion <span className="text-gray-500 text-2xl"><IoLogInSharp size={30}/></span> </Link>
                              <Link className=" rounded-r-lg flex flex-row  py-2 px-4  bg-Primary hover:bg-Primary-hover text-white font-bold" to={"/inscription"}><span className="text-white text-2xl"><IoLogOutSharp size={30}/></span> Inscription  </Link>     
                </div>
              }             
            </div> 

            
        </div>
  )
}
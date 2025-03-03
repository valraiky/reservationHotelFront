import { IoLogInSharp, IoLogOutSharp, IoMenuSharp } from "react-icons/io5"
import Menu from "./Menu"
import { VscChromeClose } from "react-icons/vsc"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"
import { RiLogoutCircleFill } from "react-icons/ri"

type Props = {
    menu :boolean
    setMenu : (menu : boolean) => void
    token ?: string
}

export default function Resposive({menu,setMenu,token}: Props) {
  return (
        <div className=" rounded-xl duration-100">
            <IoMenuSharp style={{color : "white"}} onClick={() => setMenu(true)  } size={60}  className={`cursor-pointer  ${menu ? "hidden" : "" }`}/>
            <VscChromeClose style={{color : "white"}} onClick={() => setMenu(false)} size={60}  className={`cursor-pointer ${menu ? "" : "hidden" }`}/>
            <div className={`bg-Primary-wh rounded-xl absolute py-4  z-50 ${menu ? "opacity-100 duration-200" : "opacity-0 duration-200"}`}>
                  <Logo />
                  <Menu />
                {
                    token ? <div className={`flex flex-col ${menu} mx-4`} >
                          <a className=" rounded-lg flex flex-row  py-2 px-4 bg-white hover:bg-slate-200 font-bold"  >Deconnexion <span className="text-black text-2xl"><RiLogoutCircleFill size={30}/></span> </a>
                        </div> : 
                        <div className= {`${menu} mx-4 flex flex-col  p-4`}>
                          <Link className=" rounded-lg flex flex-row my-2 py-2 px-4 bg-white hover:bg-slate-200 font-bold" to={"/Connexion"}>Connexion <span className="text-black text-2xl"><IoLogInSharp size={30}/></span> </Link>
                          <Link className=" rounded-lg flex border-4 border-white flex-row  py-2 px-4  bg-Primary hover:bg-Primary-hover text-white font-bold" to={"/inscription"}><span className="text-white text-2xl"><IoLogOutSharp size={30}/></span> Inscription  </Link>
                        </div>

                }
            </div>
          </div> 
  )
}
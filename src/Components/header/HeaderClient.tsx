import {  useState} from "react";
import { useContext} from "react";
import Logo from "../Logo/Logo";
import Menu from "../menu/Menu";
import { DataContext } from "../../context/DataContext";
import Resposive from "../menu/Resposive";
import Auth from "../authComponents/auth";


export default function HeaderClient() {
  const [menu, setMenu] = useState<boolean>(false);
  const {token,setToken} = useContext(DataContext)
 

  return (
    <div className={` h-20  bg-Primary-wh  `}>
      <div className="flex flex-row justify-between py-4  h-20 "> 
        <div className="max-[1330px]:hidden">
          <Logo />
        </div>
        <div className="max-[1330px]:hidden">
          <Menu />
        </div>
        <div className="max-[1330px]:flex hidden ">
          <Resposive menu={menu} setMenu={setMenu} token={token} />
        </div>
        <Auth token={token!} setToken={setToken} />
     
      </div>
    </div>
  )
}
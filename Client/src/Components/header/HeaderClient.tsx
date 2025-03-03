import { useEffect, useState} from "react";
import { useContext} from "react";
import Logo from "../Logo/Logo";
import Menu from "../menu/Menu";
import { DataContext } from "../../context/DataContext";
import Resposive from "../menu/Resposive";
import Auth from "../authComponents/auth";
import { IoNotifications } from "react-icons/io5";


export default function HeaderClient() {
  const [menu, setMenu] = useState<boolean>(false);
  const {token,setToken,setNotif,notif} = useContext(DataContext)
 

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
        {
          token &&  <div onClick={() => {setNotif(0)  } }>
            {notif > 0 &&  <span className="absolute cursor-pointer text-white bg-red-500 rounded-full text-[10px] px-[4px] py-[2px]"> {notif} </span>}
          <IoNotifications className="text-white"  size={40}/>
        </div>
        }
      </div>
    </div>
  )
}
import { AiOutlineSlack } from "react-icons/ai"

type Props = {}

export default function Logo({}: Props) {
  return (
    <div className="flex flex-row "> 
          <div className=" flex justify-center">
            <p className="text-[30px] text-center mx-2">
              <AiOutlineSlack className={`text-white `} style={{fontSize:40 }}/>          
            </p>
            <div className="h-[60px]">
              <p className={`font-bold text-2xl  text-white  shadow-xl rounded-xl px-2`}>HOTEL MAYANA</p> 
              <p className={`text-center font-bold text-white text-xs  `}>MAJUNGA</p>  
            </div>     
         </div>
        </div>
  )
}
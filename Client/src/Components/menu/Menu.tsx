import { Link, useLocation } from "react-router-dom"
import { MenuData } from "./Link/Data"

export default function Menu() {
    const {pathname} = useLocation()
  return (
    <>
        <div className=" ml-4 text-white ">
            <ul className="flex flex-row max-[1300px]:flex-col">
                {
                    MenuData.map((items) => { 
                        const isActive = pathname === items.path
                        return(
                            <li className="borderAnimateLi">
                                <Link className={`m-2  borderAnimate ${isActive ?  "border-b-2 border-white" : "" }`} to={items.path}> {items.label} </Link> 
                            </li>
                        )  
                    } )
                }        
            </ul>
        </div>
    </>

  )
}
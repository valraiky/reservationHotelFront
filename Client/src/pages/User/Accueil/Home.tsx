import Image from "/images/Chambre1.jpg"
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";


export default function Home() {
    return (
      <>
            <h1 className="text-center bg-Primary-Text text-4xl font-black max-xl:text-2xl pt-10  max-[700px]:text-lg  max-[700px]:pt-5">Notre offers en moi de Juillet 2024</h1>
             <div className="white  pt-10 w-full flex justify-center max-[700px]:pt-5">
                <div className=" ">
                    
                    <div className="flex flex-row justify-around w-[1100px] max-xl:flex-col max-xl:w-[700px] max-[700px]:w-[300px] ">
                        <div className="h-[300px] flex items-center max-xl:hidden">
                            <MdNavigateBefore className="text-xl bg-Primary text-white rounded-lg" size={60}/>
                        </div>
                        <div className=" w-full h-[400px] px-5 py-10 max-xl:py-5 max-xl:h-[300px] max-[700px]:py-0 max-[700px]:px-0">
                            <div className="h-[230px] flex flex-row justify-between bg-slate-100  w-full  rounded-xl shadow-xl  max-[700px]:h-[180px]">
                                <div className="w-full ">
                                    <img className="h-full rounded-lg " src={`${Image}`} alt="" />
                                </div>
                                <div className="h-full w-full pt-2 m-2">
                                    <h1 className="text-2xl max-xl:text-xl max-[700px]:text-sm font-bold bg-Primary-Text">Porte 8</h1>
                                    <h2 className="text-lg mt-2 max-xl:text-sm  max-[700px]:text-[12px] text-gray-500">petite Description du chambre ...</h2>
                                    <button className="text-white bg-Primary-wh max-[700px]:text-sm mt-2 rounded-md px-4 py-1 text-lg font-bold">900 $</button>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-[400px] px-5 py-10 max-xl:py-5 max-xl:h-[300px] max-[700px]:py-0 max-[700px]:px-0">
                            <div className="h-[230px] flex flex-row justify-between bg-slate-100  w-full  rounded-xl shadow-xl max-[700px]:h-[180px]">
                                <div className="w-full ">
                                    <img className="h-full rounded-lg " src={`${Image}`} alt="" />
                                </div>
                                <div className="h-full w-full pt-2 m-2">
                                    <h1 className="text-2xl max-xl:text-xl max-[700px]:text-sm  font-bold bg-Primary-Text">Porte 8</h1>
                                    <h2 className="text-lg mt-2 max-xl:text-sm max-[700px]:text-[12px] text-gray-500">petite Description du chambre ...</h2>
                                    <button className="text-white bg-Primary-wh max-[700px]:text-sm  mt-2 rounded-md max-xl:px-2  px-4 py-1 text-lg font-bold">900 $</button>
                                </div>
                            </div>
                        </div>
                        <div className="h-[300px] flex items-center max-xl:hidden">
                        <MdNavigateNext className="text-xl bg-Primary text-white rounded-lg" size={60}/>
                    
                        </div>
                    </div>
                   
                </div>
            
            </div>  
      </>
    )
  }  
// import Image from "../../public/images/Chambre1.jpg"

export default function Footer() {
    return (
      <>
          <footer className=" bg-Primary-wh mt-10 px-4 py-10 flex flex-row justify-between max-sm:flex-col max-sm:justify-center">
            
            <div className="flex flex-col w-[450px] max-xl:hidden">
                <div className="flex flex-row">
                    <div>
                        {/* <img src={`${Image}`} width="150px" height="200px" alt="" /> */}
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">HOTEL</p>
                        <p className="text-4xl font-bold text-white">MAYANA</p>
                        <p className="text-lg max-xl:text-sm  text-gray-200 font-normal ">Majunga</p>
                    </div>
                  
                </div>
                <div className="mt-4">
                    <p className="text-lg max-xl:text-sm  text-white ">Monument Funéraire France Des
                        Souvenirs Éternels, Un Respect
                        Immuable.</p>
                </div>
            </div>
            
            
            <div className="max-sm:hidden borderAnimateOnlyLi">
                <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center">Produits</h1>
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " >ClassNameique</p>
                
                
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " >Moderne</p>
                
                
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " >Cinéraire</p>
                
                
                  <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " >Musulman</p>
                
                
                  <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " >Chrétien</p>
                
                
                  <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " >Asiatique</p>
                
                
                  <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer borderAnimateOnly " >Israelite</p>
                
                         
            </div>


            <div className="max-sm:hidden">
                <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center">A propos</h1>
                
                

                
                 <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center  borderAnimateOnly cursor-pointer" >FAQ</p>
                

                
                 <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center borderAnimateOnly  cursor-pointer" >Conseils</p>
            </div>

            
            <div className="max-sm:hidden">
                <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center">Contacts</h1>
                
                

                
                 <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center borderAnimateOnly  cursor-pointer" >📞 0324172186</p>
                

                
                 <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center borderAnimateOnly  cursor-pointer" >📧  Entreprise@gmail.com</p>
                <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center mt-4">Reseaux Social</h1>
                <div className="flex flex-row justify-between">
                    <p className="text-2xl  max-xl:text-lg cursor-pointer hover:scale-[1.1] "> 📧  </p> 
                    <span className="text-2xl max-xl:text-lg bg-blue-500 py-1 px-4 text-white font-black rounded-md hover:scale-[1.1] cursor-pointer">f</span>
                    <span className="bg-blue-100 p-2 text-white font-black rounded-md hover:scale-[1.1] cursor-pointer">🌐</span>
                </div>
              
                
            </div>

            {/* responsive */}

            <div className="hidden max-sm:block">
                <div className="">
                    <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center">Produits</h1>
                        <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer  max-sm:hover:text-gray-300 " >ClassNameique</p>
                    
                    
                        <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer  max-sm:hover:text-gray-300 " >Moderne</p>
                    
                    
                        <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer  max-sm:hover:text-gray-300 " >Cinéraire</p>
                    
                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer  max-sm:hover:text-gray-300 " >Musulman</p>
                    
                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer  max-sm:hover:text-gray-300 " >Chrétien</p>
                    
                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer  max-sm:hover:text-gray-300 " >Asiatique</p>
                    
                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer  max-sm:hover:text-gray-300 " >Israelite</p>
                    
                            
                </div>


                <div>
                    <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center">A propos</h1>
                    
                    

                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center max-sm:hover:text-gray-300   cursor-pointer" >FAQ</p>
                    

                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center max-sm:hover:text-gray-300   cursor-pointer" >Conseils</p>
                </div>

                
                <div>
                    <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center">Contacts</h1>
                    
                    

                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer max-sm:hover:text-gray-300" >📞 0324172186</p>
                    

                    
                    <p className="text-lg max-xl:text-sm text-white p-2 max-sm:text-center   cursor-pointer max-sm:hover:text-gray-300" >📧  Entreprise@gmail.com</p>
                    <h1 className="text-2xl max-xl:text-lg font-bold mb-4 text-white max-sm:text-center mt-4">Reseaux Social</h1>
                    <div className="flex flex-row justify-between max-sm:justify-center max-sm:gap-4">
                        <p className="text-2xl  max-xl:text-lg cursor-pointer hover:scale-[1.1] "> 📧  </p> 
                        <span className="text-2xl max-xl:text-lg bg-blue-500 py-1 px-4 text-white font-black rounded-md hover:scale-[1.1] cursor-pointer">f</span>
                        <span className="bg-blue-100 p-2 text-white font-black rounded-md hover:scale-[1.1] cursor-pointer">🌐</span>
                    </div>
                
                    
                </div>
            </div>
          </footer>
      </>
    )
  }  
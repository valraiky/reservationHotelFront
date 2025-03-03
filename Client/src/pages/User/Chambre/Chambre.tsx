import { useQuery } from "react-query";
import { useState } from "react";
import Footer from "../../../Components/footer/Footer";
import HeaderClient from "../../../Components/header/HeaderClient";
import { chambreType } from "../../../Components/typescript/chambre";
import Trier from "../../../Components/Ui/Trier";
import Search from "../../../Components/Ui/Search";
import { fetchChambre } from "../../../Components/fetchData/fetchChambre";
import CardChambre from "../../../Components/Card/CardChambre";
import Pagination from "../../../Components/Pagination/Pagination";

export default function Chambre() {
    const [page, setPage] = useState(1);
    const limit = 6;
    const [search ,setSearch] = useState("")
    const [short ,setShort] = useState("")
    const { data, isLoading, isError } = useQuery<chambreType>(['chambres',page , limit,search,short ] , () => fetchChambre( page!,limit!,search!,short!));

    if (isLoading) {return <h1 className="">Loading...</h1>;}
    if (isError || !data) { return <div>Error loading data</div>;}

    return (
        <div>
            <HeaderClient />
            <div className="w-full flex justify-center">
                <div className="w-[1000px]">
                    <div className="mt-4 flex flex-row justify-between mb-8">
                        <Trier setShort={setShort} />
                        <Search setSearch={setSearch} setPage={setPage}/>
                    </div>
                   
                    <div className="flex flex-row justify-start gap-5 flex-wrap border-black max-[700px]:gap-1">
                        {
                        data?.data &&  data.data.map((i) => {
                            return( 
                                <CardChambre voirPlus={false} id={i.id} Name={i.name} type={i.type} prix={i.prix} img={i.img} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Pagination data={data} page={page} limit={limit} setPage={setPage}/>
            <Footer />
        </div>
    );
}

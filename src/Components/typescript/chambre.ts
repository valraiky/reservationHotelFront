export interface chambreType {
    data : {
        name: string;
        prix: number;
        type: string;
        img: string;
        id: number;
    }[]
    totalItems ?:number
} 
export type ChambreTypeData = {
        name: string;
        prix: number;
        type: string;
        img: string;
        id: number;
}
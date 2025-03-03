import axios from "axios";

export const AddPayement = async (dataFrom : any) => {
    const response = await axios.post('http://localhost:3030/api/payments',dataFrom);
    return response.data;
  };
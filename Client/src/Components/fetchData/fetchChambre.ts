import axios from "axios";

export const fetchChambre = async ( page: number,limit : number,search : string,sortBy : string) => {
    const response = await axios.get(`http://localhost:3030/api/chambres`,
        {
            params : { page,limit,search,sortBy }
        });
    return response.data;
}

export const fetchOneId = async (id : number  ) => {
    const res = await axios.get(`http://localhost:3030/api/chambres/${id}`)
    return res.data.data
}
  
export const fetchChambreInfinitepage = async (token: string) => {
    const res = await axios.get("http://localhost:3030/api/chambres?page=1&limit=100", {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data.data
}

export  const deleteChambre = async (id: number, token: string) => {
    const response = await axios.delete(`http://localhost:3030/api/chambres/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
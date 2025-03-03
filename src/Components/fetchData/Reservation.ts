import axios from "axios";
import { Reservation } from "../typescript/Reservation";

export const fetchReservation = async (token: string) => {
    const res = await axios.get("http://localhost:3030/api/reservations", {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data.data
}
export const fetchReservationOnly = async (token: string,id:number) => {
    const res = await axios.get(`http://localhost:3030/api/reservations/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data.data
}

export const addReservation = async (token: string, newUser: Reservation) => {
    const response = await axios.post('http://localhost:3030/api/reservations', newUser, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    return response.data.data;
  };
  

export const EditReservation = async (token: string, newUser: Reservation,id : number) => {
    const response = await axios.put(`http://localhost:3030/api/reservations/${id}`, newUser, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    return response.data.data;
  };
  

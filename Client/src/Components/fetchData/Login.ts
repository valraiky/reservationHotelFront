import axios from "axios";
import { Login } from "../typescript/Login";

export const Loginfetch = async (dataFrom : Login) => {
    const response = await axios.post('http://localhost:3030/api/login',dataFrom);
    return response.data;
  };
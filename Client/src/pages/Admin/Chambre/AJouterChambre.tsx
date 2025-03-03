import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
type Props = {};

interface Data {
  name: string;
  type: string; 
  prix: number;
  img: FileList; 
}

interface ErrorResponse {
  message: string;
}

const addChambre = async (formData: FormData,token : string) => {
  try {
    const response = await axios.post('http://localhost:3030/api/chambres', formData, {
      headers: {
        contentType: "multipart/form-data",
        authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la chambre:', error);
    throw error;
  }
};

export default function AdminAjouterChambre({}: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<Data>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { token } = useContext(DataContext);
  const [errorServer, setErrorServer] = useState<string>("");
  const mutation = useMutation(
    (formData: FormData) => addChambre(formData, token!), // Passer le token ici
    {
      onSuccess: () => {
        queryClient.invalidateQueries('chambre');
        navigate("/AdminChambre");
      },
      onError: (error: AxiosError<ErrorResponse>) => {
        if (error.response && error.response.data) {
          setErrorServer(error.response.data.message);
        } else {
          setErrorServer("An unexpected error occurred");
        }
        console.error("Error during mutation: ", error); // Log to check errors
      }
    }
  );


  const onSubmit = (formData: Data) => {
    const formDataObj = new FormData();
    
    formDataObj.append('name', formData.name);
    formDataObj.append('type', formData.type);
    formDataObj.append('prix', formData.prix.toString());
    
    if (formData.img && formData.img.length > 0) {
      formDataObj.append('img', formData.img[0]);
    } else {
      console.error('L\'image fournie n\'est pas un fichier.');
      return;
    }

    mutation.mutate(formDataObj);
  };

  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] h-auto bg-slate-100 rounded-xl p-4">
        <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-violet-500 bg-Primary-Text">Ajouter une chambre</h1>
        {errorServer && (
            <div className="w-full flex justify-center">
              <span className="text-red-500 text-sm bg-red-500 bg-opacity-15 px-8 py-1 ">  {errorServer} </span>
            </div>
          )}

        <div className="mb-2">
          <label htmlFor="nbPlace" className="font-bold">Nom de Chambre</label>
          <input
            {...register("name", { required: "Ce champ est requis" })}
            placeholder="Entrez le nom de chambre"
            type="text"
            className="w-full border-b-4 py-2 pl-2 border-fuchsia-500 focus:outline-none focus:border-l-4 rounded-lg"
            id="nbPlace"
          />
          {errors.name && (<p className="text-red-500 text-xs">🔺 {errors.name.message}</p>)}
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="font-bold">Type de Chambre</label>
          <select
            className="w-full h-11 pl-2 border-b-4 border-fuchsia-500 focus:border-l-4 rounded-lg"
            {...register("type", { required: "Ce champ est requis" })}
          >
            <option value="Simple">Simple</option>
            <option value="Double">Double</option>
            <option value="Famille">Famille</option>
          </select>
          {errors.type && (<p className="text-red-500 text-xs">🔺 {errors.type.message}</p>)}
        </div>

        <div className="mb-2">
          <label htmlFor="prix" className="font-bold">Prix par Nuit</label>
          <input
            {...register("prix", { required: "Ce champ est requis", valueAsNumber: true })}
            placeholder="Entrez le prix d'une chambre par nuit"
            type="number"
            className="w-full border-b-4 py-2 pl-2 border-fuchsia-500 focus:outline-none focus:border-l-4 rounded-lg"
            id="prix"
          />
          {errors.prix && (<p className="text-red-500 text-xs">🔺 {errors.prix.message}</p>)}
        </div>

        <div className="mb-2">
          <label htmlFor="MDP" className="font-bold">Sélectionner une Image</label>
          <input
            {...register("img", { required: "Ce champ est requis" })}
            type="file"
            className="h-11 w-full rounded-lg cursor-pointer bg-white text-gray-800 py-2"
          />
          {errors.img && (<p className="text-red-500 text-xs">🔺 {errors.img?.message}</p>)}
        </div>

        <div className="text-center mt-4">
          <input
            type="submit"
            className="border-b-4 border-black rounded-xl text-white font-bold px-8 py-2 bg-Primary"
          />
        </div>
      </form>
    </div>
  );
}

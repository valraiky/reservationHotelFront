import { useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import { BsEye, BsEyeSlash } from "react-icons/bs"

type Props = {
    label : string
    register : UseFormRegisterReturn
    Err : any
    type ?: string
    show ?: boolean 
}

export default function InputText({ register,Err,label,type,show}: Props) {
  const  [showPassword,setShowPassword] = useState("password")
  return (
    <div className="mb-2 relative">
        <label htmlFor="email" className="font-bold"> {label} </label>
        <input
            {...register}
            placeholder={`Entrez votre ${label}`}
            type={show ? showPassword :  type  }
            className={`w-full border-b-4 py-2 pl-2 border-fuchsia-500 focus:outline-none focus:border-s-4 rounded-lg ${Err ? "mb-0" : "mb-4"}  `}
            id="email"
        />
        {Err && <p className="text-red-500 text-xs">🔺 {Err}</p>}
        { show && (showPassword === "password" ? <BsEyeSlash className="absolute right-2 -translate-y-11 cursor-pointer" onClick={() => setShowPassword("text")  } /> : 
         <BsEye className="absolute right-2 -translate-y-11  cursor-pointer" onClick={() => setShowPassword("password")  } /> )  }
        
    </div>
  )
}
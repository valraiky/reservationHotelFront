import { Link } from 'react-router-dom'

type Props = {}

export default function ForgetPassword({}: Props) {
  return (
    <div className="mt-4">
        <p className="text-center">
        Vous n'avez pas de compte ?
        <Link to={"/inscription"} className="text-fuchsia-500 underline cursor-pointer mt-4 hover:text-violet-500">
            s'inscrire ici
        </Link>
        </p>
  </div>
  )
}
type Props = {}

export default function InputSubmit({}: Props) {
  return (
    <div className="text-center mt-4">
        <input
            type="submit"
            className="border-b-4 border-black rounded-xl text-white font-bold px-8 py-2 bg-Primary"
        />
    </div>
  )
}
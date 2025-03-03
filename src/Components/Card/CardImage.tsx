type Props = {
    img?: string
    className ?: string
}

export default function CardImage({img,className}: Props) {
  return (
    <div className=" border-black w-full max-[1200px]:px-8 ">
        <img src={`http://localhost:3030${img}`} className={`w-full rounded-3xl shadow-xl ${className}`} alt="" />
    </div>
  )
}
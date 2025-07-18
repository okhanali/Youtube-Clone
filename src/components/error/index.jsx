import { Link } from "react-router-dom"


const Error = ({message}) => {
  return (
    <div className="bg-red-500 w-fit rounded p-8 flex flex-col gap-5 mx-auto text-center my-60 ">
      <p>Üzgünüz Bir Hata Olustu. Tekrar Deneyiniz</p>
      <h1 className="font-bold text-xl">{message}</h1>

      <div>
        <Link to={"/"} className="border border-zinc-300 px-2 py-3 rounded-md hover:bg-zinc-100/20 transition">
          Ana Sayfaya Gidiniz
        </Link>
      </div>
    </div>
  )
}

export default Error
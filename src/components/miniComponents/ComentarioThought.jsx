import react from "react"
import { GrMoreVertical } from "react-icons/gr"
// interacciones
import { AiFillLike } from "react-icons/ai"
import { AiFillDislike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"

export const ComentarioThought = ({ infoComentario }) => {
    console.log(infoComentario)
    console.log("infoComentario")
    return (
        <div className="w-full flex flex-col text-white mb-[30px]">
            <div className="comentario flex flex-row">
                <div className="img w-[10%]">
                    <img className="h-[50px] w-[50px] object-cover object-center rounded-full" src={infoComentario.photo} alt="" />
                </div>
                <div className="texto w-[80%] flex flex-col" >
                    <div className="w-[35%] flex flex-row justify-between">
                        <p className="mb-[10px] font-bold">{infoComentario.name}</p>
                        <p className="font-bold">-</p>
                        <p className="text-gray-400">Hace 15 mn</p>
                    </div>
                    <p className="">{infoComentario.comentario}</p>
                </div>
                <div className="opciones w-[10%] flex flex-col justify-start ">
                    <button className="opciones self-center">
                        <GrMoreVertical />
                    </button>
                </div>
            </div>
            <div className="interacciones w-[60%] flex flex-row justify-around py-[15px]">
                <button className="like buttonInteracciones"><AiFillLike /><p>0</p> </button>
                <button className="dislike buttonInteracciones" ><AiFillDislike /> <p>0</p></button>
                <button className="Responder buttonInteracciones"><FaRegComment /> <p>0</p></button>
            </div>
        </div>
    )
}
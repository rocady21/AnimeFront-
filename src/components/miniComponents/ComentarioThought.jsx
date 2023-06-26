import react from "react"
import { GrMoreVertical } from "react-icons/gr"
// interacciones
import { AiFillLike } from "react-icons/ai"
import { AiFillDislike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { MomentFromNow } from "../../helpers/getMomentFromNow"

export const ComentarioThought = ({ infoComentario }) => {

    const time = MomentFromNow(infoComentario.Fecha)
    return (
        <div className="w-full flex flex-col text-white mb-[30px]">
            <div className="comentario flex flex-row">
                <div className="img w-[10%] self-center">
                    <img className="h-[50px] w-[50px] object-cover object-center rounded-full" src={infoComentario.photo} alt="" />
                </div>
                <div className="texto w-[90%] flex flex-col" >
                    <div className=" flex flex-row">
                        <p className="mb-[10px] font-bold">{infoComentario.name}</p>
                        <p className="font-bold px-[5px]">-</p>
                        <p className="text-gray-400">{time}</p>
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
import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { FcDislike } from "react-icons/fc"
import { IoIosShareAlt } from "react-icons/io"
import { FaRegComment } from "react-icons/fa"
import { GrMoreVertical } from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import SendIcon from '@mui/icons-material/Send';


export const ThoughtCardComplete = ({ postInfo, userInfo }) => {
    const Like = () => {

    }
    const disLike = () => {

    }
    const [stateAddComentario, setstateAddComentario] = useState(false)
    const [comentario, setComentario] = useState("")
    const { Comentarios } = postInfo

    return (
        <div className='w-[60%] px-[25px] flex flex-col justify-around mt-[50px]'>
            <div className='Publicacion w-full h-[200px] bg-black/30 rounded-t-lg flex flex-row hover:bg-black/50'>
                <div className="photo w-[10%] h-full  flex justify-center " >
                    <img src={userInfo.photo} className='rounded-full h-[50px] w-[50px] mt-[20%] object-cover object-center' alt="" />
                </div>
                <div className="info w-[90%] h-full flex flex-col py-[10px] justify-around">
                    <div className="inofPublicacion w-full h-[60%] flex flex-row">
                        <div className=' w-[90%] h-full text-white flex flex-col'>
                            <div className="name flex flex-row w-[30%] justify-around p2|b-[10px] ">
                                <p className="name font-bold ">{userInfo.name} </p>
                                <p className='font-bold'> · </p>
                                <p className='time text-gray-400'>Hace 8h</p>
                            </div>
                            <p className="leading-relaxed">{postInfo.Descripcion}</p>
                        </div>
                        <div className='config w-[10%] h-full flex justify-center '>
                            <button className='text-white text-[20px] self-start '>
                                <GrMoreVertical />
                            </button>
                        </div>


                    </div>
                    <div className="interacciones w-[50%] h-[40%] flex flex-row justify-around text-white">

                        <button className="buttonInteracciones"><AiOutlineHeart /> <p>{postInfo.MeGusta}</p></button>
                        <button className='buttonInteracciones'><FcDislike /> <p>{postInfo.NoMeGusta}</p></button>
                        <button className='buttonInteracciones'><FaRegComment onClick={() => setstateAddComentario(!stateAddComentario)} /> <p>0</p></button>
                        <button className='buttonInteracciones'><IoIosShareAlt /></button>

                    </div>

                </div>

            </div>
            <div className="comentarios w-full rounded-b-lg  bg-black/60 flex flex-col justify-center">
                <div className="ingresarComentario px-[50px]" >
                    {
                        stateAddComentario === true &&
                        <form className="flex flex-row items-center justify-between py-[25px]">
                            <textarea className="bg-black w-full text-white px-[20px] pt-[10px] rounded-[5px] min-h-[50px] max-h-[100px]" value={comentario} onChange={(e) => setComentario(e.target.value)} rows="3" cols="" placeholder="Escriba Su comentario" ></textarea>
                            <button className="w-[50px] p-[10px] m-4 h-[50px] bg-amber-600 rounded-full flex flex-row items-center justify-center" ><SendIcon sx={{ color: "white", fontSize: 25 }} /></button>
                        </form>
                    }
                </div>
                {
                    Comentarios[0] ? <div>Existe</div> : <div className="py-[20px] text-center self-center">No hay Comentarios...</div>
                }
            </div>
        </div>
    )
}
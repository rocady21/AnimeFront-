import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { FcDislike } from "react-icons/fc"
import { IoIosShareAlt } from "react-icons/io"
import { FaRegComment } from "react-icons/fa"
import { GrMoreVertical } from "react-icons/gr"
import { useNavigate } from "react-router-dom"


export const ThoughtCard = ({ postInfo, userInfo }) => {
    const navigate = useNavigate();

    const MostrarThoght = () => {
        navigate(`/post/${postInfo._id}`)
    }

    const Like = () => {

    }
    const disLike = () => {

    }

    return (
        <div className='w-full min-h-[300px] px-[25px] flex flex-col justify-around '>
            <div className='Publicacion w-full h-[200px] bg-black/30 rounded-[10px] flex flex-row hover:bg-black/50'>
                <div className="photo w-[10%] h-full  flex justify-center " >
                    <img src={userInfo.photo} className='rounded-full h-[50px] w-[50px] mt-[20%] object-cover object-center' alt="" />
                </div>
                <div className="info w-[90%] h-full flex flex-col py-[10px] justify-around">
                    <div className="inofPublicacion w-full h-[50%] flex flex-row">
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
                    <div className="interacciones w-[50%] h-[20%] flex flex-row justify-around text-white">

                        <button className="buttonInteracciones"><AiOutlineHeart /> <p>{postInfo.MeGusta.length}</p></button>
                        <button className='buttonInteracciones'><FcDislike /> <p>{postInfo.NoMeGusta.length}</p></button>
                        <button className='buttonInteracciones'><FaRegComment /> <p>0</p></button>
                        <button className='buttonInteracciones'><IoIosShareAlt /></button>

                    </div>
                    <div className="mostrarPubli w-full h-[20%] text-white text-center">
                        <button onClickCapture={MostrarThoght}>Mostrar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
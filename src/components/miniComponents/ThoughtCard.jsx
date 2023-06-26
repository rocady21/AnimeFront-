import React, { useEffect, useState } from "react"
import { IoIosShareAlt } from "react-icons/io"
import { FaRegComment } from "react-icons/fa"
import { GrMoreVertical } from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import { OptionButton } from "./OptionButton"
import {AiFillLike,AiFillDislike} from "react-icons/ai"
import { MomentFromNow } from "../../helpers/getMomentFromNow"
import { useUserSlice } from "../../hooks/useUserSlice"
import { usePosterSlice } from "../../hooks/usePostersSlice"
import { suscribeToStatuDisLike, suscribeToStatusLike } from "../../hooks/pusher"


export const ThoughtCard = ({ postInfo, userInfo,isMe}) => {
    const navigate = useNavigate();
    const [optionButton, setoptionButton] = useState(false)
    const optionsThought = ["Editar", "Borrar", "Ver"]
    const timeFromtoNow = MomentFromNow(postInfo.FechaPublicacion)
    const MostrarThoght = () => {
        navigate(`/post/${postInfo._id}`)
    }
    const [MeGusta, setMeGusta] = useState(postInfo?.MeGusta?.length)
    const [NoMeGusta, setNoMeGusta] = useState(postInfo?.NoMeGusta?.length)
    const { handleInteractions, checkStatusLikeAndDislike } = usePosterSlice()
    const {user} = useUserSlice()


    const statusLikes = (likes) => {
        setMeGusta(likes)
    }

    const statusDisLikes = (dislikes) => {
        setNoMeGusta(dislikes)

    }

    const suscribe = () => {
        const channelLike = "statusLike";
        suscribeToStatusLike(channelLike, statusLikes)
        const channelDisLike = "statusDislike";
        suscribeToStatuDisLike(channelDisLike, statusDisLikes)
    }

    useEffect(() => {
        checkStatusLikeAndDislike({ id_user: user._id, id_post: postInfo._id })
        suscribe()
        // cargar comnetarios

    }, [])


    const AddAndQuitlike = () => {
        const data = { id_post: postInfo._id, id_user: user._id }
        const statusLike = localStorage.getItem("statusLike")
        if (statusLike === "NoLiked") {
            const key = "addLike"
            handleInteractions(data, key)
            localStorage.setItem("statusLike", "Liked")
            return
        } else if (statusLike === "Liked") {
            const key = "quitLike"
            handleInteractions(data, key)
            localStorage.setItem("statusLike", "NoLiked")
        }
    }

    const AddAndQuitDislike = () => {
        const data = { id_post: postInfo._id, id_user: user._id }
        const statusDislike = localStorage.getItem("statusDislike")

        if (statusDislike === "NoDisliked") {
            const key = "addDislike"
            handleInteractions(data, key)
            localStorage.setItem("statusDislike", "Disliked")
            return
        } else if (statusDislike === "Disliked") {
            const key = "quitDislike"
            handleInteractions(data, key)
            localStorage.setItem("statusDislike", "NoDisliked")

        }
        return
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
                            <div className="name flex flex-row p2|b-[10px] ">
                                <p className="name font-bold ">{userInfo.name} </p>
                                <p className='font-bold px-[10px]'> · </p>
                                <p className='time text-gray-400'>{timeFromtoNow}</p>
                            </div>
                            <p className="leading-relaxed">{postInfo.Descripcion}</p>
                        </div>
                        <div className='config w-[10%] h-full flex justify-center '>
                            {
                                isMe === true &&
                            <div className='text-white text-[20px] self-start relative cursor-pointer' onClick={() => setoptionButton(!optionButton)}>
                                <GrMoreVertical />
                                {
                                    optionButton === true && <OptionButton options={optionsThought} idPost={postInfo._id} />
                                }
                            </div>
                            }
                        </div>


                    </div>
                    <div className="interacciones w-[50%] h-[20%] flex flex-row justify-around text-white">

                    <button className="buttonInteracciones" onClick={AddAndQuitlike}><AiFillLike /> <p>{MeGusta}</p></button>
                        <button className='buttonInteracciones' onClick={AddAndQuitDislike}><AiFillDislike /> <p>{NoMeGusta}</p></button>
                        <button className='buttonInteracciones'><FaRegComment /> <p>{postInfo?.Comentarios?.length}</p></button>
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
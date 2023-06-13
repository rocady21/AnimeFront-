import React from "react"
import { IoIosShareAlt } from "react-icons/io"
import { GrMoreVertical } from "react-icons/gr"
import { useState } from "react"
import { usePosterSlice } from "../../hooks/usePostersSlice"
import { useUserSlice } from "../../hooks/useUserSlice"
import { useEffect } from "react"
import { useForm } from "../../hooks/useForm"
import { suscribeToStatusLike, suscribeToStatuDisLike } from "../../hooks/pusher"
import { ComentarioThought } from "./ComentarioThought"
// import interacciones
import { AiFillLike } from "react-icons/ai"
import { AiFillDislike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import SendIcon from '@mui/icons-material/Send';

export const ThoughtCardComplete = ({ postInfo }) => {
    const { Comentarios } = postInfo
    const { handleInteractions, handleAddComentarios, checkStatusLikeAndDislike, handleLoadComentsByPost, resultsComentarios, } = usePosterSlice()
    const { user, peopleInfo: userInfo, loadUserById } = useUserSlice()
    const [stateAddComentario, setstateAddComentario] = useState(false)
    // likes y dislikes 
    const [MeGusta, setMeGusta] = useState(postInfo.MeGusta.length)
    const [NoMeGusta, setNoMeGusta] = useState(postInfo.NoMeGusta.length)
    // form para agregar Comentario
    const { inputValue, comentario: ComentarioInput, setKey, onResetForm } = useForm({
        id_User: user._id,
        photo: user.photo,
        name: user.name,
        comentario: "",
        valoracion: 0,
        Fecha: new Date(),
        MeGusta: 0
    })



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
        handleLoadComentsByPost({ id_post: postInfo._id })
        loadUserById({ id_user: postInfo.Id_user_publicate })

    }, [])


    const AddAndQuitlike = () => {
        const data = { id_post: postInfo._id, id_user: user._id }
        const statusLike = localStorage.getItem("statusLike")
        console.log(statusLike)
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
    const addComentario = (e) => {
        e.preventDefault()
        if (ComentarioInput.length != 0) {
            const data = inputValue
            handleAddComentarios({ data, id_post: postInfo._id, key: "addComent" })
            onResetForm()
        }

    }


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

                        <button className="buttonInteracciones" onClick={AddAndQuitlike}><AiFillLike /> <p>{MeGusta}</p></button>
                        <button className='buttonInteracciones' onClick={AddAndQuitDislike}><AiFillDislike /> <p>{NoMeGusta}</p></button>
                        <button className='buttonInteracciones'><FaRegComment onClick={() => setstateAddComentario(!stateAddComentario)} /> <p>{Comentarios.length}</p></button>
                        <button className='buttonInteracciones'><IoIosShareAlt /></button>

                    </div>

                </div>

            </div>
            <div className=" w-full rounded-b-lg  bg-black/60 flex flex-col ">
                <h1 className="text-center py-[10px] text-[25px]">Comentarios</h1>
                <div className="ingresarComentario px-[50px]" >
                    {
                        stateAddComentario === true &&
                        <form onSubmit={addComentario} className="flex flex-row items-center justify-between py-[25px]">
                            <input type="text" className="bg-black/0 w-full outline-none text-white px-[20px] border-b-[2px] border-amber-500  min-h-[50px] max-h-[100px]" value={ComentarioInput} onChange={(e) => setKey({ key: "comentario", value: e.target.value })} placeholder="Escriba Su comentario" />
                            <button className="w-[50px] p-[10px] m-4 h-[50px] bg-amber-600 rounded-full flex flex-row items-center justify-center" ><SendIcon sx={{ color: "white", fontSize: 25 }} /></button>
                        </form>
                    }
                </div>
                <div className="Comentarios flex flex-col w-full p-[50px] ">
                    {
                        (Array.isArray(resultsComentarios)) ? resultsComentarios.map((comentario) => {
                            return <ComentarioThought infoComentario={comentario} key={comentario._id} />
                        }) : <div className="py-[20px] text-center self-center">{resultsComentarios}</div>
                    }
                </div>
            </div>
        </div>
    )
}
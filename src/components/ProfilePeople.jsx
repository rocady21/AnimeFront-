import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePosterSlice } from '../hooks/usePostersSlice'
import { useUserSlice } from '../hooks/useUserSlice'
import { Publicaciones } from './PerfilComponents/Publicaciones'
import { AnimesFavoritos } from './PerfilComponents/AnimesFav'
import { PostPagePerfil } from './PerfilComponents/PostPagePerfil'
import { FiMoreHorizontal } from "react-icons/fi"
import { useFriendSlice } from '../hooks/useFriendSlice'
import { OptionButton } from './miniComponents/OptionButton'

export const ProfilePeople = () => {

    const { id_people } = useParams()
    const { user,resultsAnimesFav, listAnimeFavorite, loadUserById, peopleInfo, Friends, friends } = useUserSlice()
    const {AddFriend} = useFriendSlice()
    const [stateInfo, setstateInfo] = useState("Publicaciones")
    const { LoadPostersUser, post } = usePosterSlice()

    const [stateOptionsFriends, setstateOptionsFriends] = useState(false);
    const options = ["Enviar Mensaje","Borrar Amigo","Ver Amigos"]
    
    useEffect(() => {
        LoadPostersUser(id_people)
        listAnimeFavorite({ id_User: id_people })
        loadUserById({ id_user: id_people })
        Friends({ id_friend: id_people })
    }, [])


    const enviarMensaje = ()=> {

    }
    
    const AñadirAmigo = () => {
        AddFriend({id_me:user._id,id_friend:id_people})
    }

    return (
        peopleInfo ? <div className='perfil h-full w-full flex flex-row  '>
            <div className="config w-1/5">

            </div>
            <div className="profile info w-3/5 h-full">
                <div className="portada w-full h-[300px] relative">
                    <img src={peopleInfo.portada} className='object-center w-full h-full' alt="" />
                    {
                        friends === "no-friends" ? <button onClick={AñadirAmigo} className='rounded-[20px] text-white px-[25px] py-[10px] bg-amber-600 absolute top-[75%] left-[85%]'>Seguir</button> : friends === "pending" ?
                        <p className='rounded-[20px] text-white px-[25px] py-[10px] bg-amber-600 absolute top-[75%] left-[85%]'>Pendiente</p> : <div className='rounded-[5px] text-white px-[10px] py-[5px] bg-amber-600 absolute top-[75%] left-[85%] flex flex-row'><p className='px-[5px]'>Amigos</p><button className='px-[5px]' onClick={()=> setstateOptionsFriends(!stateOptionsFriends) }> <FiMoreHorizontal />
                            {
                                stateOptionsFriends === true && <OptionButton options={options} id_User={id_people}/>
                            } </button></div>

                    }
                </div>
                <div className="fotoPerfil w-[200px] h-[200px] rounded-full absolute top-[300px] left-[25%] bg-[#0e0e0ee6] p-[2px]">
                    <img src={peopleInfo.photo} className='object-cover object-center h-full rounded-full ' alt="" />
                </div>
                <div className="info border-x-[1px] border-white/20  ">
                    <h1 className='text-white font-bold text-[30px] ml-[25%] mt-[10px]'>{peopleInfo.name}</h1>
                    <div className="info w-full h-[200px] mt-[70px]">
                        <div className="resumen">
                            <p className='text-white px-[100px] py-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi quaerat unde quas iure aliquam, eligendi corrupti voluptatum aliquid ullam temporibus! Nam saepe itaque doloremque. Molestias est aspernatur ipsam pariatur.</p>
                        </div>
                        <div className='followers w-1/2 mt-[20px] font-bold text-amber-500 flex flex-row text-[20px] justify-around'>
                            <p>1299 Seguidores</p>
                            <p>1200 Seguidos</p>
                        </div>
                    </div>

                    <div className="botonesInfo w-full flex flex-row justify-around text-white text-[20px] mb-[20px]">
                        <button className='flex flex-col' onClick={() => setstateInfo("Publicaciones")}>
                            <p>Publicaciones</p>
                            {
                                stateInfo === "Publicaciones" && <div className='mt-[5px] w-[100px] h-[5px] bg-amber-600 self-center'></div>
                            }
                        </button>
                        <button className='flex flex-col' onClick={() => setstateInfo("Post")}>
                            <p>Fotos y Videos</p>
                            {
                                stateInfo === "Post" && <div className='mt-[5px] w-[100px] h-[5px] bg-amber-600 self-center'></div>
                            }
                        </button>
                        <button className='flex flex-col' onClick={() => setstateInfo("AnimesFav")}>
                            <p>Animes Fav</p>
                            {
                                stateInfo === "AnimesFav" && <div className='mt-[5px] w-[100px] h-[5px] bg-amber-600 self-center'></div>
                            }
                        </button>
                    </div>

                    {
                        stateInfo === "Publicaciones" ? <Publicaciones post={post} isMe={false} userInfo = {peopleInfo} /> : stateInfo === "AnimesFav" ? <AnimesFavoritos FavsAnime={resultsAnimesFav} id_people={id_people} /> : <PostPagePerfil />
                    }
                </div>

                <div className="publicaciones"></div>
            </div>

        </div> : <p>Cargando...</p>
    )
}
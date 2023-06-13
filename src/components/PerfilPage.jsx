import React from 'react'
import { useUserSlice } from '../hooks/useUserSlice'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import { useState } from 'react'
import { PostPagePerfil } from './PerfilComponents/PostPagePerfil'
import { Publicaciones } from './PerfilComponents/Publicaciones'
import { usePosterSlice } from '../hooks/usePostersSlice'
import { useEffect } from 'react'
import { AnimesFavoritos } from './PerfilComponents/AnimesFav'
NavLink
export const PerfilPage = () => {

  const { id_people } = useParams()
  const { user, resultsAnimesFav, listAnimeFavorite, loadUserById, peopleInfo } = useUserSlice()
  const [stateInfo, setstateInfo] = useState("Publicaciones")
  const { LoadPostersUser, post } = usePosterSlice()



  console.log(user)

  useEffect(() => {
    LoadPostersUser(user._id)
    listAnimeFavorite({ id_User: user._id })
  }, [])


  return (
    user ? <div className='perfil h-full w-full flex flex-row '>
      <div className="config w-1/5">

      </div>
      <div className="profile info w-3/5 h-full">
        <div className="portada w-full h-[300px]">
          <img src={user.portada} className='object-center w-full h-full' alt="" />
        </div>
        <div className="fotoPerfil w-[200px] h-[200px] rounded-full absolute top-[300px] left-[25%] bg-[#0e0e0ee6] p-[4px]">
          <img src={user.photo} className='object-cover object-center h-full rounded-full ' alt="" />
        </div>
        <div className="info border-x-[1px] border-white/20  ">
          <h1 className='text-white font-bold text-[30px] ml-[300px] mt-[10px]'>{user.name}</h1>
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
            stateInfo === "Publicaciones" ? <Publicaciones post={post} isMe={true} peopleid={id_people} /> : stateInfo === "AnimesFav" ? <AnimesFavoritos FavsAnime={resultsAnimesFav} id_people={id_people} /> : <PostPagePerfil />
          }
        </div>

        <div className="publicaciones"></div>
      </div>

    </div> : <p>Cargando...</p>
  )
}

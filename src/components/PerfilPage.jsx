import React from 'react'
import { useUserSlice } from '../hooks/useUserSlice'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AnimesFav } from './PerfilComponents/AnimesFav'
import { useState } from 'react'
import { PostPagePerfil } from './PerfilComponents/PostPagePerfil'
import { InfoUser } from './PerfilComponents/informacionUser'
import { ModalNewPost } from './Modals/ModalNewPost'
import { Publicaciones } from './PerfilComponents/Publicaciones'
import { usePosterSlice } from '../hooks/usePostersSlice'
import { useEffect } from 'react'

NavLink
export const PerfilPage = ({ children, renderChildren }) => {

  const { user } = useUserSlice()
  const [stateInfo, setstateInfo] = useState("Publicaciones")
  const { LoadPostersUser, post } = usePosterSlice()

  useEffect(() => {
    LoadPostersUser(user._id)
  }, [])

  useEffect(() => {
    console.log(post)
  }, [post])

  const { name, photo, portada, AnimesFav } = user

  return (
    <div className='perfil h-full w-full flex flex-row '>
      <div className="config w-1/5">

      </div>
      <div className="profile info w-3/5 h-full">
        <div className="portada w-full h-[300px]">
          <img src={portada} className='object-center w-full h-full' alt="" />
        </div>
        <div className="fotoPerfil w-[200px] h-[200px] rounded-full absolute top-[300px] left-[25%] bg-[#0e0e0ee6] p-[4px]">
          <img src={photo} className='object-cover object-center h-full rounded-full ' alt="" />
        </div>
        <div className="info border-x-[1px] border-white/20  ">
          <h1 className='text-white font-bold text-[30px] ml-[300px] mt-[10px]'>{name}</h1>
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
            stateInfo === "Publicaciones" ? <Publicaciones post={post} /> : stateInfo === "AnimesFav" ? <AnimesFav /> : <PostPagePerfil />
          }
        </div>

        <div className="publicaciones"></div>
      </div>

    </div>
  )
}

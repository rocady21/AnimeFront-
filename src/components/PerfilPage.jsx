import React from 'react'
import { useUserSlice } from '../hooks/useUserSlice'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AnimesFav } from './PerfilComponents/AnimesFav'
import { useState } from 'react'
import { PostPagePerfil } from './PerfilComponents/PostPagePerfil'
import { InfoUser } from './PerfilComponents/informacionUser'
import { ModalNewPost } from './Modals/ModalNewPost'

NavLink
export const PerfilPage = ({ children, renderChildren }) => {

  const { user } = useUserSlice()
  const [page, setPage] = useState("post")
  return (
    <div className='w-full h-full flex flex-col items-center relative z-1'>
      <div className="foto w-[200px] h-[200px] bg-white/90 rounded-full m-auto mt-[50px] p-1">
        <img className='object-cover object-center w-full h-full rounded-full' src={user.photo} alt="" />
      </div>
      <p className='text-white text-[20px] mt-[5px]'>{user.name}</p>

      <div className='w-[60%]  bg-black/30 mt-[100px] text-white  '>

        <div className="buttonsNavigateProfile m-auto w-[50%] flex justify-around p-[30px]">
          <button onClick={() => setPage("post")}>
            <p>Posts</p>
          </button>
          <button onClick={() => setPage("animesFav")}>
            <p>Animes Favoritos</p>
          </button>
          <button onClick={() => setPage("info")}>
            <p>Informacion</p>
          </button>
          <button onClick={() => setPage("post")}>
            <p>Publicacion</p>
          </button>
        </div>

        <div className="info  bg-black py-[50px] px-[60px]">
          {
            (page === "post") ? <PostPagePerfil /> : (page === "animesFav") ? <AnimesFav /> : <InfoUser />
          }
        </div>
      </div>

    </div >
  )
}

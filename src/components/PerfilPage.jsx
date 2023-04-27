import React from 'react'
import { useUserSlice } from '../hooks/useUserSlice'
import { PostPage } from './PerfilComponents/PostPage'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AnimesFav } from './PerfilComponents/AnimesFav'
NavLink
export const PerfilPage = ({children,renderChildren}) => {

  const { user } = useUserSlice()

  return (
    renderChildren?
    <div className='w-full h-full flex flex-col items-center'>
      <div className="foto w-[200px] h-[200px] bg-white/90 rounded-full m-auto mt-[100px] p-1">
        <img className='object-cover object-center w-full h-full rounded-full' src={user.photo} alt="" />
      </div>
      <p className='text-white text-[20px] mt-[5px]'>{user.name}</p>

      <div className='w-[60%]  bg-black/30 mt-[100px] text-white  '>

        <div className="buttonsNavigateProfile m-auto w-[50%] flex justify-around p-[30px]">
          <NavLink to={"/perfil/post"}>
            <p>Posts</p>
          </NavLink>
          <NavLink to={"/perfil/informacion"}>
            <p>Animes Favoritos</p>
          </NavLink>
          <NavLink to={"/perfil/AnimesFav"}>
            <p>Informacion</p>
          </NavLink>
        </div>

        <div className="info  bg-black py-[50px] px-[100px]">
            {children}
        </div>
    </div>

    </div > : children
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserSlice } from '../../hooks/useUserSlice'


export const NavBarAdmin = () => {

  const {startLogout} = useUserSlice()
  return (
    <div className='w-full h-[80px] bg-black flex items-center justify-between text-white box-border'>
        <div className='flex flex-row w-[50%] justify-around text-[20px]'>
            <h1 className='text-[25px]'>AnimeCOU</h1>
            <NavLink to={"/crearAnime"}><p>Crear Anime</p></NavLink>
            <NavLink to={"/animes"}>Animes</NavLink>

        </div>         
        
        <div className='flex flex-row'>
            <NavLink to={"/perfil"}><p>Perfil</p></NavLink>
            <button onClick={startLogout}>Logout</button>
            
        </div>
    </div>
  )
}
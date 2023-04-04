import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserSlice } from '../../hooks/useUserSlice'


export const NavBar = () => {

  const {startLogout} = useUserSlice()
  return (
    <div className='w-full h-[80px] bg-black flex items-center justify-between text-white'>
        <div className='flex flex-row w-[50%] justify-around text-[20px]'>
            <h1 className='text-[25px]'>AnimeCOU</h1>
            <NavLink to={"/inicio"}><p>Inicio</p></NavLink>
            <NavLink to={"/anime"}>Animes</NavLink>
            <NavLink to={"/mangas"}><p>Mangas</p></NavLink>
            <NavLink to={"/post"}><p>Post</p></NavLink>
        </div>         
        
        <div className='flex flex-row'>
            <NavLink to={"/perfil"}><p>Perfil</p></NavLink>
            <button onClick={startLogout}>Logout</button>
            
        </div>
    </div>
  )
}

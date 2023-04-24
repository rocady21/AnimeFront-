import React, { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import { useUserSlice } from '../../hooks/useUserSlice'
import { useAnimeSlice } from '../../hooks/useAnimeSlice'
import { SearchPage } from '../SearchPage'

export const NavBar = () => {

  const { startLogout } = useUserSlice()
  const [valueSearch, setvalueSearch] = useState("");
  const navigate = useNavigate()
  const {searchAnime} = useAnimeSlice()
  const onChangeValueSearch = (e)=> {
    setvalueSearch(e.target.value)
  }
  const { user } = useUserSlice();
  const { photo } = user

  const buscarAnime = (e) => {
    e.preventDefault()
    navigate("/searchPage")
    searchAnime(valueSearch)
    setvalueSearch("")
  }
  console.log("coso")

  return (
    <div className='w-full h-[80px] bg-black flex items-center justify-between text-white'>
      <div className='flex flex-row w-[50%] justify-around text-[20px]'>
        <h1 className='text-[25px]'>AnimeCOU</h1>
        <NavLink to={"/inicio"}><p>Inicio</p></NavLink>
        <NavLink to={"/anime"}>Animes</NavLink>
        <NavLink to={"/mangas"}><p>Mangas</p></NavLink>
        <NavLink to={"/post"}><p>Post</p></NavLink>
      </div>
      <div className="buscar">
        <form className="" onSubmit={buscarAnime}>
          <input
            type="search"
            className=" w-[250px] pl-[30px] py-[10px] rounded-full bg-[#000000]/40 focus:bg-[#000000]/80 focus:outline-none  border border-[1px] border-none"
            placeholder="Buscar Anime... "
            name=""
            id=""
            value={valueSearch}
            onChange={onChangeValueSearch}
          />
        </form>
      </div>

      <div className="flex flex-row items-center px-[50px] ">
        <NavLink className={"flex flex-row items-center"} to={"/perfil"}>
          <img className="w-[50px] h-[50px] bg-white mr-[15px] object-cover object-center rounded-full" src={photo || undefined} alt="" />
          <p onClick={console.log(user)} className="mr-[30px]">Perfil</p>
        </NavLink>
        <button onClick={startLogout}>Logout</button>
      </div>
    </div>
  )
}

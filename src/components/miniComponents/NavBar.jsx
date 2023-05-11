import React, { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import { useUserSlice } from '../../hooks/useUserSlice'
import { useAnimeSlice } from '../../hooks/useAnimeSlice'
import { ModalFriendRequest } from '../Modals/ModalFriendRequest'
import { useEffect } from 'react'
import { useFriendRequest } from '../../hooks/useFriendRequest'

export const NavBar = () => {

  const { startLogout } = useUserSlice()
  const [valueSearch, setvalueSearch] = useState("");
  const navigate = useNavigate()
  const { searchAnime } = useAnimeSlice()
  const onChangeValueSearch = (e) => {
    setvalueSearch(e.target.value)
  }
  const { user } = useUserSlice();
  const { photo } = user
  const [notification, setnotification] = useState(true);
  const [stateModal, setstateModal] = useState(false)
  const { LoadFriendsRequest, friendRequest,SearchPeople } = useFriendRequest()




  const buscarAnime = (e) => {
    e.preventDefault()
    navigate("/searchPage")
    searchAnime(valueSearch)
    SearchPeople(valueSearch)
    setvalueSearch("")
  }
  const closeModal = (value) => {
    setstateModal(value)
  }
  const OpenModal = () => {
    setstateModal(true)
  }

  return (
    <div className='w-full h-[80px] bg-black flex items-center justify-between text-white relative'>
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
            className=" w-[250px]  px-[30px] py-[10px] rounded-full bg-slate-800/50 focus:bg-slate-800 focus:outline-none  border border-[1px] border-none"
            placeholder="Buscar Anime... "
            name=""
            id=""
            value={valueSearch}
            onChange={onChangeValueSearch}
          />
        </form>
      </div>

      <div className="flex flex-row items-center px-[50px] ">
        <button className='w-[50px] h-[50px] relative ' onClick={OpenModal}>
          <img className='object-cover object-center' src="../icons/friendRequest.png" alt="" />
          {
            friendRequest[0] && <div className='w-[10px] h-[10px] bg-red-700	bottom-0 translate-x-[-10px] translate-y-[-10px] right-0 rounded-full absolute'></div>

          }
        </button>
        <NavLink className={"flex flex-row items-center"} to={"/perfil"}>
          <img className="w-[50px] h-[50px] bg-white mr-[15px] object-cover object-center rounded-full" src={photo || undefined} alt="" />
          <p className="mr-[30px]">Perfil</p>
        </NavLink>
        <button onClick={startLogout}>Logout</button>
      </div>
      {
        stateModal === true && <ModalFriendRequest closeModal={(value) => closeModal(value)} friendRequest={friendRequest} />
      }
    </div>
  )
}

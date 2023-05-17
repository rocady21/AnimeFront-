import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserSlice } from '../../hooks/useUserSlice'
import { useAnimeSlice } from '../../hooks/useAnimeSlice'
import { ModalFriendRequest } from '../Modals/ModalFriendRequest'
import { useEffect } from 'react'
import { useFriendRequest } from '../../hooks/useFriendRequest'
import { formatChannelNotification, subscribe } from '../../hooks/pusher'
import {AiFillCaretDown} from "react-icons/ai";
import {AiFillCaretUp} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import { FriendStatus } from './friendStatus'
import 'animate.css'



let isSuscribe = false
export const NavBar = () => {

  const [friensdOnline, setfriensdOnline] = useState(false);
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
  const { LoadFriendsRequest, friendRequest, SearchPeople,LoadFriendRequestRealTime,LoadFriends,friends } = useFriendRequest()

  


  const handleAddNotification = (id_user)=> {
    LoadFriendRequestRealTime(id_user)
  }
  const Suscribe = () => {
    const channel = formatChannelNotification({ user_id: user._id })
    subscribe(channel,handleAddNotification);
  }

  useEffect(() => {
    if(isSuscribe === false) {
      Suscribe();
      isSuscribe = true;
    }
    LoadFriends({id_user:user._id})
  }, []);

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

  const openCloseFriensOnline = ()=> {
    setfriensdOnline(!friensdOnline)
  }
  

  return (
    <div className='flex h-full flex-col relative'>
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
      <button className='w-[40px] h-[40px] bg-black absolute  top-[80px] flex flex-col justify-center text-white ' onClick={openCloseFriensOnline}>
        
        <div className='text-[25px] self-center'> <FaUserFriends/> </div>
        
        {
          friensdOnline === false? <div className='text-[15px] self-center'> <AiFillCaretDown/> </div> : 
          <div className='text-[15px] self-center'> <AiFillCaretUp/> </div>

        }

      </button>

      {
        friensdOnline === true && <div className='w-[40px] h-full bg-slate-600 absolute top-[120px] flex flex-col justify-cener py-[10px] animate__animated animate__backInDown +'>
          {
            friends[0]?
            friends.map((friend)=> {
                return <FriendStatus infoFriend = {friend} key={friend._id} />
            }) : 
            <p>...</p>
          }
        </div>
      }
    </div>
  )
}

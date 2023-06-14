import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserSlice } from '../../hooks/useUserSlice'
import { useAnimeSlice } from '../../hooks/useAnimeSlice'
import { ModalFriendRequest } from '../Modals/ModalFriendRequest'
import { useEffect } from 'react'
import { useFriendSlice } from '../../hooks/useFriendSlice'
import { formatChannelNotification, subscribe, subscribeToFriendsOnline, suscribeToDisconnect } from '../../hooks/pusher'
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FriendStatus } from './friendStatus'
import {BsChatRightText} from "react-icons/bs"
import 'animate.css'



let isSuscribe = false
export const NavBar = () => {

  const [friendsOnlineList, setfriendsOnlineList] = useState(false);
  const { startLogout } = useUserSlice()
  const [valueSearch, setvalueSearch] = useState("");
  const navigate = useNavigate()
  const { searchAnime } = useAnimeSlice()
  const onChangeValueSearch = (e) => {
    setvalueSearch(e.target.value)
  }
  const { user } = useUserSlice();
  const { photo } = user
  const [stateModal, setstateModal] = useState(false)
  const { LoadFriendsRequest, friendRequest, SearchPeople, LoadFriendRequestRealTime, loadFriendsOnline, loadFriendsOffline, friends, FriendsOnlineAndOffline, setFriendsOnline, removeFriendOnline } = useFriendSlice()


  const logoutSession = () => {
    startLogout(user._id)
  }


  const handleAddNotification = (id_user) => {
    LoadFriendRequestRealTime(id_user)
  }
  const addFriendOnline = (userID) => {
    setFriendsOnline(userID)
  }
  const removeOnline = (userID) => {

    removeFriendOnline(userID)
  }
  const Suscribe = () => {
    const channel = formatChannelNotification({ user_id: user._id })
    const chnanelFriendsOnline = 'friendsOnline'
    const channelUserDissconect = 'userDissconect'
    subscribe(channel, handleAddNotification);
    subscribeToFriendsOnline(chnanelFriendsOnline, addFriendOnline)
    suscribeToDisconnect(channelUserDissconect, removeOnline)
  }

  useEffect(() => {
    if (isSuscribe === false) {
      Suscribe();
      isSuscribe = true;
    }
  }, []);

  useEffect(() => {
    loadFriendsOnline(user._id);
    loadFriendsOffline({ id_user: user._id })
    LoadFriendsRequest({id_user:user._id})
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

  const openCloseFriensOnline = () => {
    setfriendsOnlineList(!friendsOnlineList)
  } 
  const navigateChatPage = () => {
    navigate("/chat")
  }


  return (
    <div className='flex h-full flex-col '>
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

        <div className="flex flex-row items-center   w-[20%] flex flex-row justify-around ">
          <a className='' onClick={navigateChatPage}><BsChatRightText className='text-[20px] text-amber-500'/></a>
          <button className=' relative ' onClick={OpenModal}>
            <img className='object-cover object-center' src="../icons/friendRequest.png" alt="" />
            {
              friendRequest[0] && <div className='w-[10px] h-[10px] bg-red-700	bottom-0 translate-x-[-10px] translate-y-[-10px] right-0 rounded-full absolute'></div>

            }
          </button>
          <a className={"flex flex-row items-center"} href={"/perfil"}>
            <img className="w-[50px] h-[50px] bg-white mr-[15px] object-cover object-center rounded-full" src={photo || undefined} alt="" />
            <p className="mr-[30px]">Perfil</p>
          </a>
          <button onClick={logoutSession}>Logout</button>
        </div>
        {
          stateModal === true && <ModalFriendRequest closeModal={(value) => closeModal(value)} friendRequest={friendRequest} />
        }
      </div>
      <button className='w-[50px] h-[50px] bg-black absolute  top-[80px] flex flex-col justify-center text-white ' onClick={openCloseFriensOnline}>

        <div className='text-[25px] self-center'> <FaUserFriends /> </div>

        {
          friendsOnlineList === false ? <div className='text-[15px] self-center'> <AiFillCaretDown /> </div> :
            <div className='text-[15px] self-center'> <AiFillCaretUp /> </div>

        }

      </button>

      {
        friendsOnlineList === true && <div className='w-[50px] friendsOnline bg-black/30 absolute top-[130px] flex flex-col justify-cener py-[10px] z-20 '>
          {
            FriendsOnlineAndOffline[0] &&
            FriendsOnlineAndOffline.map((friend) => {
              return <FriendStatus infoFriend={friend} key={friend._id} />
            })
          }

        </div>
      }
    </div>
  )
}

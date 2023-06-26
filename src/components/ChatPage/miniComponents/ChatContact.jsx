import clsx from 'clsx'
import React, { useEffect } from 'react'
import { BsGear } from 'react-icons/bs'
import { Chat } from '../components/Chat'
import { useChatSlice } from '../../../hooks/useChatSlice'
import { useUserSlice } from '../../../hooks/useUserSlice'
import { MomentFromNow } from '../../../helpers/getMomentFromNow'


export const ChatContact = ({infoContact,lastMessage}) => {
    const {user} = useUserSlice()
    const {loadChatFromUser} = useChatSlice()

    const fecha = MomentFromNow(lastMessage.time)

    const mostrarChat = () => {
        loadChatFromUser({id_me:user._id, id_user:infoContact.id,infoUser:infoContact})
    }
    
    
  return (
    <div className='w-full h-[100px] bg-black/50 rounded-[10px] flex flex-row text-white px-[10px] relative my-[10px]'>
        <div className="photo w-[25%] flex flex-row justify-center">
            <img className='self-center h-[65px] w-[65px] rounded-full' src={infoContact.photo} alt="" />
        </div>
        <div className="MessageRecient w-[60%] py-[10px] flex flex-col justify-start">
            <div className="infoMessage flex flex-row  ml-[5px]">
                <a href={`/perfil/${infoContact.id}`} className="self-center nombre font-bold text-[18px]">{infoContact.name}</a> 
                <p className='px-[3px]'>-</p>
                <div className={clsx('w-[10px] h-[10px] rounded-full self-center', infoContact.status === "Offline" ? "bg-red-500" : "bg-lime-500" )}></div>
            </div>
            <button className="message ml-[10px] h-[40px] w-[80%] flex flex-row justify-start" onClick={mostrarChat}>
                {
                    (user._id === lastMessage.id_user ) ? <p className='text-[16px] truncate'>Yo:{lastMessage.message}</p> : <p className='text-[16px] truncate'>{lastMessage.message}</p>

                }
            </button>
        </div>
        <p className='w-[20%] text-white/50 self-center' >{fecha}</p>
    </div>
  )
}

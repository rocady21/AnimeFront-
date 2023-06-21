import clsx from 'clsx'
import React, { useEffect } from 'react'
import { BsGear } from 'react-icons/bs'
import { Chat } from '../components/Chat'
import { useChatSlice } from '../../../hooks/useChatSlice'
import { useUserSlice } from '../../../hooks/useUserSlice'


export const ChatContact = ({infoContact,lastMessage}) => {
    const {user} = useUserSlice()
    const {loadChatFromUser} = useChatSlice()
    const mostrarChat = () => {
        loadChatFromUser({id_me:user._id, id_user:infoContact.id})
    }
    
  return (
    <div className='w-full h-[100px] bg-black/50 rounded-[10px] flex flex-row text-white px-[10px] relative my-[10px]'>
        <div className="photo w-[25%] flex flex-row justify-center">
            <img className='self-center h-[65px] w-[65px] rounded-full' src={infoContact.photo} alt="" />
        </div>
        <div className="MessageRecient w-[70%] py-[10px]">
            <div className="infoMessage flex flex-row  ml-[5px]">
                <a href={`/perfil/${infoContact.id}`} className="self-center nombre font-bold text-[18px]">{infoContact.name}</a> 
                <p className='px-[3px]'>-</p>
                <div className={clsx('w-[10px] h-[10px] rounded-full self-center', infoContact.status === "Offline" ? "bg-red-500" : "bg-lime-500" )}></div>
            </div>
            <button className="message ml-[10px] h-[40px] w-[80%]" onClick={mostrarChat}>
                <p className='text-[16px] truncate'>Hola buenos Dias Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit cumque quas, quasi quidem non laboriosam voluptate autem ut placeat incidunt. Molestias doloribus fuga autem nesciunt alias nihil similique suscipit?</p>
            </button>
        </div>
        <p className='w-[10%] text-white/50 self-center' >15mn</p>
    </div>
  )
}

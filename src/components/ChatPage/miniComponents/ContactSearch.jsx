import React from 'react'
import {BsFillChatDotsFill} from "react-icons/bs"
import {RiContactsFill} from "react-icons/ri"
import { useNavigate } from 'react-router-dom'

export const ContactSearch = ({infoContact}) => {
    const navigate = useNavigate()

    const verPerfil = ()=> {
        navigate(`/perfil/${infoContact.id}`)
    }
    const enviarMensaje = ()=> {
        
    }
    return (
    <div className='flex flex-row w-full h-[60px] justify-between '>
        <div className="photo w-[50px] h-[50px] rounded-full">
            <img className='object-cover object-center rounded-full' src={infoContact.photo} alt="" />
        </div>
        <div className='contact h-[50px] w-[100px] flex flex-row justify-around'>
            <button onClick={enviarMensaje} ><BsFillChatDotsFill className='text-amber-500 text-[25px]'/></button>
            <button onClick={verPerfil}><RiContactsFill className='text-amber-500 text-[25px]'/></button>

        </div>
    </div>
  )
}

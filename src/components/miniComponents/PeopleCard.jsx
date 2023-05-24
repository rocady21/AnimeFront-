import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import GroupIcon from '@mui/icons-material/Group';
import { useFriendSlice } from '../../hooks/useFriendSlice';
import { useUserSlice } from '../../hooks/useUserSlice';
import { useNavigate } from 'react-router-dom';
export const PeopleCard = ({ infoPeople }) => {
    const navigate = useNavigate()

    const { AddFriend, solicitudState } = useFriendSlice()
    const { user } = useUserSlice()

    const addFriend = () => {
        AddFriend({ id_me: user._id, id_friend: infoPeople._id })
    }

    const viewProfile = () => {
        navigate(`/perfil/${infoPeople._id}`)
    }

    return (
        <div className='w-[250px] bg-black/60 h-[360px] flex flex-col overflow-hidden mx-[50px]'>
            <div className="Portada w-full h-1/3 bg-slate-500 relative">
                <img src="../../icons/fondo.jpg" className='w-full h-full z-1 object-cover object-center' alt="" />
                <div className="perfil h-[75px] w-[75px] top-[60%] left-[10%]  rounded-full absolute z-10">
                    <img className='w-full h-full object-cover object-center rounded-full' src={infoPeople.photo} alt="" />
                </div>
            </div>
            <div className='content h-2/3 flex flex-col '>
                <div className="info mt-[20px] w-full p-3 h-1/2  overflow-hidden text-white">
                    <p className='text-white ml-[10px] mb-[10px] font-bold '>{infoPeople.name}</p>
                    <p className='text-[12px] leading-relaxed '> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ullam soluta eius alias voluptatum, nesciunt voluptate odio aperiam iure excepturi, praesentium doloremque dolorem dolore fugit nam vitae! Sint, dolores cum.</p>
                </div>
                <div className="buttons flex flex-row  justify-between mt-[15%] px-[15px]">
                    <button onClick={addFriend} className='border border-[1px] border-amber-600 text-amber-600 py-[5px] px-[30px]'>Añadir</button>
                    <button onClick={viewProfile} className='border border-[1px] border-white text-white py-[5px] px-[30px]'>Perfil</button>

                </div>
            </div>

        </div>
    )
}

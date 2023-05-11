import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import GroupIcon from '@mui/icons-material/Group';
import { useFriendRequest } from '../../hooks/useFriendRequest';
import { useUserSlice } from '../../hooks/useUserSlice';
import { useNavigate } from 'react-router-dom';
export const PeopleCard = ({infoPeople}) => {
    const navigate = useNavigate()

    const {AddFriend,solicitudState} = useFriendRequest()
    const {user} = useUserSlice()
    
    const addFriend = ()=> {
        AddFriend({id_me:user._id,id_friend:infoPeople._id})
    }

    const viewProfile = ()=> {  
        navigate(`/perfil/${infoPeople._id}`)
    }
    
  return (
    <div className='w-[120px] h-[200px]  flex flex-col  mx-[50px] my-[20px] rounded-[10px] p-[2px] '>
        <div className="foto h-4/5 w-full">
            <img className=' h-full object-cover object-center rounded-[10px]' src={infoPeople.photo} alt="" />
        </div>
        <p className='text-center text-amber-500'>{infoPeople.name}</p>
        <div className="add h-1/5 w-full flex flex-row justify-between ">
            <button className='w-[50px] h-[40px] mt-[11px] border-[2px] border-lime-600	 rounded-[5px] flex flex-row justify-center ' onClick={addFriend}>
                {
                    solicitudState === "no-send"?<PersonAddIcon className='text-lime-600 self-center' sx={{fontSize:15 }}/> : solicitudState === "send"? <HourglassEmptyIcon className='text-lime-600 self-center' sx={{fontSize:15 }}/> : 
                    <GroupIcon className='text-lime-600 self-center' sx={{fontSize:15 }}/>

                }
            
            </button>
            <button className='w-[50px] h-[40px] mt-[11px] border-[2px] border-amber-500 text-amber-500 rounded-[5px]' onClick={viewProfile}>Perfil</button>

        </div>
    </div>
  )
}

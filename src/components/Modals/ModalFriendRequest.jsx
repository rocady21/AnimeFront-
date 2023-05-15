import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { FriendRequestCard } from '../miniComponents/FriendRequestCard';
import { useFriendRequest } from '../../hooks/useFriendRequest';
import { useUserSlice } from '../../hooks/useUserSlice';
import { useEffect } from 'react';


export const ModalFriendRequest = ({ closeModal, friendRequest }) => {

    const close = ()=> {
        closeModal(false)
    }
    
    const {user} = useUserSlice()
    const {LoadFriendsRequest} = useFriendRequest()
    useEffect(() => {
        LoadFriendsRequest({id_user:user._id})
    }, []);





    return (
        <div className='w-[500px] h-[500px] bg-black absolute top-[120%] left-[50%] translate-x-[-250px] z-20 '>
            <div className='header flex flex-row justify-between'>
                <CloseIcon onClick={close} sx={{ fontSize: 30 }} className='cursor-pointer m-[10px]' />
                <button className='text-[20px] text-amber-500 m-[10px]'>Siguiente</button>
            </div>
            {
                (!friendRequest[0]) ? <p className='text-center self-center mt-[150px]'>No hay Solicitudes de Amistad Recientes</p> :
                    <div className=' w-full h-full  px-[20px] py-[10px] flex flex-col'>
                        <p className='text-center text-white'>Solicitudes de Amistad</p>
                        {
                            friendRequest.map((request) => {
                                return <FriendRequestCard requestInfo={request} key={request._id} />
                            })
                        }
                    </div>
            }
        </div>
    )
}

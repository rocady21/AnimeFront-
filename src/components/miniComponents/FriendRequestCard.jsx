import React from 'react'
import { useFriendRequest } from '../../hooks/useFriendRequest'
import { useUserSlice } from '../../hooks/useUserSlice'


export const FriendRequestCard = ({ requestInfo }) => {

    const { user } = useUserSlice()
    const { AcceptFriendRequest, DeclineFriendRequest } = useFriendRequest()

    const AceptarSolicitud = () => {
        AcceptFriendRequest({ id_me: user._id, id_friend: requestInfo._id })
    }

    const RechazarSolicitud = () => {
        DeclineFriendRequest({ id_me: user._id, id_friend: requestInfo._id })
    }

    return (
        <div className='w-full  flex flex-row justify-between p-3 bg-black-100 my-[10px] bg-slate-800 rounded-[20px]'>
            <div className="info w-2/6 flex flex-row self-center">
                <img src={requestInfo.photo} className='w-[60px] h-[60px] rounded-full' alt="" />
                <p className='self-center ml-[20px]'>{requestInfo.name}</p>
            </div>
            <div className="buttons w-2/6 flex flex-row justify-between self-center">
                <button onClick={AceptarSolicitud} className='w-[60px] h-[40px]   flex justify-center'>
                    <img className='w-[30px] h-[30px] self-center ' src="../icons/cancelar.png" alt="" />
                </button>
                <button onClick={RechazarSolicitud} className='w-[60px] h-[40px]  flex justify-center '>
                    <img className='w-[30px] h-[30px] self-center' src="../icons/accept.png" alt="" />
                </button>
            </div>
        </div>
    )
}

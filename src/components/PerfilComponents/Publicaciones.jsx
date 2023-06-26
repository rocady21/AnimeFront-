import React, { useEffect, useState } from 'react'
import { useUserSlice } from '../../hooks/useUserSlice'
import { BsSend } from "react-icons/bs"
import { usePosterSlice } from '../../hooks/usePostersSlice'
import { ThoughtCard } from '../miniComponents/ThoughtCard'
import { BorrarPostNotification } from '../miniComponents/ComponentsToastify/BorrarPostNotification'



export const Publicaciones = ({ post, isMe,userInfo }) => {
    const { user, loadUserById, peopleInfo } = useUserSlice()
    const [thought, setthought] = useState("")
    const { CreateNewPoster, MesaggeStatus } = usePosterSlice()
    const [statusToastify, setstatusToastify] = useState(false)

    useEffect(() => {
        setstatusToastify(true)
    }, [MesaggeStatus])


    const PublicrPensamiento = () => {
        if (thought.length > 0) {
            CreateNewPoster({ descripcion: thought, id_user: user._id, Tipo: "Thought" })
            setthought("")
        }
    }

    return (
        <div className='flex flex-col items-center bg-black/30 py-[50px]'>

            {
                isMe === true && <div className='w-[90%] flex flex-row items-center'>
                    <textarea className='w-[90%] h-[100px]  max-h-[150px] text-white min-h-[100px] bg-black/40 px-[20px] py-[10px] rounded-[10px]' value={thought} placeholder='En que piensas...?' name="thought" id="" cols="20" rows="3" onChange={(e) => setthought(e.target.value)}></textarea>
                    <button onClick={PublicrPensamiento} className='w-[50px] h-[50px] flex flex-col justify-center  rounded-full bg-amber-600 ml-[10px] '>
                        <BsSend className='w-[25px] h-[25px] text-white ml-[12px]' />
                    </button>
                </div>
            }

            <div className='h-[1px] mt-[50px] w-full bg-white/10'></div>
            {
                post ?
                    post.map((post) => {
                        return <ThoughtCard postInfo={post} userInfo={userInfo} key={post._id} isMe = {isMe} />
                    }) :
                    <p className='text-white text-center py-[50px]'>No hay Thought...</p>
            }
            {
                statusToastify === true && <BorrarPostNotification msg={MesaggeStatus} />
            }

        </div >
    )
}

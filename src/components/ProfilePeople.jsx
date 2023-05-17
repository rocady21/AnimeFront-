import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFriendRequest } from '../hooks/useFriendRequest'

export const ProfilePeople = () => {

    const { loadInfoUser, resultsPeople } = useFriendRequest()
    const { id_people } = useParams()

    useEffect(() => {
        loadInfoUser({ id_user: id_people })
    }, []);


    return (
        <div className='w-full h-full relative flex flex-col justify-center'>
            <div className="Portada w-full h-[450px] overflow-hidden relative ">
                <img src="../../icons/Kokushibo_anime.webp" className='w-full h-full object-cover object-center ' alt="" />
            </div>
            <div className=" w-[250px] h-[250px] bg-white rounded-full absolute top-[325px] left-[50px] bg-white z-10 border border-[5px] border-[#0e0e0ef1] ">
                <img src={resultsPeople.photo} className='w-full h-full object-cover object-center rounded-full ' alt="" />
            </div>
            <div className='w-full h-[250px] bg-[#141414] rounded-b-[50px] '>
                <p className='text-white font-bold text-[30px] font-bold ml-[320px] mt-[10px]'>{resultsPeople.name}</p>
            </div>
            <div className='self-center flex flex-row '>
                <div className="info w-[1000px]   h-[900px] bg-[#141414] ">

                </div>


            </div>



        </div>
    )
}
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

    console.log(resultsPeople)

    return (
        <div className='w-full h-full relative flex flex-col justify-center'>
            <div className="Portada w-full h-[450px] overflow-hidden relative ">
                <img src="../../icons/Kokushibo_anime.webp" className='w-full h-full object-cover object-center' alt="" />
            </div>
            <div className=" w-[250px] h-[250px] bg-white rounded-full absolute top-[325px] left-[50px] z-10 ">
                <img src={resultsPeople.photo} className='w-full h-full object-cover object-center rounded-full ' alt="" />
            </div>
            <p className='text-white ml-[325px] mt-[25px] text-[40px]'>{resultsPeople.name}</p>

            <div className='self-center flex flex-row mt-[125px]'>
                <div className="info w-[800px]   h-[900px] bg-[#141414]">

                </div>
                <div className='w-[50px] h-[50px] bg-white'>

                </div>

            </div>



        </div>
    )
}
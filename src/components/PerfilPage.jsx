import React from 'react'
import { useUserSlice } from '../hooks/useUserSlice'

export const PerfilPage = () => {

  const {user} = useUserSlice()

  return (
    <div className='w-full h-full'>
      <div className="foto w-[200px] h-[200px] bg-white/90 rounded-full m-auto mt-[100px] p-1">
        <img className='object-cover object-center w-full h-full rounded-full' src={user.photo} alt="" />
      </div>
    </div>
  )
}

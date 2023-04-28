import React from 'react'
import { useUserSlice } from '../../hooks/useUserSlice'

export const InfoUser = () => {
  const {user} = useUserSlice()
  return (
    <div className='w-[100px] h-[100px]'>
      <h1>Nombre:</h1> <p>{user.name}</p>
    </div>
  )
}

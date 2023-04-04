import React from 'react'
import { useSelector } from 'react-redux'
import { AdminRouter } from '../AppRoutes/AdminRouter'
import { AppRouter } from '../AppRoutes/AppRouter'
import { useUserSlice } from '../hooks/useUserSlice'


export const Mainpage = () => {

  const {user} = useUserSlice()

  const {rol} = user
  console.log(user)
  
  return (
    <div className='w-full h-full'>
      {
        (rol === "user")?
        (
        <AppRouter/>
        ): 
        (
        <AdminRouter/>
        )
      }
      
    </div>

    )
}

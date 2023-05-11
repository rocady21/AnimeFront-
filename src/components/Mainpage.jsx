import React from 'react'
import { useSelector } from 'react-redux'
import { AdminRouter } from '../AppRoutes/AdminRouter'
import { AppRouter } from '../AppRoutes/AppRouter'
import { useUserSlice } from '../hooks/useUserSlice'
import { useFriendRequest } from '../hooks/useFriendRequest'
import { useEffect } from 'react'


export const Mainpage = () => {
  const {user} = useUserSlice()

  const {LoadFriendsRequest} = useFriendRequest()
  useEffect(() => {
      LoadFriendsRequest({id_user:user._id})
  }, []);



  const {rol} = user
  
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

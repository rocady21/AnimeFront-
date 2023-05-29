import React from 'react'
import { useSelector } from 'react-redux'
import { AdminRouter } from '../AppRoutes/AdminRouter'
import { AppRouter } from '../AppRoutes/AppRouter'
import { useUserSlice } from '../hooks/useUserSlice'
import { useFriendSlice } from '../hooks/useFriendSlice'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export const Mainpage = () => {
  const { user } = useUserSlice()

  const { pathname } = useLocation()

  const { LoadFriendsRequest } = useFriendSlice()


  useEffect(() => {
    LoadFriendsRequest({ id_user: user._id })
  }, [pathname])



  const { rol } = user

  return (
    <div className='w-full h-full'>
      {
        (rol === "user") ?
          (
            <AppRouter />
          ) :
          (
            <AdminRouter />
          )
      }

    </div>

  )
}

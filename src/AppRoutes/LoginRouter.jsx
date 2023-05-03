import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/LoginPage'
import { Mainpage } from '../components/Mainpage'
import { Registerpage } from '../components/Registerpage'
import { useUserSlice } from '../hooks/useUserSlice'
import { AppRouter } from './AppRouter'


export const LoginRouter = () => {

  const {status} = useSelector((state) => state.user)
  const {CheckAuthToken} = useUserSlice()
 

  
  useEffect(() => {
    CheckAuthToken()
  }, []);
  

  return (
      <div className='h-full w-full '>
    <Routes>
      {
        (status === "not-authenticated")?
        (
          <>
          <Route path='/login' element={ <LoginPage/> } />
          <Route path='/*' element={ <LoginPage/> } />
          <Route path='/register' element={ <Registerpage/> } />
          </>

        ): 
        (
          <>
          <Route path='/*' element={ <Mainpage/> } />
          </>
        )
      }


    </Routes>
    </div>
  )
}

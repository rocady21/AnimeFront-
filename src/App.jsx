import React from 'react'
import { LoginRouter } from './AppRoutes/LoginRouter'
import { NavBar } from './components/miniComponents/NavBar'
LoginRouter


export const App = () => {
  return(
    <div className='w-full h-full'>
      <LoginRouter/>
    </div>
    )
}

import React from 'react'
import { NavBar } from '../components/miniComponents/NavBar'
import {Routes,Route} from "react-router-dom"
import { AdminPage } from '../components/adminComponents.jsx/AdminPage'
import { NavBarAdmin } from '../components/adminComponents.jsx/NavbarAdmin'
import { CrearAnime } from '../components/adminComponents.jsx/CrearAnime'
import { AnimePage } from '../components/AnimePage'

export const AdminRouter = () => {
  return (
    <div className='w-full h-full'>
    <NavBarAdmin/>
    <Routes>
        <Route path='/*' element = {<AdminPage/>}/>
        <Route path='/crearAnime' element = {<CrearAnime/>}/>
        <Route path='/animes' element = {<AnimePage/>}/>

    </Routes>
    
    </div>
  )
}

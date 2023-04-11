import React from 'react'
import { NavBar } from '../components/miniComponents/NavBar'
import {Routes,Route} from "react-router-dom"
import { AdminPage } from '../components/adminComponents.jsx/AdminPage'
import { NavBarAdmin } from '../components/adminComponents.jsx/NavbarAdmin'
import { CrearAnime } from '../components/adminComponents.jsx/CrearAnime'
import { AnimePage } from '../components/AnimePage'
import { AnimeInfoCompleto } from '../components/AnimeInfoCompleto'
import { SearchPage } from '../components/SearchPage'

export const AdminRouter = () => {
  return (
    <div className='w-full h-[800px] box-content'>
    <NavBarAdmin/>
    <Routes>
        <Route path='/crearAnime' element = {<CrearAnime/>}/>
        <Route path='/animes' element = {<AnimePage/>}/>
        <Route path='/animes/:nombreAnime' element = {<AnimeInfoCompleto/>}/>
        <Route path='/admin' element = {<AdminPage/>}/>
        <Route path='/searchPage' element = {<SearchPage/>}/>

    </Routes>
    
    </div>
  )
}

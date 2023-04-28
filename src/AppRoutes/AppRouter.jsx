import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimeInfoCompleto } from '../components/AnimeInfoCompleto'
import { AnimePage } from '../components/AnimePage'
import { InicioPage } from '../components/InicioPage'
import { Mainpage } from '../components/Mainpage'
import { MangaPage } from '../components/MangaPage'
import { NavBar } from '../components/miniComponents/NavBar'
import { PerfilPage } from '../components/PerfilPage'

import { VerCapAnime } from '../components/VerCapAnime'
import { SearchPage } from '../components/SearchPage'
import PerfilRoutes from '../helpers/PerfilRoutes'
import { InfoUser } from '../components/PerfilComponents/informacionUser'
import { AnimesFav } from '../components/PerfilComponents/AnimesFav'
import { PostPageNav } from '../components/PostPageNav'



export const AppRouter = () => {
  
  const {pathname} = useLocation()

  const coso = pathname === PerfilRoutes.post() || pathname === PerfilRoutes.info() || pathname === PerfilRoutes.AnimesFav() 

  console.log("holis")
  console.log(PerfilRoutes.post)
  return (
    <div className='h-full w-full'>
    <NavBar/>
        <Routes>
          <Route path='/*' element = {<AnimePage/>}/>
          <Route path='/inicio' element = {<InicioPage/>}/>
          <Route path='/anime' element = {<AnimePage/>}/>
          <Route path='/mangas' element = {<MangaPage/>}/>
          <Route path='/perfil' element = {<PerfilPage/>}/>
          <Route path='/post' element = {<PostPageNav/>}/>
          <Route path='/animes/:idAnime' element = {<AnimeInfoCompleto/>}/>
          <Route path='/searchPage' element = {<SearchPage/>}/>
          
        </Routes>    
    </div>
  )
}

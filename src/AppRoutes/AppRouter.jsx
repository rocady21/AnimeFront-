import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimeInfoCompleto } from '../components/AnimeInfoCompleto'
import { AnimePage } from '../components/AnimePage'
import { InicioPage } from '../components/InicioPage'
import { Mainpage } from '../components/Mainpage'
import { MangaPage } from '../components/MangaPage'
import { NavBar } from '../components/miniComponents/NavBar'
import { PerfilPage } from '../components/PerfilPage'
import { PostPage } from '../components/PostPage'
import { VerCapAnime } from '../components/VerCapAnime'


export const AppRouter = () => {
  return (
    <div className='h-full w-full'>
    <NavBar/>
    <Routes>
        <Route path='/*' element = {<AnimePage/>}/>
        <Route path='/inicio' element = {<InicioPage/>}/>
        <Route path='/anime' element = {<AnimePage/>}/>
        <Route path='/mangas' element = {<MangaPage/>}/>
        <Route path='/post' element = {<PostPage/>}/>
        <Route path='/perfil' element = {<PerfilPage/>}/>
        <Route path='/animes/:idAnime' element = {<AnimeInfoCompleto/>}/>

    </Routes>
    
    </div>
  )
}

import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimeInfoCompleto } from '../components/AnimeInfoCompleto'
import { AnimePage } from '../components/AnimePage'
import { InicioPage } from '../components/InicioPage'
import { Mainpage } from '../components/Mainpage'
import { MangaPage } from '../components/MangaPage'
import { NavBar } from '../components/miniComponents/NavBar'
import { PerfilPage } from '../components/PerfilPage'
import { SearchPage } from '../components/SearchPage'
import { PostPageNav } from '../components/PostPageNav'
import { ProfilePeople } from '../components/ProfilePeople'
import { ShowThoughtPage } from '../components/ShowThoughtPage'
import { ChatPage } from '../components/ChatPage'



export const AppRouter = () => {

  const { pathname } = useLocation()

  return (
    <div className='h-full w-full'>
      <NavBar />
      <Routes>
        <Route path='/*' element={<AnimePage />} />
        <Route path='/inicio' element={<InicioPage />} />
        <Route path='/anime' element={<AnimePage />} />
        <Route path='/mangas' element={<MangaPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/perfil' element={<PerfilPage />} />
        <Route path='/post' element={<PostPageNav />} />
        <Route path='/post/:idPost' element={<ShowThoughtPage />} />
        <Route path='/animes/:idAnime' element={<AnimeInfoCompleto />} />
        <Route path='/searchPage' element={<SearchPage />} />
        <Route path='/perfil/:id_people' element={<ProfilePeople />} />



      </Routes>
    </div>
  )
}

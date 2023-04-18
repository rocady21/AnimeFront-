import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useAnimeSlice } from '../hooks/useAnimeSlice'
import { AnimeCard } from './miniComponents/AnimeCard';

export const AnimePage = () => {

  const {LoadAnimes,animes,isLoading} = useAnimeSlice()
  
  
  useEffect(() => {
    LoadAnimes();
  }, []);


  
  
  return (
    isLoading ===true? 
    (<div className='w-[60%]   m-auto mt-[0px] h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4    py-[50px]  '>
      {
      animes.map((anime) => {
        return <AnimeCard anime= {anime} key={anime._id}/>
      })
      }
    </div>):
    <div>
      <h1>Cargando...</h1>
    </div>
  )
}

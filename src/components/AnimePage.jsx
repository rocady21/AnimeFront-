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
    (<div className='grid grid-cols-4 p-[30px] relative'>
      {
      animes.map((anime) => {
        return <AnimeCard anime= {anime}/>
      })
      }
    </div>):
    <div>
      <h1>Cargando...</h1>
    </div>
  )
}

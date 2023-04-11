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
    (<div className='grid grid-cols-5 py-[50px] px-[250px] relative'>
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

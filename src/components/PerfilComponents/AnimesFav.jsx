import React from 'react'
import { useUserSlice } from '../../hooks/useUserSlice'
import { useEffect } from 'react'
import { AnimeCard } from '../miniComponents/AnimeCard'

export const AnimesFav = () => {

  const {user,listAnimeFavorite,resultsAnimesFav} = useUserSlice()
  console.log("Animes FAv:")
  console.log(resultsAnimesFav)

  useEffect(() => {
    listAnimeFavorite({id_User:user._id})
  }, []);


  return (
    <div className='w-full h-full  '>
      {
        resultsAnimesFav[0]? 
        <div className='grid grid-cols-3'>
          {
            resultsAnimesFav.map((animeFav)=> {
              return <AnimeCard anime = {animeFav} key={animeFav._id}/>
            })
          }
          
        </div>
        : <p>No tienes ningun Anime Favorito</p>
      }

    </div>
  )
}

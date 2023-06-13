import React from 'react'
import { useUserSlice } from '../../hooks/useUserSlice'
import { useEffect } from 'react'
import { AnimeCard } from '../miniComponents/AnimeCard'

export const AnimesFavoritos = ({ FavsAnime, id_people }) => {

  const { user, listAnimeFavorite, resultsAnimesFav } = useUserSlice()

  const data = FavsAnime ? FavsAnime : resultsAnimesFav


  useEffect(() => {
    if (id_people) {
      listAnimeFavorite({ id_User: id_people })
    } else {
      listAnimeFavorite({ id_User: user._id })
    }
  }, []);


  return (
    <div className='w-full bg-black/20 px-[20px] py-[50px] flex flex-row '>
      {
        data ?
          data.map((animeFav) => {
            return <AnimeCard stateFav={true} anime={animeFav} />
          }) :
          <p className='text-center'>No Hay Animes Favoritos</p>
      }

    </div>
  )
}

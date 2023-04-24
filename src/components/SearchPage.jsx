import React from 'react'
import { useAnimeSlice } from '../hooks/useAnimeSlice'
import { AnimeCard } from './miniComponents/AnimeCard'
import { useEffect } from 'react'

export const SearchPage = () => {

    const {resultsSearch,LoadAnimes} = useAnimeSlice()
    console.log(resultsSearch)
    useEffect(() => {
        LoadAnimes()
    }, []);

  return (
    <div className='p-[50px]'>
        {
            resultsSearch[0]?
                resultsSearch.map((anime)=> {
                    return <AnimeCard anime= {anime} key={anime._id}/>
                }):
                <div className='text-center text-white text-[25px]'>
                    No hay Animes con ese nombre.
                </div>


                
            
        }
        
        
    </div>
    
  )
}

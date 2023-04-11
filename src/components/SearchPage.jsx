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
            resultsSearch?
                resultsSearch.map((anime)=> {
                    return <AnimeCard anime= {anime} key={anime._id}/>
                }):
                <div>
                    No hay Capitulos con ese nombre
                </div>


                
            
        }
        
        
    </div>
    
  )
}

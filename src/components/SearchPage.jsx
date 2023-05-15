import React from 'react'
import { useAnimeSlice } from '../hooks/useAnimeSlice'
import { AnimeCard } from './miniComponents/AnimeCard'
import { useEffect } from 'react'
import { useFriendRequest } from '../hooks/useFriendRequest'
import { PeopleCard } from './miniComponents/PeopleCard'

export const SearchPage = () => {

    const { resultsSearch, LoadAnimes } = useAnimeSlice()
    const { peoples } = useFriendRequest()


    console.log(peoples)

    return (
        <div className='px-[50px]'>
            <p className='text-center my-[25px] text-white text-[20px]'>Resultado de la Busqueda de Animes:</p>
            {
                /*Cargar Animes en base al resultado de la busqueda */
                resultsSearch[0] ?
                    resultsSearch.map((anime) => {
                        return <AnimeCard anime={anime} key={anime._id} />
                    }) :
                    <div className='text-center text-white text-[25px]'>
                        No hay Animes con ese nombre.
                    </div>




            }
            <div className='w-full h-[1px] bg-amber-600 my-[50px] opacity-[0.5]'></div>
            <div className=' '>
                <p className='text-center my-[25px] text-white text-[20px]'>Resultado de la Busqueda de Personas:</p>
                {
                    /*Cargar personas en base al resultado de la busqueda */
                    <div className='w-full flex flex-row justify-center <'>
                        {
                            (peoples[0]) ? peoples.map((people) => {
                                return <PeopleCard infoPeople={people} key={people._id} />
                            })
                                : <p className='text-white text-center'>No hay personas con ese nombre</p>
                        }

                    </div>

                }
            </div>


        </div>

    )
}

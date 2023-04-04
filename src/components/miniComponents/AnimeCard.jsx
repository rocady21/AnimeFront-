import React, { useState } from 'react'
import { AnimeInfo } from './AnimeInfo';

export const AnimeCard = ({anime}) => {

    const {Portada} = anime

    const [info, setinfo] = useState(false);

    const MostrarInfo = ()=> {
        setinfo(true);        
    }

    const QuitarInfo = ()=> {
        setinfo(false);

    }
    
  return (
    <div className='animeCard h-[300px] w-[200px] z-02 ' onMouseEnter={MostrarInfo} onMouseLeave={QuitarInfo}>
        {
            info && <AnimeInfo anime={anime} status= {info} />

        }
        <div className="fondo h-[90%] bg-black">
            <img className=' h-full object-cover object-center' src={Portada} alt="" />
        </div>

        <div className="nombre text-white text-center ">{anime.name}</div>
    </div>    
  )
}

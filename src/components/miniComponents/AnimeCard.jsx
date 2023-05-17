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
    <div className='animeCard h-[325px] w-[200px] z-02 m-auto mt-[0px] ' onMouseEnter={MostrarInfo} onMouseLeave={QuitarInfo}>
        {
            info && <AnimeInfo anime={anime} status= {info} />

        }
        <div className="fondo h-[90%] bg-black flex justify-center w-full bg-slate-200 op-0.5 rounded-[5px] p-[3px] relative">
            <img className='img h-full w-full object-cover object-center' src={Portada} alt="" />
            <div className="tipo absolute h-[25px] bg-sky-400 w-[90px] bg-white left-[-8px] top-[6%] rounded-[10px] flex flex-row justify-center rotate-[-35deg]"><p className='self-center text-white'>{anime.Tipo}</p></div>
        </div>

        <div className="nombre text-white text-center ">{anime.name}</div>
    </div>    
  )
}

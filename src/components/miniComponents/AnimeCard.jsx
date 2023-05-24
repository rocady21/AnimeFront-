import React, { useState } from 'react'
import { AnimeInfo } from './AnimeInfo';
import clsx from 'clsx';


export const AnimeCard = ({ anime }) => {

    const { Portada } = anime

    const [info, setinfo] = useState(false);

    const MostrarInfo = () => {
        setinfo(true);
    }

    const QuitarInfo = () => {
        setinfo(false);


    }
    return (
        <div className='animeCard h-[325px] w-[200px] z-02 m-auto mt-[0px] mb-[10px]' onMouseEnter={MostrarInfo} onMouseLeave={QuitarInfo}>
            {
                info && <AnimeInfo anime={anime} status={info} />

            }
            <div className="fondo h-[90%] bg-black flex justify-center w-full bg-slate-200 op-0.5 rounded-[5px] p-[3px] relative">
                <img className='img h-full w-full object-cover object-center' src={Portada} alt="" />
                <div className={clsx('tipo absolute h-[25px]  w-[90px] bg-white left-[-20px] top-[8 %] rounded-[10px] flex flex-row justify-center rotate-[-35deg]', anime.Tipo === "Anime" ? 'bg-sky-400' : anime.Tipo === "Pelicula" ? 'bg-red-500' : 'bg-amber-400')}><p className='self-center text-white'>{anime.Tipo}</p></div>
            </div>

            <div className="nombre text-white text-center ">{anime.name}</div>
        </div>
    )
}

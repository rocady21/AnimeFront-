import React, { useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const AnimeCapCard = ({infoCap,idAnime}) => {
    

    const {nameCapitulo,Capitulo,portadaCap} = infoCap
    const navigate = useNavigate()
    const PaginaCap =()=> {
        navigate(`/animes/${idAnime}?idCap=${Capitulo}`)
    }
    const [state, setstate] = useState(false);
    const refimg = useRef();


    const Reproducir = ()=> {
        setstate(true)
    }
    const QuitarReproducir = ()=> {
        setstate(false)
    }
    
    return (
    <div className='h-[100px] bg-slate-100 flex flex-row  m-[10px] overflow-hidden   '>
        <div onClick={PaginaCap} className="foto w-[80%] h-full bg-white hover:opacity-80 inline-block relative cursor-pointer "  onMouseEnter={Reproducir} onMouseLeave={QuitarReproducir}>
            <img className='object-cover object-center h-full w-full relative ' src={portadaCap} alt="" ref={refimg}  />
            {
                state === true && <img src="/icons/reproducir.png" className="bg-[url('reproducir.png')] text-black w-[40px] h-[40px] absolute top-0 left-0 mx-[35%] my-[25%]"/>
            }
        </div>
        <div className="info w-full flex flex-col p-[10px] ">
            <div className='flex flex-row justify-between flex-wrap'>
                <p>T1-E{Capitulo}</p>
                <p>{nameCapitulo}</p>
            </div>
            <div className='flex flex-row justify-between'>
                
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export const AnimeCapInserts = ({infoCap}) => {

    const {nameCapitulo,Capitulo,portadaCap,Duracion} = infoCap;
    const imgCap = URL.createObjectURL(portadaCap)
  return (
    <div className='p-[10px] bg-black w-full flex flex-row h-[40px]'>
        <img src={imgCap} alt="" className='w-[40px] h-full' />
        <div>
            
        </div>
    </div>
  )
}

import React from 'react'

export const AnimeCapInserts = ({infoCap}) => {

    const {nameCapitulo,Capitulo,portadaCap,Duracion} = infoCap;
  return (
    <div className='card p-[5px]  w-full flex flex-row h-[120px] hover:bg-gray-900 mb-[10px] box-border '>
        <img src={portadaCap} alt="" className='w-[120px] h-full' />
        <div className='p-[20px] h-full w-full text-white flex flex-col justify-between'>
              <div className='flex flex-row'>
                <p>E{Capitulo}</p> <p> -{nameCapitulo}</p>
              </div>
              <div className=' flex flex-row justify-between text-gray-400'>
                <p>Subtitulado</p>
                <div className='flex flex-row'> <p className='mr-[5px]'>0</p> <img className='w-[20px] h-[20px] self-center' src="/icons/comentario.png" alt="" /> </div>
              </div>
        </div>
    </div>
  )
}

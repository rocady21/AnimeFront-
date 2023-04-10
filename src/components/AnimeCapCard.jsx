import React from 'react'

export const AnimeCapCard = ({infoCap}) => {
    

    const {nameCapitulo,Capitulo,portadaCap} = infoCap

    const PaginaCap =()=> {

    }

    return (
    <div className='h-[100px] bg-slate-100 flex flex-row  m-[10px] overflow-hidden ' onClick={PaginaCap}>
        <div className="foto w-[80%] h-full bg-white">
            <img className='object-cover object-center h-full w-full' src={portadaCap} alt="" />
        </div>
        <div className="info w-full flex flex-col p-[10px]">
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

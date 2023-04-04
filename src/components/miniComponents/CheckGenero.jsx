import React, { useState } from 'react'
import { useRef } from 'react';

export const CheckGenero = ({genero,guardar,borrar}) => {

    const ref = useRef()
    const saveChecked = ()=> {
        if(ref.current.checked === true) {
            return guardar(genero)
        } else if(ref.current.checked === false ) {
            return borrar(genero)
        }
    }
    
  return (
    <div className='flex flex-row text-white'>
    <input type="checkbox" className='mr-[10px]' ref={ref} name={genero} id={genero} onClick={saveChecked} />
    <label htmlFor={genero}><h1>{genero}</h1></label>
    </div>
  )
}

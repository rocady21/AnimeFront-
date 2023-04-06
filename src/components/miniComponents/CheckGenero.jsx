import React, { useState } from 'react'
import { useRef } from 'react';

export const CheckGenero = ({genero,guardar,quitar}) => {

    const ref = useRef()
    const saveChecked = ()=> {
      return guardar(genero)
    }
    
  return (
    <div className='flex flex-row '>
      <p className='' onClick={saveChecked} >{genero}</p>
    </div>
  )
}

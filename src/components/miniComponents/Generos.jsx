import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { CheckGenero } from './CheckGenero';


const generos = ["Accion","Ciencia Ficcion","Depores","Especial","Infantil","Mecha","Parodia","Romance","Shounen","Terror","Artes Marciales",
"Comedia","Drama","Fantasia","Josei","Militar","Policia","Samurai","Sobrenatural","Vampiros","Aventuras","Demencia","Echi","Harem","Juegos","Misterio","Psicologico","Seinen",
"Superpoderes","Yaoi","Carrearas","Demonios","Escolares","Historico","MAgia","Musica","Recuerdos de la Vida","Shoujo","Suspenso","Yuri"
]

export const GenerosDropdown = ({setKey}) => {
    
  const [generosSelected, setgenerosSelected] = useState([]);

  
  const guardarValoresSeleccionados = (genero) => {
    setgenerosSelected([...generosSelected,genero])
  }
  const borrarValoresSeleccionados = (genero) => {
    setgenerosSelected(generosSelected.filter((gen) => {
      return genero != gen
    }))
  }


  
  
  useEffect(() => {
    setKey({key:"Generos",value:generosSelected})
  }, [generosSelected]);



  return (
    <div className='grid grid-cols-3  h-[300px] flex flex-col flex-wrap '>
      {
      generos.map((genero) => {
        return <CheckGenero genero={genero} key={genero} guardar = {(genero)=> guardarValoresSeleccionados(genero)} borrar = {(genero) => borrarValoresSeleccionados(genero) }  />
      })
      }

      
    </div>
  )
}

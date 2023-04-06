import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { CheckGenero } from './CheckGenero';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearIcon from '@mui/icons-material/Clear';


const generos = ["Accion","Ciencia Ficcion","Depores","Especial","Infantil","Mecha","Parodia","Romance","Shounen","Terror","Artes Marciales",
"Comedia","Drama","Fantasia","Josei","Militar","Policia","Samurai","Sobrenatural","Vampiros","Aventuras","Demencia","Echi","Harem","Juegos","Misterio","Psicologico","Seinen",
"Superpoderes","Yaoi","Carrearas","Demonios","Escolares","Historico","MAgia","Musica","Recuerdos de la Vida","Shoujo","Suspenso","Yuri"
]

export const GenerosDropdown = ({setKey}) => {
    
  const [state, setstate] = useState(false);
  const [generosSelected, setgenerosSelected] = useState([]);

  
  const onchangeState = ()=> {
    setstate(!state)
  }

  

  
  const guardarValoresSeleccionados = (genero) => {
    setgenerosSelected([...generosSelected,genero])
  }
  const borrarValoresSeleccionados = (genero) => {
    setgenerosSelected(generosSelected.filter((gen) => {
      return gen != genero
    }))
  }


  
  
  useEffect(() => {
    setKey({key:"Generos",value:generosSelected})
    console.log(generosSelected)
  }, [generosSelected]);



  console.log(generosSelected)



  return (
    <div className='w-full flex justify-center flex-col items-center max-w-[400px]  '>
    <div className='relative inline-block w-[120px]'>
      <div>
      <button
          type="button"
          class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={onchangeState}
        >
          Options
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {
        state === true && (
          <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md h-[200px] overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
          >
                      <div class="py-1" role="none">
            {generos ? (
              generos?.map((generounique) => {
                return (
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    <CheckGenero genero={generounique} guardar={(genero)=>guardarValoresSeleccionados(genero)} quitar={(genero)=> borrarValoresSeleccionados(genero)}/>
                  </a>
                );
              })
            ) : (
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                value="ciudad"
              >
                <p>Select Ciudad</p>
              </a>
            )}

            <form method="POST" action="#" role="none"></form>
          </div>
            
          </div>
        )
      } 
    </div>
    <div className='listadoGenerosSeleccionados max-h-[100px] mt-[20px] max-w-full  flex flex-row flex-wrap'>
      {
        (generosSelected[0])? 
        (
          generosSelected.map((generocheck)=> {
            return <div className='px-[10px] py-[4px] mx-[3px] my-[10px] bg-gray-300 rounded-full '>{generocheck} <button onClick={()=> borrarValoresSeleccionados(generocheck)}>X</button></div>
          })
          ):
        <p className='text-white mt-[20px]'>No hay generos seleccionados</p>

      }
    </div>      
    </div>
  )
}

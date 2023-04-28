import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';


export const PostPagePerfil = () => {

  const [state, setstate] = useState(false);

  const MostrarLikes = ()=> {
    setstate(true)
  }
  const NoMostrarLikes = ()=> {
    setstate(false)

  }
  
  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-3   '>
        <div className='h-[350px] bg-white m-5 bg-color hover:opacity-[0.5]  relative flex flex-col items-center ' onMouseEnter={MostrarLikes} onMouseLeave={NoMostrarLikes}>
          <img className='w-full h-full object-cover object-center ' src="././icons/Rodri Silva (@ro_silv21) _ Instagram_files/selecto.webp" alt="" />
          {
            (state === true) && <div className='absolute top-[35%] w-[50%] hover:opacity-[1]  flex flex-row justify-around  '>
              <div className="likes flex flex-row items-center opacity-1 ">
                <ThumbUpOffAltOutlinedIcon sx={{fontSize:20, marginRight:"8px"}}/>
                <p className='text-[20px]'>87</p>
              </div>
              <div className="comentarios flex flex-row items-center">
                <SmsOutlinedIcon sx={{fontSize:20, marginRight:"8px"}}/>
                <p className='text-[20px]'>15</p>
              </div>
            </div>
          }
        </div>


      </div>

    </div>
  )
}

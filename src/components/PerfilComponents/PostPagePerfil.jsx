import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { usePosterSlice } from '../../hooks/usePostersSlice';
import { useUserSlice } from '../../hooks/useUserSlice';
import { ModalNewPost } from '../Modals/ModalNewPost';


export const PostPagePerfil = () => {

  const navigate = useNavigate()

  const [state, setstate] = useState(false);
  const [stateModal, setstateModal] = useState(false);
  const { LoadPostersUser, post } = usePosterSlice()
  const { user } = useUserSlice()

  useEffect(() => {
    LoadPostersUser({ id_user: user._id })
  }, []);

  console.log("xddddddddddddddddd")
  const openModal = () => {
    setstateModal(true)
  }
  const closeModal = (value) => {
    setstateModal(value)
  }

  const MostrarLikes = () => {
    setstate(true)
  }
  const NoMostrarLikes = () => {
    setstate(false)

  }
  const NavigatePostInfo = () => {
  }

  return (
    <div className='w-full h- flex flex-col '>
        {
          post?
          <div className='grid grid-cols-3'>
            {
            post.map((post) => {
              return <div key={post._id} className='h-[250px] bg-white m-5 bg-color hover:opacity-[0.5]  relative flex flex-col items-center cursor-pointer ' onClick={NavigatePostInfo} onMouseEnter={MostrarLikes} onMouseLeave={NoMostrarLikes}>
                <img className='w-full h-full object-cover object-center ' src={post.foto} alt="" />
                {
                  (state === true) && <div className='absolute top-[35%] w-[50%] hover:opacity-[1]  flex flex-row justify-around  '>
                    <div className="likes flex flex-row items-center opacity-1 ">
                      <ThumbUpOffAltOutlinedIcon sx={{ fontSize: 20, marginRight: "8px" }} />
                      <p className='text-[20px] text-black'>{post.MeGusta}</p>
                    </div>
                    <div className="comentarios flex flex-row items-center">
                      <SmsOutlinedIcon sx={{ fontSize: 20, marginRight: "8px" }} />
                      <p className='text-[20px]'>15</p>
                    </div>
                  </div>
                }
              </div>
            }) 
            }
          </div>:
            <p className='text-center my-[20px]'>No hay publicaciones...</p>

        }
      <button className='bg-amber-600 px-[40px] py-[10px] text-white rounded-[50px] mb-[10px] w-[200px] self-center mt-[50px]' onClick={openModal}>Añadir Post</button>
      {
        stateModal === true && <ModalNewPost close={(value) => closeModal(value)} />
      }

    </div>
  )
}

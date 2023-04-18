import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const ComentarioItem = ({comentario}) => {
  console.log(comentario.comentario)
  return (
    <div className='text-white w-full flex flex-row h-[150px] mb-[50px] justify-between '>
      <div className="foto w-[15%] self-start ">
        <img className='w-[70px] h-[70px] bg-black rounded-full object-cover object-center' src={comentario.photo} alt="" />
      </div>
      <div className="infoComentario flex flex-col w-[83%] text-white">
        <div className="nombre flex flex-row">
          <p className='font-bold mr-[30px]'>Rodrigo</p> 
          <p className='text-gray-400'>Hace 15 minutos</p>
        </div>
        <div className="comentario mt-[10px]">
          <p>{comentario.comentario}</p>
        </div>
        <div className="opciones flex flex-row mt-[20px] w-3/4 justify-between  px-[10px]">
          <button className="responder flex flex-row">
            <ReplyIcon className='self-center mr-[5px]' sx={{fontSize:20}}/>
            <p>Responder</p>
          </button>
          <button className="like w-[20px] h-[20px] flex flex-row ">
          <ThumbUpOutlinedIcon
                      sx={{ fontSize: 20, color: "white" }} className='self-center'
                    />
          <p className='ml-[5px] text-[18px] self-center'>0</p>
          </button>
          <button className="mas flex flex-row">
            <p>Mas</p>
            <MoreVertIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

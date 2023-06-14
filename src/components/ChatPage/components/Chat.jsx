import React from 'react'
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MessageItem } from '../miniComponents/MessageItem';


export const Chat = () => {
    const [chat, setchat] = useState("cos");
  return (
    <div className='chat w-full bg-black/50 h-full flex flex-row justify-center align-center'>
        {
            chat ? <div className='w-full h-full bg-black/10 p-[15px] flex flex-col justify-between'>
                <div className="infoContact w-full h-[12%] bg-black px-[20px] py-[10px] flex flex-row rounded-[10px] text-white">
                    <div className="foto w-[10%] h-[75px] self-center ">
                        <img className='w-full h-full rounded-full' src="../../../icons/kokushibo.jpg" alt="" />
                    </div>
                    <div className="info w-[85%] px-[20px] py-[5px] flex flex-col justify-between">
                        <h1 className='text-[25px] font-bold '>Rodrigo Olivera</h1>
                        <p>Ultima vez activ@: 13:06</p>
                    </div>
                    <div className="options w-[5%] pu">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="chat h-[80%] flex flex-col py-[20px] ">
                    <MessageItem isMe={false}/>
                </div>
                <div className="sendMessage h-[8%] flex flex-row">
                    <input className='focus:none text-black focus:outline-none bg-white/80 w-full rounded-[40px] px-[20px] pb-[10px] text-[18px]' placeholder='Escribe un Mensaje...'  type="text" name="" id="" />
                    <button className='h-[60px] w-[60px] bg-amber-500 rounded-full'></button>
                </div>
            </div> : <p className='self-center text-[20px]'>No hay chat seleccionado...</p>

        }
    </div>
  )
}

import React, { useEffect } from 'react'
import { useChatSlice } from '../../../hooks/useChatSlice';
import { MessagesContainer } from './MessagesContainer';

export const Chat = ({suscribeStatus = false}) => {

    const {chatToUser} = useChatSlice()



    
  return (
    <div className='chat w-full bg-black/50 h-full flex flex-row max-h-[800px] justify-center align-center'>
        {
            chatToUser !==undefined ? <MessagesContainer chats={chatToUser.messages}/> : <p className='self-center text-white text-[20px]'>No hay chat seleccionado...</p>
            
        }
    </div>
  )
}

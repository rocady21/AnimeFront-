import React from 'react'
import { useUserSlice } from '../../../hooks/useUserSlice';
import { useChatSlice } from '../../../hooks/useChatSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { MessageItem } from '../miniComponents/MessageItem';
import { useEffect } from 'react';
import { suscribeToMessagesChat } from '../../../hooks/pusher';
import * as Scroll from 'react-scroll';
import { useRef } from 'react';


let isSuscribe = false
export const MessagesContainer = ({chats}) => {
    const {chatToUser,contactSelected,newMessageToChat,handleUpdateChat} = useChatSlice()
    const {user} = useUserSlice()
    const [message, setmessage] = useState("");
    const refChatDiv = useRef()


    const sendMessagge = (e)=> {
        e.preventDefault()
        if(message.length >= 1) {
            newMessageToChat({id_me:user._id,id_user:contactSelected.id,message:message})
            setmessage("")
        }
    }
    const saveMessage = (e)=> {
        const value = e.target.value
        setmessage(value)
    }

    // funcion que guarde el mensaje nuevo
    const updateChat = (message)=> {
        handleUpdateChat(message)
    }
    // aqui es donde nos suscribimos al canal 
    const suscribe = ()=> {
        const channelNameWriting = "isWriting"
        const channelNameMessages = `messages-${chatToUser?.from}and-${chatToUser?.to}`
        suscribeToMessagesChat(channelNameMessages,updateChat)
    }    


    useEffect(() => {
        if(isSuscribe === false) {
            suscribe()
            isSuscribe = true;
            console.log("suscripto")
        }
    }, []);

    useEffect(() => {
        refChatDiv.current.scrollIntoView()
    }, [chats]);

    
  return (
    <div className='w-full h-full bg-black/10 p-[15px] flex flex-col justify-between'>
                <div className="infoContact w-full h-[12%] bg-black px-[20px] py-[10px] flex flex-row rounded-[10px] text-white">
                    <div className="foto w-[10%] h-[75px] self-center ">
                        <img className='w-full h-full rounded-full' src={contactSelected.photo} alt="" />
                    </div>
                    <div className="info w-[85%] px-[20px] py-[5px] flex flex-col justify-between">
                        <h1 className='text-[25px] font-bold '>{contactSelected.name}</h1>
                        <p>Ultima vez activ@: 13:06</p>
                    </div>
                    <div className="options w-[5%] pu">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div ref={refChatDiv} className="chatContainer h-[80%] overflow-y-auto flex flex-col py-[20px] ">
                    {
                        chats ?
                            chats.map((message)=>{
                        if(message.id_user == user._id ) {
                            return <MessageItem infoMessage ={message} isMe={true} user={user} key={message._id}/>
                        } else {
                            return <MessageItem infoMessage ={message} isMe={false} contactSelected={contactSelected} key={message._id} />
                        }
                    }) :  <p className='self-center text-white text-[20px]'>No hay Mensajes......</p>
                    }
                </div>
                <form onSubmit={sendMessagge} className="sendMessage h-[8%] flex flex-row">
                    <input className='focus:none text-black focus:outline-none bg-white/80 w-full rounded-[40px] px-[20px] pb-[10px] text-[18px]' value={message} onChange={saveMessage} placeholder='Escribe un Mensaje...'  type="text" name="" id="" />
                    <button className='h-[60px] w-[60px] bg-amber-500 rounded-full'></button>
                </form>
            </div>
  )
}

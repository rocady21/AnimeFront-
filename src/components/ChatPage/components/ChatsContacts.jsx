import React from 'react'
import { ChatContact } from '../miniComponents/ChatContact'
import { useChatSlice } from '../../../hooks/useChatSlice'
import { useEffect } from 'react'
import { useUserSlice } from '../../../hooks/useUserSlice'

export const ChatsContacts = () => {
  const {user} = useUserSlice()
  const {statusContacts,chatContacts,loadContactsChats,loadLastMessage} = useChatSlice()

  useEffect(() => {
    loadContactsChats({id_me:user._id})
  }, []);


  return (
    <div className='w-full h-full bg-black/30 flex flex-row justify-center'>
    {
      statusContacts === "no-contacts" ? <div className='text-white text-center  self-center  '>Cargando...</div> : 
    <div className='contactsChat w-full h-full py-[20px] flex flex-col'>
        <div className="searchCHats container self-center h-[10%]">
          <form className=" flex flex-col" >
            <input
              type="search"
              className=" w-[80%] self-center px-[30px] py-[10px] text-white rounded-[5px] bg-slate-700/50 focus:bg-slate-800 focus:outline-none  border border-[1px] border-none"
              placeholder="Buscar Chat... "
              name=""
              id=""
            />
          </form>
        </div>
        <div className="chatsRecient container self-center h-[90%] flex flex-col">
            <h1 className='text-center text-white text-[25px]'>Chats</h1>
            <div className="chats w-full  h-full py-20px px-[25px]">
                {
                  chatContacts? 
                  chatContacts.map((contact)=> {
                    const lastMessage = loadLastMessage({id_me:user._id,id_user:contact.id})
                      return <ChatContact infoContact={contact} lastMessage={lastMessage} key={contact.id} />                  
                  }) : <p className='text-center text-white'>No hay Chats...</p>
                }
            </div>

        </div>
    </div>
    }
    </div>
  )
    
}

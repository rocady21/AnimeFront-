import React from 'react'
import { ChatContact } from '../miniComponents/ChatContact'
import { useChatSlice } from '../../../hooks/useChatSlice'
import { useEffect } from 'react'
import { useUserSlice } from '../../../hooks/useUserSlice'
import { useState } from 'react'
import { ContactSearch } from '../miniComponents/ContactSearch'

export const ChatsContacts = () => {
  const {user} = useUserSlice()
  const {statusContacts,chatContacts,loadContactsChats,filterChatSearch,resultsSearch,messageError} = useChatSlice()
  const [stateSearch, setstateSearch] = useState("");
  useEffect(() => {
    loadContactsChats({id_me:user._id})
  }, []);

  const BuscarChat = (e)=> {
    setstateSearch(e.target.value)
  }

  const buscarChats = ()=> {
    filterChatSearch(chatContacts,stateSearch)
  }

  useEffect(() => {
    buscarChats()
  }, [stateSearch]);
  

  return (
    <div className='w-full h-full bg-black/30 flex flex-row justify-center'>
    {
      statusContacts === "no-contacts" ? <div className='text-white text-center  self-center  '>Cargando...</div> : 
    <div className='contactsChat w-full h-full py-[20px] flex flex-col'>
        <div className="searchCHats container self-center h-[10%] flex flex-row justify-center">
          <form className=" flex flex-col justify-center w-[80%] relative" >
            <input
              type="search"
              className=" px-[30px] py-[10px] text-white rounded-[5px] bg-slate-700/50 focus:bg-slate-800 focus:outline-none  border border-[1px] border-none"
              placeholder="Buscar Chat... "
              name=""
              id=""
              onChange={BuscarChat}
            />
            {
              stateSearch && <div className='bg-white w-full py-[10px] absolute top-[60px] z-10 rounded-b-[10px]'>
                  {
                    resultsSearch ?
                      resultsSearch.map((contact)=> {
                        return <ContactSearch infoContact={contact} key={contact.id}/>
                      }) : <p className='py-[5px] text-[16px] text-black text-center '>{messageError}</p>
                  }
              </div>
            }
          </form>
        </div>
        <div className="chatsRecient container self-center h-[90%] flex flex-col z-1 ">
            <h1 className='text-center text-white text-[25px]'>Chats</h1>
            <div className="chats w-full  h-full py-20px px-[25px]">
                {
                  chatContacts? 
                  chatContacts.map((contact)=> {
                      return <ChatContact infoContact={contact} key={contact.id} lastMessage={contact.lastMessage} />                  
                  }) : <p className='text-center text-white'>No hay Chats...</p>
                }
            </div>

        </div>
    </div>
    }
    </div>
  )
    
}

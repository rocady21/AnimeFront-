import React from 'react'
import { ChatContact } from '../miniComponents/ChatContact'

export const ChatsContacts = () => {
  return (
    <div className='contactsChat w-full bg-black/30 h-full py-[20px] flex flex-col'>
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
        <div className="chats container self-center h-[90%] flex flex-col">
            <h1 className='text-center text-white text-[25px]'>Chats</h1>
            <div className="chats w-full  h-full py-20px px-[25px]">
                <ChatContact/>
            </div>

        </div>
    </div>
  )
}

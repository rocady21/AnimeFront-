import React from 'react'

export const MessageItem = ({infoMessage,isMe,contactSelected,user}) => {
  return (
    <div className='w-full flex flex-col'>
        {
            isMe === true ? <div className=' max-w-[50%] h-[75px] flex flex-row self-end   '>
            <div className="texto self-center pr-[15px] py-[5px] rounded-[50px] bg-amber-600 flex flex-row justify-between px-[15px]">
                <div className=" hora w-[70px] self-end ">
                    <p className='text-[10px] w-full'>17:06 am</p>
                </div>
                <div className='self-center w-full '>
                    <p className='w-full h-full text-end text-[14px]'>{infoMessage.message}</p>
                </div>
            </div>
            <div className="foto w-[55px] h-[55px] self-center  ml-[15px] ">
                <img className='w-full h-full rounded-full object-cover object-center' src={user?.photo} alt="" />
            </div>
        </div> : <div className=' max-w-[50%] h-[75px] flex flex-row  '>
        <div className="foto w-[55px] h-[55px] self-center  mr-[15px] ">
            <img className='w-full h-full rounded-full object-cover object-center' src={contactSelected?.photo} alt="" />
        </div>
        <div className="texto self-center pl-[15px] py-[5px] rounded-[50px] bg-amber-600 flex flex-row justify-between px-[15px]">
            <div className='w-full self-center'>
                <p className='text-[14px] text-start'>{infoMessage.message}</p>
            </div>
            <div className="hora self-end w-[70px]">
                <p className='text-[10px] w-full '>17:06 am</p>
            </div>
        </div>
    </div>
        }
        
    </div>    

  )
}

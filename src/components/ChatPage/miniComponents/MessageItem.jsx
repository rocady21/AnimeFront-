import React from 'react'

export const MessageItem = ({infoMessage,isMe}) => {
  return (
    <div>
        {
            isMe === true ? <div className=' max-w-[30%] h-[100px] flex flex-row justify-end '>
            <div className="foto w-[55px] h-[55px] self-center  mr-[15px] ">
                <img className='w-full h-full rounded-full object-cover object-center' src="../../../icons/Kokushibo_anime.webp" alt="" />
            </div>
            <div className="texto w-[120px]  self-center pl-[15px] py-[5px] rounded-[50px] bg-amber-600 flex flex-row">
                <div className='w-[50%] self-center'>
                    <p className='text-[16px]'>{infoMessage.message}</p>
                </div>
                <div className="w-[50%] hora self-end">
                    <p className='text-[12px]'>17:06 am</p>
                </div>
            </div>
        </div> : <div className=' max-w-[30%] h-[100px] flex flex-row '>
        <div className="foto w-[55px] h-[55px] self-center  mr-[15px] ">
            <img className='w-full h-full rounded-full object-cover object-center' src="../../../icons/Kokushibo_anime.webp" alt="" />
        </div>
        <div className="texto w-[120px]  self-center pl-[15px] py-[5px] rounded-[50px] bg-amber-600 flex flex-row">
            <div className='w-[50%] self-center'>
                <p className='text-[16px]'>{infoMessage.message}</p>
            </div>
            <div className="w-[50%] hora self-end">
                <p className='text-[12px]'>17:06 am</p>
            </div>
        </div>
    </div>
        }
        
    </div>    

  )
}

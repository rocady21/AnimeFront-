import React from 'react'

export const ChatContact = () => {
  return (
    <div className='w-full h-[100px] bg-black/50 rounded-[10px] flex flex-row text-white px-[10px] relative my-[10px]'>
        <div className="photo w-[25%] flex flex-row justify-center">
            <img className='self-center h-[65px] w-[65px] rounded-full' src="../../../../icons/kokushibo.jpg" alt="" />
        </div>
        <div className="MessageRecient w-[70%] py-[10px]">
            <div className="infoMessage flex flex-row  ml-[5px]">
                <a href={`/perfil`} className="self-center nombre font-bold text-[18px]">Rodrigo Olivera</a> 
                <p className='px-[3px]'>-</p>
                <div className='w-[10px] h-[10px] rounded-full bg-red-500 self-center'></div>
            </div>
            <button className="message ml-[10px] h-[40px] w-[80%]  ">
                <p className='text-[16px] truncate'>Hola buenos Dias Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit cumque quas, quasi quidem non laboriosam voluptate autem ut placeat incidunt. Molestias doloribus fuga autem nesciunt alias nihil similique suscipit?</p>
            </button>
        </div>
        <p className='w-[10%] text-white/50 self-center' >15mn</p>
    </div>
  )
}

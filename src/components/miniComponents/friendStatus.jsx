import clsx from 'clsx'
import React from 'react'

export const FriendStatus = ({ infoFriend }) => {
  const { status } = infoFriend
  return (
    <div className='w-[32px] h-[32px] rounded-full self-center relative my-[10px]'>
      <img src={infoFriend.photo} className='rounded-full object-cover object-center' alt="" />
      <div className={clsx('w-[10px] h-[10px] rounded-full absolute top-[26px] left-[20px]', status === "Online" ? 'bg-lime-500' : 'bg-gray-500	')}></div>
    </div>
  )
}

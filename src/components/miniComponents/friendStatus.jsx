import React from 'react'

export const FriendStatus = ({infoFriend}) => {
  return (
    <div className='w-[32px] h-[32px] bg-black rounded-full self-center'>
        <img src={infoFriend.photo} className='rounded-full object-cover object-center' alt="" />
    </div>
  )
}

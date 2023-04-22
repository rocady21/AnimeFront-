import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useUserSlice } from '../hooks/useUserSlice'
import { useState } from 'react'

export const ErrorModal = ({error,stateModal}) => {
  
  return (
    <> 
    <div className='w-[500px] h-[200px] z-10 bg-white absolute m-auto top-1/4 left-1/3 rounded-[40px]'>
        <button onClick={stateModal(false)} className=''><p className='text-end'>salir</p></button>
        <p className='text-center text-[20px] mt-[80px]'>{error}</p>
    </div>
    </>
  )
}

import React from 'react'
import 'animate.css'
import { clsx } from 'clsx';
import { useSelector } from 'react-redux'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useUserSlice } from '../hooks/useUserSlice'
import { useState } from 'react'

export const ErrorModal = ({error,seterrorModal}) => {

  const closeModal = ()=> {
    return seterrorModal(false)
  }
  
  return (
    <> 
    <div className="w-[500px] h-[200px] z-10 bg-white absolute m-auto top-[300px] left-[38%] rounded-[40px] animate__zoomIn animate__animated animate__faster 200ms flex flex-col">
        <button onClick={closeModal} className=''><p className='text-end text-[20px] mr-[20px]'>Salir</p></button>
        <p className='text-center text-[20px] mt-[80px] self-center absolute'>{error}</p>
    </div>
    </>
  )
}

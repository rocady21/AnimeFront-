import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useUserSlice } from '../hooks/useUserSlice'
import { useState } from 'react'
import { ErrorModal } from './ErrorModal'

export const LoginPage = () => {

// <NavLink to={"/register"}>Registrarme</NavLink> 
  const navigator = useNavigate();
  const formLogin = {
    email: "",
    password: ""
  }

  const {oninputChange,email,password} = useForm(formLogin)
  const {startLogin,messageError} = useUserSlice()
  const {status,user} = useSelector((state) => state.user)
  const [errorModal,seterrorModal]= useState(false)
  const [MessageError,setMessageError] = useState("")

  const onSubmit = (e)=> {
    e.preventDefault()
    if (!email && !password) {
      seterrorModal(true)
      setMessageError("Debe de ingresar un correo y una contraseña valida")
    } else if(!password) {
      seterrorModal(true)
      setMessageError("Debe de ingresar una contraseña valida")
    } else if(!email) {
      seterrorModal(true)
      setMessageError("Debe de ingresar un email valido")
    } else if(email && password) {
      startLogin({email:email,password:password})
    }
    navigator("/animes");
  }

  
  return (
    <> 
    <div className='flex flex-col items-center w-full h-full h-full w-full relative z-1'>

      <div className="formulario w-[600px] h-[600px] flex justify-center items-center mt-[200px] bg-zinc-900 shadow-2xl shadow-amber-500/20  flex">
      <form className='flex flex-col  w-full h-full justify-center px-[50px] py-[30px] flex justify-around ' onSubmit={onSubmit}>
        <div className='flex flex-col'>
        <label htmlFor="email" className='text-white'>Ingrese su email</label>
        <input autoComplete='off-autocomplete' type="email" name="email" id="email" placeholder='Email' value={email} onChange={oninputChange} className='bg-transparent text-white border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none'  />
        </div>
        
        <div className='flex flex-col'>
        <label htmlFor="password" className='text-white'>Ingrese su Contraseña</label>
        <input autoComplete='on' type="password" name="password" id="password" placeholder='example...' password={password} onChange={oninputChange} className='bg-transparent text-white border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none' />
        </div >
        <div className='flex flex-col items-center'>
        <button className=' bg-gradient-to-r from-amber-600 to-amber-400 px-[40px] py-[10px] text-white rounded-[50px] mb-[10px]'>Iniciar Sesion</button>
        <h1 className='flex flex-row text-white'>No tienes una cuenta?  <NavLink to={"/register"} > <h1 className='text-amber-600 font-bold'> Crear Una</h1></NavLink>   </h1>

        </div>
        
      </form>

      </div>
    </div>

    {
      messageError? (<ErrorModal error={messageError} seterrorModal={(value)=> seterrorModal(value)}/>):
      (errorModal === true && <ErrorModal error={MessageError} seterrorModal={(value)=> seterrorModal(value)} />)
    }
    </>
  )
}

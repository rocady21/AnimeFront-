import React from 'react'
import { useForm } from '../hooks/useForm'
import { useUserSlice } from '../hooks/useUserSlice'

const FormularioRegister ={
  photo:null,
  name: "",
  email: "",
  password: ""
}

export const Registerpage = () => {

  const {photo,name,email,password,oninputChange} = useForm(FormularioRegister)
  const {RegisterUsuario} = useUserSlice()
  const onSubmit = (e)=> {
    e.preventDefault()
    RegisterUsuario({name:name, email:email, password:password})
  }
  return (
    <div className='w-full h-full'>
      <div className='flex justify-center mt-[100px]'>
      <form className='text-white flex flex-col h-[700px] w-[600px] px-[50px] justify-around  bg-zinc-900 shadow-2xl shadow-amber-500/20 ' onSubmit={onSubmit}>
        <div className='h-[100px] w-[100px] bg-black rounded-full self-center  '>
          <input type="file" className='w-[20px] h-[20px] ' placeholder='col' name="" id="" />
        </div>
        <div className='contentRegister'>
        <label htmlFor="name">Nombre Completo</label>
        <input type="text" name="name" id="name" onChange={oninputChange} value={name} placeholder='name...' className='bg-transparent border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none' />
        </div>
        <div className='contentRegister'>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={oninputChange} value={email} placeholder='Ej:example@gmail.com' className='bg-transparent border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none' />
        </div>

        <div className='contentRegister'>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" onChange={oninputChange} value={password} placeholder='password...' className='bg-transparent border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none' />
        </div>
        <div className='button flex justify-center '>
          <button className='bg-gradient-to-r from-amber-600 to-amber-400 px-[40px] py-[10px] text-white rounded-[50px] mb-[10px]'>Registrarme</button>
        </div>
      </form>
      </div>
    </div>
  )
}

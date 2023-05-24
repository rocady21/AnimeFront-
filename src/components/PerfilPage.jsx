import React from 'react'
import { useUserSlice } from '../hooks/useUserSlice'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AnimesFav } from './PerfilComponents/AnimesFav'
import { useState } from 'react'
import { PostPagePerfil } from './PerfilComponents/PostPagePerfil'
import { InfoUser } from './PerfilComponents/informacionUser'
import { ModalNewPost } from './Modals/ModalNewPost'

NavLink
export const PerfilPage = ({ children, renderChildren }) => {

  const { user } = useUserSlice()

  return (
    <div>Hola</div>
  )
}

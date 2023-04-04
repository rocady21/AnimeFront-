import React from 'react'
import { useParams } from 'react-router-dom';

export const AnimeInfoCompleto = () => {

  const params = useParams();
  const {nombreAnime,...rest} = params;
  console.log(params)
  // funcion que filtre anime segun nombre

  return (
    <div>AnimeInfoCompleto</div>
  )
}

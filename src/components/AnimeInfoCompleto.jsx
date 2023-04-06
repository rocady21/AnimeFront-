import React from "react";
import { useParams } from "react-router-dom";
import { useAnimeSlice } from "../hooks/useAnimeSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const AnimeInfoCompleto = () => {
  const params = useParams();
  console.log(params)
  const { nombreAnime } = params;
  console.log("cosooooo")

  const { filterAnimeById,results} = useAnimeSlice();


  useEffect(() => {
    // crear api que filtre info del anime en base al id y traigo la info 
    filterAnimeById(nombreAnime);

  }, []);

  
  // funcion que filtre anime segun nombre

  return (
    <div className="w-full h-full box-border">
      <div className="portada w-full bg-black h-[300px] absolute ">
        <div className="info  w-[300px] h-[700px] mt-[100px] ml-[10%] flex flex-col items-center ">
          
          <div className="foto w-full h-full bg-white p-[5px] rounded-[20px]">
            <img className="rounded-[20px]" src={results.Portada} alt="" />
          </div>
          <div className="h-full w-full flex flex-col mt-[20px] justify-around">
            <div className="emision w-full h-[60px] flex flex-row">
                
                <p className="text-[20px] ">EN EMISION</p>
            </div>
            <div className="favortios w-full h-[60px] ">

            </div>
            <div className="listaEspera w-full h-[60px] ">

            </div>
          </div>
        </div>
        <div className="generos"></div>
      </div>
      <div className="capitulos"></div>
    </div>
  )
};

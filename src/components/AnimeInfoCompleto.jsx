import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAnimeSlice } from "../hooks/useAnimeSlice";
import { useEffect,useState} from "react";
import { useSelector } from "react-redux";
import TvIcon from "@mui/icons-material/Tv";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { AnimeCapCard } from "./AnimeCapCard";
import { VerCapAnime } from "./VerCapAnime";
import { VerCapAnimeisLoading } from "./VerCapAnimeisLoading";


export const AnimeInfoCompleto = () => {
  const params = useParams();
  const { idAnime } = params;
  const { filterAnimeById, results,resultsSearch,filterAnimeCap } = useAnimeSlice();
  const [search, setsearch] = useState("");
  const {Capitulos} = results;


  const guardarValorSearch =(e)=> {
    setsearch(e.target.value)
    const searchInt = parseInt(e.target.value)
    filterAnimeCap(results,searchInt)
  }
  useEffect(() => {
    // crear api que filtre info del anime en base al id y traigo la info
    filterAnimeById(idAnime);
  }, []);

  const [params1] = useSearchParams()
  const idCap = params1.get("idCap");

  // funcion que filtre anime segun nombre

  return (

    <div>
      {
        (!idCap)? 
        (
          <div className="w-full h-full box-border flex flex-col box-border box-content relative ">
          <div className="portada w-full flex flex-row bg-black h-[300px] absolute ">
            <p className="text-white self-end ml-[30%] mb-[10px] italic text-[40px]  ">One Piece</p>
            <div className="info  w-[300px] h-[750px] mt-[100px] ml-[10%] flex flex-col items-center absolute ">
              <div className="foto w-full h-full bg-white p-[7px] rounded-[20px]">
                <img className="rounded-[20px]" src={results.Portada} alt="" />
              </div>
              <div className="h-full w-full flex flex-col mt-[20px] justify-around">
                <div className="emision w-full bg-green-600 text-center flex flex-row items-center rounded-[10px] justify-items-stretch p-[15px]  ">
                  <div className="mr-[18%]">
                    <TvIcon sx={{ fontSize: 25, color: "white" }} />
                  </div>
                  <p className="text-[25px] text-white justify-self-center  ">
                    EN EMISION
                  </p>
                </div>
                <div className="favortios w-full  flex flex-row items-center p-[5px]  bg-white rounded-[10px]">
                  <FavoriteIcon sx={{ fontSize: 50, color: "red" }} />
                  <button className="flex flex-col hover:text-red-400 ml-[20px]">
                    <p className="text-[20px] ">AGREGAR</p>
                    <p>a favoritos</p>
                  </button>
                </div>
                <div className="listaEspera w-full bg-white p-[10px] flex flex-row items-center rounded-[15px] ">
                  <button className="icono w-[50px] h-[50px] rounded-full border border-amber-400 flex justify-center items-center mr-[10px]">
                    <TurnedInIcon sx={{ fontSize: 35, color: "rgb(251 191 36)" }} />
                  </button>
                  <p className="">Lista de Espera</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] sinopsis box-border rounded-[5px]  ml-[28%] bg-slate-200 mt-[320px] px-[20px] py-[50px]">
            <div className="flex flex-col">
              <div className="flex flex-row">
                {results.Generos ? (
                  results?.Generos.map((genero) => {
                    return <p className="mr-[10px] bg-amber-600 text-white px-[15px] py-[5px] rounded-[50px] italic">{genero}</p>;
                  })
                ) : (
                  <p>No hay generos </p>
                )}
              </div>
              <div className="border-b-[1px] mt-[15px] mb-[15px] border-slate-300"></div>
            </div>
            <p className="italic leading-relaxed ">{results.sinopsis}</p>
          </div>
          <div className="listadoCapitulos w-[50%] sinopsis box-border rounded-[5px]  ml-[28%] bg-slate-200 mt-[30px] px-[20px] py-[50px]">
                  <div className="tituloYBuscar w-full flex flex-row mb-[30px]  grid justify-items-stretch items-center relative ">
                  <h1 className=" justify-self-center font-bold text-[30px] absolute" >Listado de Capitulos</h1>
                  <div className="justify-self-end">
                    <input type="search" className="outline-none px-3 py-1 rounded-lg " placeholder="Buscar..." value={search} onChange={guardarValorSearch} name="" id="" />                
                    <button className="bg-amber-600 text-white py-1 px-5 italic rounded-md ">Buscar</button>
                  </div>
                  </div>
                  <div className="border-b-[1px] mt-[15px] mb-[15px] border-slate-300"></div>
                  <div className="grid grid-cols-3 mt-[30px]">
                  {
                    (search)? (
                      <AnimeCapCard infoCap={resultsSearch}/> 
                    ):
                    Capitulos? 
                    (
                      Capitulos.map((capitulo)=> {
                        return <AnimeCapCard infoCap = {capitulo} key={capitulo.capitulo} idAnime= {idAnime}/>
                      })
                      ) : 
                    (
                      <div>
                        No hay Capitulos
                      </div>
                    )
    
                  }
                  </div>
                  
          </div>
          <div className="capitulos"></div>
        </div>
        ) : 
        (results._id)? 
        (
        <VerCapAnime numeroCap = {idCap} anime = {results}/>

        ) : 
        <VerCapAnimeisLoading/>
      }      

    </div>

  );
};

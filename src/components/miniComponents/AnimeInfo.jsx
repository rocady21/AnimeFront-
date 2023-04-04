import React from "react";
import { useNavigate } from "react-router-dom";

export const AnimeInfo = ({ anime, status }) => {
    const navigate = useNavigate()
    const MostrarInfo = ()=> {
        navigate(`/animes/${anime.name}`)
    }
    return (
    <div className="ml-[200px] infoAnime w-[400px] h-[400px] bg-black absolute rounded-[30px] z-01">
        <div className="p-[20px] flex flex-col justify-around w-full h-full">
            <div className="flex flex-row h-[5%] justify-around text-white ">
            <h1 className=" mb-[10px]">{anime.name}</h1>
            <div className="puntuacion">3</div>
            </div>
            <div className="sinopsis h-[50%] overflow-hidden">
                <p className="text-white">{anime.sinopsis}</p>
            </div>

            <button onClick={MostrarInfo} className="h-[10%] bg-gradient-to-r from-amber-600 to-amber-400 px-[10px] py-[5px] text-center text-white rounded-[50px]">Ver Anime</button>

        </div>
      
    </div>
  );
};

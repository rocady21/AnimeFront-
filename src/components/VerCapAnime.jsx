import React from "react";
import { useAnimeSlice } from "../hooks/useAnimeSlice";
import { useEffect } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useState } from "react";
import { useUserSlice } from "../hooks/useUserSlice";

export const VerCapAnime = ({ numeroCap, anime }) => {
  console.log(numeroCap);
  console.log("coso");
  console.log(anime);
  const { getCapituloById, infoCapPage, results } = useAnimeSlice();
    const { user} = useUserSlice()
  const [stateLike, setstateLike] = useState(0);
  const [stateDisLike, setstateDisLike] = useState(0);

  useEffect(() => {
    const covertIntNumCap = parseInt(numeroCap);
    getCapituloById(anime, covertIntNumCap);
  }, []);

  const IncrementLiked = () => {
    setstateLike(stateLike + 1);
  };
  const IncrementDisLiked = () => {
    setstateDisLike(stateDisLike + 1);
  };

  return (
    <div className=" w-full h-full">
      <div className="h-[700px]  bg-black m-auto relative ">
        <img
          className="w-full h-full object-cover object-center"
          src={infoCapPage.portadaCap}
          alt=""
        />
        <button className="button1 w-[150px] h-[150px] absolute left-1/2 top-1/3">
          <img className="" src="/icons/reproducir.png" alt="" />
        </button>
      </div>

      <div className="flex flex-row w-[1000px] m-auto">
        <div className="infoCapYComentarios h-full h-full w-2/3 mt-[50px] flex flex-col ">
          <div className="info h-[300px] ">
            <div className="flex w-full h-[50px] flex-row justify-between">
              <div className="nombreYPuntuacionAnime">
                <h1 className="text-[20px] text-amber-600  border-r-[1px] border-gray-600 pr-[10px]">
                  {results.name}
                </h1>
                <div></div>
              </div>
              <div className="favoritos"></div>
            </div>
            <div className="infoCap flex flex-col h-[250px] justify-between ">
              <p className="text-white text-[30px]">
                E{infoCapPage.Capitulo} - {infoCapPage.nameCapitulo}
              </p>
              <p className="text-gray-500">Subtitulado</p>
              <p className="text-white">Lanzado el 13/06/22</p>
              <div className="megusta flex flex-row w-[200px] justify-around">
                <div className="like flex flex-row">
                  <button onClick={IncrementLiked}>
                    <ThumbUpOutlinedIcon
                      sx={{ fontSize: 30, color: "white" }}
                    />
                  </button>
                  <p className="text-white text-[25px] ml-[10px]">
                    {stateLike}
                  </p>
                </div>
                <div className="dislike flex flex-row">
                  <button onClick={IncrementDisLiked}>
                    <ThumbDownOffAltOutlinedIcon
                      sx={{ fontSize: 30, color: "white" }}
                    />
                  </button>
                  <p className="text-white text-[25px] ml-[10px]">
                    {stateDisLike}
                  </p>
                </div>
              </div>
              <div className="SinospsisCap ">
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis enim vero omnis eaque harum molestias rerum corporis
                  totam veniam. Rerum aperiam autem fugiat voluptate doloremque
                  nostrum commodi asperiores tempora ipsum?
                </p>
              </div>
            </div>
          </div>
          <div className="comentarios min-h-[400px] mt-[50px] ">
            <div className="flex flex-col">
              <h1 className="text-white text-[30px] mb-[50px]">Agregar Comentario</h1>
              <div className="flex flex-row items-center">
                <div className="w-[10%] flex items-start">
                    <img className="w-[50px] h-[50px] rounded-full" src={user.photo} alt="" />
                </div>
              <textarea className="bg-slate-600 w-[70%] text-white px-[20px] pt-[10px] rounded-[5px] min-h-[50px] max-h-[100px]" rows="3" cols="" placeholder="Escriba Su comentario" ></textarea>
                <button className="w-[20%] bg-amber-600 text-white h-[50px]   px-2">Agregar Comentario</button>
              </div>
            </div>
          </div>
        </div>

        <div className="seguientesCap min-h-[400px] w-1/3 "></div>
      </div>
    </div>
  );
};

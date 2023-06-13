import React from "react";
import { useAnimeSlice } from "../hooks/useAnimeSlice";
import { useEffect } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useState } from "react";
import { useUserSlice } from "../hooks/useUserSlice";
import { ComentarioItem } from "./ComentarioItem";
import SendIcon from '@mui/icons-material/Send';

export const VerCapAnime = ({ numeroCap, anime }) => {

  const { getCapituloById, infoCapPage, results } = useAnimeSlice();
  const { user } = useUserSlice()
  const [stateLike, setstateLike] = useState(0);
  const [Comentario, setComentario] = useState("");
  const [stateDisLike, setstateDisLike] = useState(0);
  const { resultsComentarios, AgregarComentario, CargarComentarios } = useAnimeSlice()

  const covertIntNumCap = parseInt(numeroCap);

  useEffect(() => {
    getCapituloById(anime, covertIntNumCap);
    CargarComentarios({ idAnime: anime._id, NumeroCap: covertIntNumCap })
  }, []);



  const IncrementLiked = () => {
    setstateLike(stateLike + 1);
  };
  const IncrementDisLiked = () => {
    setstateDisLike(stateDisLike + 1);
  };




  const addComentario = (e) => {
    e.preventDefault()
    if (Comentario.length >= 5) {
      AgregarComentario({ idAnime: anime._id, id_User: user._id, NumeroCap: covertIntNumCap, Comentario: Comentario, photo: user.photo })
      setComentario("")
    } else {
    }
  }

  useEffect(() => {
    CargarComentarios({ idAnime: anime._id, NumeroCap: covertIntNumCap })
  }, [])

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
              <form onSubmit={addComentario} className="flex flex-row items-center justify-between">
                <div className="w-[10%] flex items-start">
                  <img className="w-[50px] h-[50px] rounded-full object-cover items-cover" src={user.photo} alt="" />
                </div>
                <textarea className="bg-slate-600 w-full text-white px-[20px] pt-[10px] rounded-[5px] min-h-[50px] max-h-[100px]" value={Comentario} onChange={(e) => setComentario(e.target.value)} rows="3" cols="" placeholder="Escriba Su comentario" ></textarea>
                <button className="w-[50px] p-[10px] m-4 h-[50px] bg-amber-600 rounded-full flex flex-row items-center justify-center" ><SendIcon sx={{ color: "white", fontSize: 25 }} /></button>
              </form>
            </div>
            <div className="comentarios w-full px-[40px] mt-[50px]  py-[50px] bg-black/20 rounded-[20px]">
              {
                (resultsComentarios[0]) ? (

                  resultsComentarios.map((comentario) => {
                    return <ComentarioItem comentario={comentario} />
                  })
                ) :
                  (
                    <div className="text-center p-[50px] bg-black/30 rounded-[25px]">
                      <p className="text-[30px] text-white">No hay Comentarios...</p>
                    </div>
                  )

              }
            </div>
          </div>
        </div>

        <div className="seguientesCap min-h-[400px] w-1/3 "></div>
      </div>
    </div>
  );
};

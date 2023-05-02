import React, { useState } from "react";
import { useAnimeSlice } from "../../hooks/useAnimeSlice";
import { useForm } from "../../hooks/useForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GenerosDropdown } from "../miniComponents/Generos";
import { useEffect } from "react";
import { AnimeCapInserts } from "./AnimeCapInserts";
import { fileupload } from "../../helpers/uploadFile";


const animeForm = {
  name: "",
  Portada: "",
  fechaEmision: new Date(),
  FechaFinalizacion: new Date(),
  Generos: [],
  sinopsis: "",
};
export const CrearAnime = () => {
  const [fechaEmision, setfechaEmision] = useState(new Date());
  const [FechaFinalizacion, setFechaFinalizacion] = useState(new Date());
  const [capitulos, setcapitulos] = useState([]);
  const { name, Portada, Generos, sinopsis, oninputChange, setKey,onResetForm } =
    useForm(animeForm);
    const { newAnime } = useAnimeSlice();

  const {
    inputValue,
    nameCapitulo,
    Capitulo,
    portadaCap,
    Duracion,
    setKey: setKeyCap,
    onResetForm:onResetFormCap
  } = useForm({
    nameCapitulo: "",
    Capitulo: 1,
    portadaCap: 0,
    Duracion:0
  });
  const keyUnique = 1

 

  const CrearAnime = async(e) => {
      e.preventDefault()
      const imgurlPortada = await fileupload(Portada)
      newAnime({name:name,Portada:imgurlPortada,fechaEmision:fechaEmision,FechaFinalizacion:FechaFinalizacion,Capitulos:capitulos,Generos:Generos,sinopsis});

      // onResetForm()
      // setPreviewImage(undefined)
      // setKey({key:"Generos",value:[]})
    
  };

  // para cargar imagenes de portada Anime
  const [selectedFile, setSelectedFIle] = useState(null);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [selectedFileCap, setSelectedFIleCap] = useState(null);
  const [previewImageCap, setPreviewImageCap] = useState(undefined);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewImage(objectUrl);
    setKey({ key: "Portada", value: selectedFile });
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!selectedFileCap) {
      setPreviewImageCap(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFileCap);
    setPreviewImageCap(objectUrl);
    setKeyCap({ key: "portadaCap", value: selectedFileCap });
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileCap]);

  const loadCap = async(e)=> {
    e.preventDefault();
    if(portadaCap) {
      const imgurl = await fileupload(portadaCap)
      setcapitulos([...capitulos,{...inputValue,portadaCap:imgurl}])
      onResetFormCap()
      setPreviewImageCap(undefined)
      setKeyCap({key:"Numero",value:Capitulo +1})


      
    } 
  }

  
  return (
    <div className="h-full w-full box-content">
        <form
        className=" w-full h-full  grid grid-cols-3 box-border p-4  "
        onSubmit={CrearAnime}
      >
        <div className="h-full flex flex-col justify-between box-border ">
          <div className=" flex flex-col items-center  ">
            <div>
              <img
                src={previewImage || undefined}
                className=" h-[300px] w-[200px] object-cover object-center border border-white"
              />
            </div>
            <label className="cursor-pointer mt-6">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 px-[40px] py-[10px] text-white rounded-[50px] my-[20px]">
                Seleccionar Portada
              </span>
              <input
                onChange={(files) => {
                  setSelectedFIle(files?.target?.files[0] || undefined);
                }}
                type="file"
                className="hidden"
                
              />
            </label>
          </div>
          

          <div className="flex flex-col w-full">
            <label htmlFor="nombre" className="text-white">
              Nombre Anime
            </label>
            <input
              autoComplete="off-autocomplete"
              type="text"
              name="name"
              id="nombre"
              placeholder="Ej:One Piece"
              value={name}
              onChange={(e)=> setKey({key:"name",value:e.target.value})}
              className="bg-transparent text-white border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="descripcion" className="text-white">
              Sinopsis
            </label>
            <textarea
              rows="4"
              cols="50"
              className="bg-transparent text-white border-b-[1px] border-amber-600 h-[100px] max-h-[100px]  outline-none"
              placeholder="Una descripcion breve del anime..."
              onChange={(e)=> setKey({key:"sinopsis",value:e.target.value})}
              ></textarea>
          </div>
          <div className="fechas flex flex-row ">
            <div className="fechaInicio">
              <label htmlFor="" className="text-white">
                Fecha Inicio
              </label>
              <DatePicker
                selected={fechaEmision}
                name="fechaEmision"
                onChange={(date) => setfechaEmision(date)}
              />
            </div>
            <div className="fechaInicio">
              <label htmlFor="" className="text-white">
                Fecha fin
              </label>
              <DatePicker
                selected={FechaFinalizacion}
                name="FechaFinalizacion"
                onChange={(date) => setFechaFinalizacion(date)}
              />
            </div>
          </div>
        </div>
        <div className="h-full  flex flex-col justify-around items-center">
          <div className="generos w-[550px] h-[200px] flex  items-center justify-around  ">
            <GenerosDropdown setKey={setKey} key={keyUnique} />
          </div>
          <div className=" w-[50%] flex flex-col justify-center mt-[50px] box-border ">
            <h1 className="text-white text-[20px] text-center">
              Agregar Capitulos
            </h1>
            <div className="text-white box-content box-border">
              <div className="flex flex-col  justify-around box-border">
                <input
                  autoComplete="off-autocomplete"
                  type="text"
                  name="nameCapitulo"
                  id="nameCapitulo"
                  placeholder="Nombre Capitulo"
                  value={nameCapitulo}
                  onChange={(e)=> setKeyCap({key:"nameCapitulo",value:e.target.value})}
                  className="bg-transparent text-white border-b-[1px] border-amber-600 h-[40px] px-[10px] w-full outline-none"
                />
                <div className="numeros box-border">
                  <div className="cap flex justify-between items-center mb-[20px] mt-[20px] box-border ">
                    <label htmlor="Capitulo">Numero</label>
                    <input
                      type="number"
                      name="Capitulo"
                      id="Capitulo"
                      placeholder="Ej:1"
                      value={Capitulo}
                      onChange={(e)=> setKeyCap({key:"Capitulo",value:e.target.value})}
                      min={0}
                      className="bg-transparent text-white border-b-[1px] border-amber-600 w-[100px]  px-[10px]  outline-none"
                    />
                  </div>

                  <div className="duracion flex justify-between items-center box-border">
                    <label htmlor="Duracion">Duracion mns</label>
                    <input
                      type="number"
                      name="Capitulo"
                      id="Duracion"
                      placeholder="Ej:23"
                      value={Duracion}
                      onChange={(e)=> setKeyCap({key:"Duracion",value:e.target.value})}
                      className="bg-transparent text-white border-b-[1px] border-amber-600 w-[100px] px-[10px]  outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-[20px] h-full justify-around box-border ">
                <div className="portadaCap w-full  text-center flex flex-col box-content">
                  <h1>Portada Capitulo</h1>
                  <div className="mb-[20px] ">
                    <img
                      src={previewImageCap || undefined}
                      className="w-full h-[150px] mt-[20px]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                  <label className="cursor-pointer  flex justify-between">
                    <span className="bg-gradient-to-r from-amber-600 to-amber-400 flex justify-center w-[50px] h-[50px]   text-white rounded-full  ">
                      <p className="text-[30px]">+</p>
                    </span>
                    <input
                      onChange={(files) => {
                        setSelectedFIleCap(files?.target.files[0]);
                      }}
                      type="file"
                      className="hidden"
                    />
                  </label>
                    <button className="bg-gradient-to-r from-amber-600 to-amber-400 text-white h-[50px]  rounded-[100px] px-2" onClick={loadCap} >Agregar Capitulo</button>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full max-h-[90vh]  p-[50px] text-white flex flex-col items-center box-border  ">
          <div className="w-full h-full flex flex-col items-center overflow-y-scroll mb-10">
          <p>Capitulos</p>
          {
            (capitulos[0])?
            capitulos.map((capitulo)=> {
              return <AnimeCapInserts key={capitulo.Capitulo} infoCap={capitulo}/>
            }):
            <div className="text-white text-[20px] p-[20px]">No hay Capitulo agregado</div>
          } 
          </div>
          <button className="bg-gradient-to-r from-amber-600 to-amber-400 text-white h-[50px]  rounded-[100px] px-2">Crear Anime</button>

        </div>
      </form>
    </div>
  );
};

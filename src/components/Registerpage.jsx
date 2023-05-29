import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useUserSlice } from "../hooks/useUserSlice";
import { useEffect } from "react";
import { fileupload } from "../helpers/uploadFile";
import { Navigate, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai"
import clsx from "clsx";

const FormularioRegister = {
  photo: "",
  portada: "",
  name: "",
  email: "",
  password: "",
};

export const Registerpage = () => {

  // formulario
  const { photo, portada, name, email, password, oninputChange, setKey } =
    useForm(FormularioRegister);


  const [selectedFile, setselectedFile] = useState(null);
  const [selectedFileImgPortada, setselectedFileImgPortada] = useState(null);
  const [previewImagePortada, setpreviewImagePortada] = useState(undefined);
  const [previewImage, setpreviewImage] = useState(undefined);
  const { RegisterUsuario } = useUserSlice();
  const imageDefect = "../../icons/Profile.jpg"
  const navigate = useNavigate()



  useEffect(() => {
    if (!selectedFile) {
      setpreviewImage(undefined)
      return
    }

    const imgUrl = URL.createObjectURL(selectedFile)
    setpreviewImage(imgUrl)
    setKey({ key: "photo", value: selectedFile });
    return () => URL.revokeObjectURL(imgUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!selectedFileImgPortada) {
      setpreviewImagePortada(undefined)
      return
    }

    const imgPortadaUrl = URL.createObjectURL(selectedFileImgPortada)
    setpreviewImagePortada(imgPortadaUrl)
    setKey({ key: "portada", value: selectedFileImgPortada });
    return () => URL.revokeObjectURL(imgPortadaUrl);
  }, [selectedFileImgPortada]);


  const onSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await fileupload(photo)
    const portadaUrl = await fileupload(portada)
    RegisterUsuario({ photo: imgUrl, portada: portadaUrl, name: name, email: email, password: password });
    navigate("/login")
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center mt-[50px]">
        <form
          className="text-white flex flex-col h-[700px] w-[600px] justify-around  bg-zinc-900 shadow-2xl shadow-amber-500/20 items-center "
          onSubmit={onSubmit}
        >
          <div className={clsx('w-full h-[200px]  bg-white bg-cover bg-no-repeat bg-center', previewImagePortada === undefined ? "bg-[url(../../icons/Portada.png)]" : `bg-[url(${previewImagePortada})]`)}>

            <div className="h-[200px] w-[100px] flex flex-col self-center absolute top-[180px] ml-[50px]  ">
              <img
                src={previewImage || imageDefect}
                className="w-full h-[100px] object-cover object-center rounded-full"
                alt=""
              />
              <label className="cursor-pointer mt-[20px] self-center  flex flex-row text-center">
                <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-white rounded-full px-[20px] py-[5px]  ">
                  <p className="self-center text-[12px]">Seleccionar Imagen</p>
                </span>
                <input type="file" className="hidden" onChange={(file) => setselectedFile(file?.target?.files[0])} />
              </label>
            </div>

            <div className="flex flex-col  absolute ml-[550px]" >
              <label className="cursor-pointer self-center  flex flex-row text-center">
                <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-white rounded-full p-[10px] ">
                  <AiFillEdit size={30} />
                </span>
                <input type="file" className="hidden" onChange={(file) => setselectedFileImgPortada(file?.target?.files[0])} />
              </label>
            </div>

          </div>
          <div className="containerInputsForms flex flex-col w-full h-[50%] justify-around px-[50px] mt-[100px]">
            <div className="contentRegister w-full">
              <label htmlFor="Nombre...">Nombre Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={oninputChange}
                value={name}
                placeholder="Nombre..."
                className="bg-transparent border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none"
              />
            </div>
            <div className="contentRegister  w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={oninputChange}
                value={email}
                placeholder="Ej:example@gmail.com"
                className="bg-transparent border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none"
              />
            </div>

            <div className="contentRegister  w-full">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={oninputChange}
                value={password}
                placeholder="Contraseña..."
                className="bg-transparent border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none"
              />
            </div>

          </div>
          <div className="button flex justify-center ">
            <button className="bg-gradient-to-r from-amber-600 to-amber-400 px-[40px] py-[10px] text-white rounded-[50px] mb-[10px]">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

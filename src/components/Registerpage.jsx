import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useUserSlice } from "../hooks/useUserSlice";
import { useEffect } from "react";
import { fileupload } from "../helpers/uploadFile";
import { useNavigate } from "react-router-dom";

const FormularioRegister = {
  photo: "",
  name: "",
  email: "",
  password: "",
};

export const Registerpage = () => {
  const { photo, name, email, password, oninputChange,setKey } =
    useForm(FormularioRegister);
  const [selectedFile, setselectedFile] = useState(null);
  const [previewImage, setpreviewImage] = useState(undefined);
  const { RegisterUsuario } = useUserSlice();

  useEffect(() => {
    if(!selectedFile) {
      setpreviewImage(undefined)
      return
    }
    console.log("coso")

    const imgUrl = URL.createObjectURL(selectedFile)
    setpreviewImage(imgUrl)
    setKey({ key: "photo", value: selectedFile });
    return () => URL.revokeObjectURL(imgUrl);
  }, [selectedFile]);


  const onSubmit = async(e) => {
    e.preventDefault();
    const imgUrl = await fileupload(photo)
    RegisterUsuario({photo:imgUrl, name: name, email: email, password: password });

  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center mt-[100px]">
        <form
          className="text-white flex flex-col h-[700px] w-[600px] px-[50px] justify-around  bg-zinc-900 shadow-2xl shadow-amber-500/20 items-center "
          onSubmit={onSubmit}
        >
          <div className="h-[200px] w-[100px] flex flex-col  ">
            <img
              src={previewImage || undefined }
              className="w-full h-[100px] object-cover object-center rounded-full"
              alt=""
            />
            <label className="cursor-pointer mt-[20px] self-center  flex flex-row text-center">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-white rounded-full px-[20px] py-[5px]  ">
                <p className="self-center">Seleccionar Imagen</p>
              </span>
              <input type="file" className="hidden" onChange={(file)=> setselectedFile(file?.target?.files[0])} />
            </label>
          </div>
          <div className="contentRegister w-full">
            <label htmlFor="Nombre...">Nombre Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={oninputChange}
              value={name}
              placeholder="name..."
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
              placeholder="password..."
              className="bg-transparent border-b-[1px] border-amber-600 h-[40px] px-[10px]  outline-none"
            />
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

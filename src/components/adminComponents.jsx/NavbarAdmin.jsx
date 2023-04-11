import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserSlice } from "../../hooks/useUserSlice";
import { useState } from "react";
import { useAnimeSlice } from "../../hooks/useAnimeSlice";

export const NavBarAdmin = () => {
  const { startLogout } = useUserSlice();
  const [valueSearch, setvalueSearch] = useState("");
  const {searchAnime} = useAnimeSlice()
  const onChangeValueSearch = (e)=> {
    setvalueSearch(e.target.value)
  }
  const {user} = useUserSlice();
  const {photo} = user;

  const navigate = useNavigate()
  
  const buscarAnime = (e)=> {
    e.preventDefault()
    navigate("/searchPage")
    searchAnime(valueSearch)
    setvalueSearch("")
  }
  
  return (
    <div className="w-full flex flex-row justify-between h-[80px] bg-[#000000]/50 text-white box-border">
      <h1 className="text-[25px] self-center">AnimeCOU</h1>
        <div className="flex flex-row w-full items-center justify-between text-[20px] 2xl:px-[450px]  xl:px-[200px]  lg:px-[100px] md:px-[50px] sm:px-[0px] ">
          <NavLink to={"/crearAnime"}>
            <p>Crear Anime</p>
          </NavLink>
          <NavLink to={"/animes"}>Animes</NavLink>
          <form className="" onSubmit={buscarAnime}>
          <input
            type="search"
            className=" w-[250px] pl-[30px] py-[10px] rounded-full bg-[#000000]/40 focus:bg-[#000000]/80 focus:outline-none  border border-[1px] border-none"
            placeholder="Buscar Anime... "
            name=""
            id=""
            value={valueSearch}
            onChange={onChangeValueSearch}
          />
          </form>
      </div>
      <div className="flex flex-row items-center px-[50px] ">
        <NavLink className={"flex flex-row items-center"} to={"/perfil"}>
            <img className="w-[50px] h-[50px] bg-white mr-[15px] object-cover object-center rounded-full" src={photo || undefined} alt="" />
          <p onClick={console.log(user)} className="mr-[30px]">Perfil</p>
        </NavLink>
        <button onClick={startLogout}>Logout</button>
      </div>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { createNewAnime, onLoadAnimes } from "../store/Slices/animeSlice/animeSlice"
import { onLogin } from "../store/Slices/userSlice/userSlice"


export const useAnimeSlice = () => {

    const dispach = useDispatch()
    const {animes,isLoading} = useSelector((state) => state.anime)
    
    const newAnime = async({name,Portada,fechaEmision,FechaFinalizacion,Capitulos,Generos,sinopsis})=> {

        try {
            //peticion post a la base de datos
            const resp = await animeApi.post("/anime/new",{name,Portada,fechaEmision,FechaFinalizacion,Capitulos,Generos,sinopsis})
        } catch (error) {
            console.log(error)
        }
    }
    const LoadAnimes = async()=> {
        // mandar a disparar onChecking
        try {
            // peticion a base de datos
            // para que no me lo devuelva como una promesa tengo que colocar el await
            const {data} = await animeApi.get("/anime/listA")
            const {animes} = data;
            
            //guardar en el sotre
            dispach(onLoadAnimes(animes))
        } catch (error) {
            
        }
    }
    return {
        LoadAnimes,
        animes,
        isLoading,
        newAnime,
        
  }
}
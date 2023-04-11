import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { createNewAnime, onFilterAnimeByCap, onFilterAnimeById, onLoadAnimes ,onClearResultsSearch, onSearchAnime} from "../store/Slices/animeSlice/animeSlice"
import { onLogin } from "../store/Slices/userSlice/userSlice"

export const useAnimeSlice = () => {

    const dispach = useDispatch()
    const {animes,isLoading,results,resultsSearch} = useSelector((state) => state.anime)
    
    const newAnime = async({name,Portada,fechaEmision,FechaFinalizacion,Capitulos,Generos,sinopsis})=> {
        console.log("aqui si entro")
        try {
            //peticion post a la base de datos
            const resp = await animeApi.post("/anime/new",{name,Portada,fechaEmision,FechaFinalizacion,Capitulos,Generos,sinopsis})
            console.log(resp)
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
    const filterAnimeById = async(uid)=> {
        
        localStorage.setItem("animeUid",uid)

        try {
            const {data} = await animeApi.get("/anime/getAnimebyId")
            dispach(onFilterAnimeById(data.anime))
            console.log(data)
        } catch (error) {
            
        }
    }

    const filterAnimeCap = (anime,search)=> {
        const filterCap = anime.Capitulos.find((cap)=> {
            return cap.Capitulo === search
        })
        if(filterCap) {
            dispach(onFilterAnimeByCap(filterCap))
        }else {
            dispach(onClearResultsSearch())
        }
    }

    const searchAnime = (valueSearch)=> {

        const animesByName = animes.filter((anime)=> {
            return anime.name.includes(valueSearch)
        })

        if(animesByName[0]) {
            dispach(onSearchAnime(animesByName))
        } else {
            dispach(onClearResultsSearch())

        }

    }
    
    return {
        LoadAnimes,
        animes,
        isLoading,
        newAnime,
        filterAnimeById,
        results,
        filterAnimeCap,
        resultsSearch,
        searchAnime
  }
}
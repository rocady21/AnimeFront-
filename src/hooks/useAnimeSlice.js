import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { createNewAnime, onFilterAnimeByCap, onFilterAnimeById, onLoadAnimes ,onClearResultsSearch, onSearchAnime, onGetCapByNumPage, onClearGetCapByNumPage, onLoadComents} from "../store/Slices/animeSlice/animeSlice"
import { onLogin } from "../store/Slices/userSlice/userSlice"

export const useAnimeSlice = () => {

    const dispach = useDispatch()
    const {animes,isLoading,results,resultsSearch,infoCapPage,resultsComentarios} = useSelector((state) => state.anime)
    
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
        try {
            const {data} = await animeApi.post("/anime/getAnimebyId",{uid})
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

     const getCapituloById = (anime,numCapitulo)=> {
        const filterCap = anime.Capitulos.find((cap)=> {
            return numCapitulo === cap.Capitulo
        })
        if(filterCap) {
            dispach(onGetCapByNumPage(filterCap))
            console.log("existe")
        }else {
            dispach(onClearGetCapByNumPage())
            console.log("no existe")
        }
    }

    const AgregarComentario = async({idAnime,id_User,NumeroCap,Comentario,photo}) => {
        
        
        const CamposaActualizar = {
            id_User:id_User,
            photo:photo,
            Comentario:Comentario,
            valoracion:5,
            Fecha:new Date()
        }

        try {

            console.log("uwu")
            console.log(CamposaActualizar)
            const {data} = await animeApi.put("/anime/updateComentario",{CamposaActualizar,idAnime,NumeroCap})
            console.log(data)

        } catch (error) {
            console.log("no se pudo agregar el comentario")
            console.log(error)
        }




    }

    const CargarComentarios = async({idAnime,NumeroCap}) => {
        try {
            
            const {data} = await animeApi.post("/anime/getComentariosbyCap",{idAnime,NumeroCap})
            if(data) {
                console.log("Hola al fin")
                console.log(data)
                dispach(onLoadComents(data.comentariosFInal))
            } else {
                throw Error("hubo un error al cargar los comentarios")
            }

        } catch (error) {
            
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
        searchAnime,
        getCapituloById,
        infoCapPage,
        AgregarComentario,
        CargarComentarios,
        resultsComentarios,
  }
}
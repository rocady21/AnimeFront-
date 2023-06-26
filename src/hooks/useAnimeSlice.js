import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { createNewAnime, onFilterAnimeByCap, onFilterAnimeById, onLoadAnimes, onClearResultsSearch, onSearchAnime, onGetCapByNumPage, onClearGetCapByNumPage, onLoadComents, onAddNewComent } from "../store/Slices/animeSlice/animeSlice"
import { onLogin } from "../store/Slices/userSlice/userSlice"

export const useAnimeSlice = () => {

    const dispach = useDispatch()
    const { animes, isLoading, results, resultsSearch, infoCapPage, resultsComentarios } = useSelector((state) => state.anime)

    const newAnime = async ({ name, Portada, fechaEmision, FechaFinalizacion, Capitulos, Generos, sinopsis, Tipo }) => {
        try {
            //peticion post a la base de datos
            const resp = await animeApi.post("/anime/new", { name, Portada, fechaEmision, FechaFinalizacion, Capitulos, Generos, sinopsis, Tipo })
        } catch (error) {
        }
    }
    const LoadAnimes = async () => {
        // mandar a disparar onChecking
        try {
            // peticion a base de datos
            // para que no me lo devuelva como una promesa tengo que colocar el await
            const { data } = await animeApi.get("/anime/listA")
            const { animes } = data;

            //guardar en el sotre
            dispach(onLoadAnimes(animes))
        } catch (error) {

        }
    }
    const filterAnimeById = async (uid) => {
        try {
            const { data } = await animeApi.post("/anime/getAnimebyId", { uid })
            dispach(onFilterAnimeById(data.anime))
        } catch (error) {

        }
    }

    const filterAnimeCap = (anime, search) => {
        const filterCap = anime.Capitulos.find((cap) => {
            return cap.Capitulo === search
        })
        if (filterCap) {
            dispach(onFilterAnimeByCap(filterCap))
        } else {
            dispach(onClearResultsSearch())
        }
    }

    const searchAnime = (valueSearch) => {

        const animesByName = animes.filter((anime) => {
            return anime.name.includes(valueSearch)
        })

        if (animesByName[0]) {
            dispach(onSearchAnime(animesByName))
        } else {
            dispach(onClearResultsSearch())

        }

    }

    const getCapituloById = (anime, numCapitulo) => {
        const filterCap = anime.Capitulos.find((cap) => {
            return numCapitulo === cap.Capitulo
        })
        if (filterCap) {
            dispach(onGetCapByNumPage(filterCap))
        } else {
            dispach(onClearGetCapByNumPage())
        }
    }

    const AgregarComentario = async ({ idAnime, id_User, NumeroCap, Comentario, photo }) => {

        const camposaActualizar = {
            id_User: id_User,
            photo: photo,
            comentario: Comentario,
            valoracion: 5,
            Fecha: new Date()
        }

        try {
            const { data } = await animeApi.put("/anime/updateComentario", { camposaActualizar, idAnime, NumeroCap })
            dispach(onAddNewComent(camposaActualizar))
        } catch (error) {

        }




    }

    const CargarComentarios = async ({ idAnime, NumeroCap }) => {
        try {

            const { data } = await animeApi.post("/anime/getComentariosbyCap", { idAnime, NumeroCap })
            if (data) {
                dispach(onLoadComents(data.comentariosFInal))
            } else {
                throw Error("hubo un error al cargar los comentarios")
            }

        } catch (error) {

        }
    }



    return {
        infoCapPage,
        resultsComentarios,
        animes,
        isLoading,
        results,
        resultsSearch,
        LoadAnimes,
        newAnime,
        filterAnimeById,
        filterAnimeCap,
        searchAnime,
        getCapituloById,
        AgregarComentario,
        CargarComentarios,
    }
}
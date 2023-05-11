import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import animeApi from "../AxiosConection/animeApi"
import { CLearMessageError, onErrorLogin, onLoadAnimesFav, onLogin, onLogout } from "../store/Slices/userSlice/userSlice"



export const useUserSlice = () => {

    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const { state, user, messageError, resultsAnimesFav } = useSelector((state) => state.user)


    const startLogin = async ({ email, password }) => {
        // mandar a disparar onChecking
        try {
            // login a bd
            // peticion a base de datos
            const { data } = await animeApi.post("/auth/login", { email, password });
            // guardar token en localStorage
            localStorage.setItem("token", data.token)
            localStorage.setItem("token-init-date", new Date().getTime())
            //guardar en el sotre
            if (data.ok === true) {
                Dispatch(onLogin({ name: data.name, id: data.uid, rol: data.rol, photo: data.photo }))
            }

        } catch (error) {
            Dispatch(onErrorLogin(error.response.data.msg))
            localStorage.clear()
        }
    }

    const RegisterUsuario = async ({ photo, name, email, password }) => {

        try {
            // peticion a bdd
            const rol = "user"
            const resp = await animeApi.post("/auth/new", { photo, name, email, password, rol });
            // guardar token en localStorage
            localStorage.setItem("token", resp.token)
            localStorage.setItem("token-init-date", new Date().getTime())
        } catch (error) {
            Dispatch(onLogout(error.response.data?.msg))
            setTimeout(() => {
                CLearMessageError()
            }, 1000);
        }
    }


    const CheckAuthToken = async () => {
        const token = localStorage.getItem("token")
        if (!token) {
            Dispatch(onLogout());
        }
        try {
            const { data } = await animeApi.get("auth/validarUserInfoByToken");
            if (data.ok) {
                Dispatch(onLogin(data?.userInfo))
            } else {
                Dispatch(onLogout());
            }
        } catch (error) {
            Dispatch(onLogout())
        }

    }


    const startLogout = () => {
        localStorage.clear()
        Dispatch(onLogout())
        navigate("/login")

    }

    const addFavoriteAnime = async ({ id_user, idAnime }) => {
        const Data = {
            id_Anime: idAnime,
            fechaAgregado: new Date(),
            comentario: ""
        }
        try {
            const { data } = await animeApi.post("/auth/addAnimeFav", { id_user, Data })
            console.log(data)

        } catch (error) {
            console.log(error)
            console.log("error al añadir el anime")
        }
        // peticion post que añada un anime favorito al usuario 
    }

    const listAnimeFavorite = async ({ id_User }) => {
        // lista de usuarios favoritos del usuario 
        try {
            const { data } = await animeApi.post("/auth/listAnimeFav", { id_User })
            if (data) {
                Dispatch(onLoadAnimesFav(data.AnimesFav))
            }

        } catch (error) {
            console.log(error)
            console.log("error al cargar los animes Favoritos")
        }
    }
    const LimpiarMessageError = () => {
        Dispatch(CLearMessageError())
    }
    return {
        user,
        startLogin,
        CheckAuthToken,
        startLogout,
        RegisterUsuario,
        messageError,
        addFavoriteAnime,
        listAnimeFavorite,
        resultsAnimesFav,
        LimpiarMessageError
    }
}

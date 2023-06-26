import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import animeApi from "../AxiosConection/animeApi"
import { CLearMessageError, onErrorLogin, onFriends, onLoadAnimesFav, onLoadInfoUserById, onLogin, onLogout } from "../store/Slices/userSlice/userSlice"



export const useUserSlice = () => {

    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const { state, user, messageError, resultsAnimesFav, peopleInfo, friends } = useSelector((state) => state.user)


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

    const RegisterUsuario = async ({ photo, portada, name, email, password }) => {

        try {
            // peticion a bdd
            const rol = "user"
            const resp = await animeApi.post("/auth/new", { photo, portada, name, email, password, rol });
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
            console.log(token)
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


    const startLogout = async (id_user) => {
        try {
            const { data } = await animeApi.post("/user/userDissconect", { id_user })
            localStorage.clear()
            Dispatch(onLogout())
            navigate("/login")


        } catch (error) {

        }
    }

    const addFavoriteAnime = async ({ id_user, idAnime }) => {
        const Data = {
            id_Anime: idAnime,
            fechaAgregado: new Date(),
            comentario: ""
        }
        try {
            const { data } = await animeApi.post("/user/addAnimeFav", { id_user, Data })

        } catch (error) {
            console.log(error)
            console.log("error al añadir el anime")
        }
        // peticion post que añada un anime favorito al usuario 
    }

    const listAnimeFavorite = async ({ id_User }) => {
        // lista de usuarios favoritos del usuario 
        try {
            const { data } = await animeApi.post("/user/listAnimeFav", { id_User })
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

    const loadUserById = async ({ id_user }) => {
        try {
            const { data } = await animeApi.post("/user/loadinfoUserById", { id_user })
            if (data.ok == true) {
                Dispatch(onLoadInfoUserById(data.user))
            } else {
            }
        } catch (error) {
            console.log(error)
        }
    }
    // funcion que se fije si dos usuarios son amigos

    const Friends = ({ id_friend }) => {
        console.log("funcion que verifica si son amigos o no")
        try {
            console.log(user.listFriends[0])
            if(!user.listFriends[0]) {
                console.log("no-friends")
                return Dispatch(onFriends("friends"))
            } else {
                user.listFriends.map((friend) => {
                    if (friend.id_User === id_friend && friend.status === "accept") {
                        console.log("friends")
                        return Dispatch(onFriends("friends"))
                    } else if (friend.id_User === id_friend && friend.status === "pending") {
                        console.log("pending")
                        return Dispatch(onFriends("pending"))
                    } else {
                        console.log("no friends")
                        return Dispatch(onFriends("no-friends"))
                    }
                })
            }

        } catch (error) {
            console.log(error)
        }
    }




    return {
        user,
        resultsAnimesFav,
        messageError,
        peopleInfo,
        friends,
        startLogin,
        CheckAuthToken,
        startLogout,
        RegisterUsuario,
        addFavoriteAnime,
        listAnimeFavorite,
        LimpiarMessageError,
        loadUserById,
        Friends
    }
}

import { useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { onCreateNewPost, onLoadPostsUser, onShowThought } from "../store/Slices/PostSlice/postSlice"



export const usePosterSlice = () => {

    const { post, isLoading, resultsPost } = useSelector((state) => state.post)
    const dispach = useDispatch()

    const LoadPostersUser = async (id_user) => {
        try {
            const { data } = await animeApi.post("/posts/filterPost", { id_user })
            if (data) {
                dispach(onLoadPostsUser(data.userPost))
                console.log(data)
            }
            console.log("no hay data")

        } catch (error) {
            console.log("error al cargar el/los posts de este usuario")
        }

    }

    const CreateNewPoster = async ({ descripcion, id_user, Tipo }) => {

        console.log(descripcion)
        const initialPost = {
            Descripcion: descripcion,
            Foto: "",
            Id_user_publicate: id_user,
            Ubicacion: "San jose de mayo",
            Tipo: Tipo,
            MeGusta: [],
            NoMeGusta: [],
            Comentarios: [],
            FechaPublicacion: new Date()
        }

        try {
            console.log("antes de que se mande el post")

            const { data } = await animeApi.post("/posts/newPost", initialPost)
            if (data.ok === true) {
                dispach(onCreateNewPost(data.post))
                console.log(data)
            }


        } catch (error) {

        }

    }
    const filterPostById = async ({ id_post }) => {

        try {
            if (id_post) {
                const { data } = await animeApi.post("/posts/filterPostById", { id_post })
                if (data.ok === true) {
                    console.log(data)
                    dispach(onShowThought(data.post))
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    const handleInteractions = async (data, key) => {
        try {
            if (key === "addLike") {
                const res = await animeApi.post("/posts/addLike", { data })
                return;

            } else if (key === "quitLike") {
                const res = await animeApi.post("/posts/quitLike", { data })
                return;

            } else if (key === "addDislike") {
                const res = await animeApi.post("/posts/addDislike", { data })
                return;
            } else if (key === "quitDislike") {
                const res = await animeApi.post("/posts/quitDisLike", { data })
                return;

            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleAddComentarios = () => {
        try {

        } catch (error) {

        }
    }

    const checkStatusLikeAndDislike = async ({ id_user, id_post }) => {

        try {
            // con esta peticion veremos el estado de los likes
            const { data } = await animeApi.post("/posts/LikeExist", { id_post, id_user })

            const { data: data2 } = await animeApi.post("/posts/LikeExist", { id_post, id_user })

            if (data && data2) {
                localStorage.setItem("statusLike", data.status)
                localStorage.setItem("statusDislike", data2.status)

            }



        } catch (error) {
            console.log(error)
        }

    }




    return {
        post,
        isLoading,
        resultsPost,
        LoadPostersUser,
        CreateNewPoster,
        filterPostById,
        handleInteractions,
        handleAddComentarios,
        checkStatusLikeAndDislike
    }
}
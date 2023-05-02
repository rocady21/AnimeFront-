import { useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { onLoadPostsUser } from "../store/Slices/PostSlice/postSlice"



export const usePosterSlice = ()=> {

    const {post,isLoading,resultsPost} = useSelector((state)=> state.post)
    const dispach = useDispatch()
    
    const LoadPostersUser = async({id_user})=> {
        try {
            const {data} = await animeApi.post("/posts/filterPost",{id_user})

            dispach(onLoadPostsUser(data.userPost))

        } catch (error) {
            console.log("error al cargar el/los posts de este usuario")
        }

    }

    const CreateNewPoster = ()=> {

    }
    


    return {
        post,
        isLoading,
        resultsPost,
        LoadPostersUser,
        CreateNewPoster

    }
}
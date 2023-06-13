import React from "react"
import { useParams } from "react-router-dom"
import { usePosterSlice } from "../hooks/usePostersSlice"
import { useEffect } from "react"
import { useUserSlice } from "../hooks/useUserSlice"
import { ThoughtCardComplete } from "./miniComponents/ThoughtCardComplete"



export const ShowThoughtPage = () => {
    const { user } = useUserSlice()
    const { idPost } = useParams()
    const { resultsPost, filterPostById } = usePosterSlice()

    useEffect(() => {
        filterPostById({ id_post: idPost })
    }, [])

    return <div className="text-white w-full h-full flex flex-row justify-center">
        {
            resultsPost && <ThoughtCardComplete postInfo={resultsPost} key={resultsPost._id} />
        }
    </div>
}
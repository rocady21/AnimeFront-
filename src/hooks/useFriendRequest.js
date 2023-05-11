import { useDispatch, useSelector } from "react-redux"
import { onLoadFriend, onLoadFriendRequest, onAcceptFriendRequest, onDeclineFriendRequest, onClearRequestFriend } from "../store/Slices/friendSlice/friendSlice"
import animeApi from "../AxiosConection/animeApi"


export const useFriendRequest = () => {

    const { friend, friendRequest, isLoading } = useSelector((state) => state.friend)
    const dispach = useDispatch()

    const AddFriend = ({ id_user, id_friend }) => {

    }

    const LoadFriends = ({ id_user }) => {

    }

    const LoadFriendsRequest = async ({ id_user }) => {

        const idUser = id_user
        try {
            if (id_user) {
                const { data } = await animeApi.post("/auth/getFriendRequest", { idUser })

                if (data) {
                    dispach(onLoadFriendRequest(data.listFriends))
                }

            }


        } catch (error) {

        }
    }

    const AcceptFriendRequest = async ({ id_me, id_friend }) => {
        try {
            if (!id_user || !id_friend) {
                console.log("Error al aceptar la solicitud");
                return;
            }
            const { data } = await animeApi.put("/auth/aceptarAmigo", { id_me, id_friend })

            if (data.ok === true) {
                dispach(onClearRequestFriend())
            }
        } catch (error) {
            console.log(error)
            console.log("Por favor hable con el administrador ")
        }
    }


    const DeclineFriendRequest = ({ id_me, id_friend }) => {

    }


    return {
        friend,
        friendRequest,
        isLoading,
        LoadFriends,
        AddFriend,
        AcceptFriendRequest,
        LoadFriendsRequest,
        DeclineFriendRequest

    }
}
import { useDispatch, useSelector } from "react-redux"
import { onLoadFriendRequest, onAcceptFriendRequest, onDeclineFriendRequest, onClearRequestFriend, onAddFriendOnline, onSearchPeople, onStateFriendRequest, onloadUserById, onAddNewFriendRequestRealTime, onLoadFriend, onRemoveFriendOnline, onLoadFriendsOnlineAndOffline, } from "../store/Slices/friendSlice/friendSlice"
import animeApi from "../AxiosConection/animeApi"


export const useFriendSlice = () => {


    const { friends, friendRequest, peoples, resultsPeople, FriendsOnlineAndOffline } = useSelector((state) => state.friend)
    const dispach = useDispatch()

    const AddFriend = async ({ id_me, id_friend }) => {
        try {
            const { data } = await animeApi.put("/user/newFriend", { id_me, id_friend })
            dispach(onStateFriendRequest("send"))
        } catch (error) {
            console.log(error)
        }
    }

    const LoadFriends = async ({ id_user }) => {
        try {
            if (id_user) {
                const { data } = await animeApi.post("/user/litFriends", { id_user })
                if (data.ok === true) {
                    dispach(onLoadFriend(data.listFriends))
                }
            }
        } catch (error) {

        }
    }

    const LoadFriendsRequest = async ({ id_user }) => {

        const idUser = id_user
        try {
            if (id_user) {
                const { data } = await animeApi.post("/user/getFriendRequest", { idUser })

                if (data) {
                    dispach(onLoadFriendRequest(data.listFriends))

                }

            }


        } catch (error) {

        }
    }

    const AcceptFriendRequest = async ({ id_me, id_friend }) => {
        try {
            if (!id_me || !id_friend) {
                return;
            }
            const { data } = await animeApi.put("/user/aceptarAmigo", { id_me, id_friend })
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


    const SearchPeople = async (valueSearch) => {
        try {
            if (valueSearch) {
                //peticion a base de datos de todos los usuarios
                const { data } = await animeApi.get("/user/listU")

                if (data.usuarios) {
                    dispach(onSearchPeople({ usuarios: data.usuarios, valueSearch: valueSearch }))
                }
            }
        } catch (error) {

        }


    }

    const loadInfoUser = async ({ id_user }) => {
        try {
            const { data } = await animeApi.post("/user/getUserById", { id_user })

            if (data.ok === true) {
                dispach(onloadUserById(data.userInfo))
            } else {
            }
        } catch (error) {
            console.log(error)
        }
    }

    const LoadFriendRequestRealTime = async (id_user) => {
        try {
            const { data } = await animeApi.post("/user/getUserById", { id_user })
            if (data) {
                const { userInfo } = data
                const friendRequestInfo = {
                    _id: userInfo._id,
                    photo: userInfo.photo,
                    name: userInfo.name
                }
                dispach(onAddNewFriendRequestRealTime(friendRequestInfo))
            }

        } catch (error) {

        }
    }

    const loadFriendsOffline = async ({ id_user }) => {

        try {
            if (id_user) {
                const { data } = await animeApi.post("/user/listFriends", { id_user })
                if (data.ok === true) {
                    dispach(onLoadFriendsOnlineAndOffline(data.listFriends))
                }
            }
        } catch (error) {

        }
    }
    const loadFriendsOnline = async (id_me) => {
        try {
            const { data } = await animeApi.post("/user/friendsOnline", { id_me })

            if (data.ok === true) {
                dispach(onLoadFriendsOnlineAndOffline(data.usersOnline))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const setFriendsOnline = (userID) => {
        try {
            if (userID) {
                return dispach(onAddFriendOnline(userID))
            }
        } catch (error) {
            console.log(error)
        }

    }

    const removeFriendOnline = (userID) => {
        if (userID) {
            dispach(onRemoveFriendOnline(userID))
        }

    }



    return {
        friends,
        friendRequest,
        peoples,
        resultsPeople,
        FriendsOnlineAndOffline,
        LoadFriends,
        AddFriend,
        AcceptFriendRequest,
        LoadFriendsRequest,
        DeclineFriendRequest,
        SearchPeople,
        loadInfoUser,
        LoadFriendRequestRealTime,
        loadFriendsOnline,
        setFriendsOnline,
        removeFriendOnline,
        loadFriendsOffline

    }
}
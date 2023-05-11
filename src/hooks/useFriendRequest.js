import { useDispatch, useSelector } from "react-redux"
import { onLoadFriend, onLoadFriendRequest, onAcceptFriendRequest, onDeclineFriendRequest, onClearRequestFriend, onSearchPeople, onStateFriendRequest, onloadUserById } from "../store/Slices/friendSlice/friendSlice"
import animeApi from "../AxiosConection/animeApi"


export const useFriendRequest = () => {

    const { friend, friendRequest, solicitudState,peoples,resultsPeople } = useSelector((state) => state.friend)
    const dispach = useDispatch()

    const AddFriend = async({ id_me, id_friend }) => {
        try {
            const {data} = await animeApi.put("/auth/newFriend",{id_me,id_friend})
            dispach(onStateFriendRequest("send"))
        } catch (error) {
            console.log(error)
        }
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
        console.log("llego:D")
        try {
            if (!id_me || !id_friend) {
                console.log("Error al aceptar la solicitud");
                return;
            }

            const { data } = await animeApi.put("/auth/aceptarAmigo", { id_me, id_friend })
            console.log("mando la peticion:D")


            if (data.ok === true) {
                console.log("llegox3:D")

                dispach(onClearRequestFriend())
            }
        } catch (error) {
            console.log(error)
            console.log("Por favor hable con el administrador ")
        }
    }


    const DeclineFriendRequest = ({ id_me, id_friend }) => {

    }


    const SearchPeople = async(valueSearch)=> {
        try {
            if(valueSearch) {
                //peticion a base de datos de todos los usuarios
                const {data} = await animeApi.get("/auth/listU")

                if(data.usuarios) {
                    dispach(onSearchPeople({usuarios:data.usuarios,valueSearch:valueSearch}))
                }
            }
        } catch (error) {
            
        }


    }

    const loadInfoUser = async({id_user})=> {
        try {
            console.log("Hola :D")
            const {data} = await animeApi.post("/auth/getUserById",{id_user})

            if(data.ok === true) {
                dispach(onloadUserById(data.userInfo[0]))
            } else {
                console.log("error")
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    return {
        friend,
        friendRequest,
        solicitudState,
        peoples,
        resultsPeople,
        LoadFriends,
        AddFriend,
        AcceptFriendRequest,
        LoadFriendsRequest,
        DeclineFriendRequest,
        SearchPeople,
        loadInfoUser

    }
}
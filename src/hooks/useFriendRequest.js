import { useDispatch, useSelector } from "react-redux"
import { onLoadFriend, onLoadFriendRequest, onAcceptFriendRequest, onDeclineFriendRequest } from "../store/Slices/friendSlice/friendSlice"


const usefriendSlice = () => {

    const { friend, friendRequest, isLoading } = useSelector((state) => state.friend)
    const dispach = useDispatch()

    const AddFriend = ({ id_user, id_friend }) => {

    }

    const LoadFriends = ({ id_user }) => {

    }

    const LoadFriendsRequest = ({ id_user }) => {

    }

    const AcceptFriendRequest = ({ id_user, id_friend }) => {
        // solicitud que acepte la solicitud 
    }


    const DeclineFriendRequest = ({ id_user, id_friend }) => {

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
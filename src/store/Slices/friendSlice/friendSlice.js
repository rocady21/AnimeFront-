import { createSlice } from '@reduxjs/toolkit'
import { useUserSlice } from '../../../hooks/useUserSlice'



export const friendSlice = createSlice({
    name: 'friendSlice',
    initialState: {
        friendRequest: [],
        peoples: [],
        friends: [],
        FriendsOnlineAndOffline: [],
        resultsPeople: {}
    },
    reducers: {
        onLoadFriend: (state, { payload }) => {
            state.friends = payload
        },
        onLoadFriendsOnlineAndOffline: (state, { payload }) => {
            state.FriendsOnlineAndOffline = payload
        },
        // añadir solo seria cambiar el estado del usuario con el id que reciba
        onAddFriendOnline: (state, { payload }) => {
            const userID = payload
            console.log(userID)
            state.FriendsOnlineAndOffline = state.FriendsOnlineAndOffline.map((friend) => {
                if (friend._id === userID) {
                    return { ...friend, status: "Online" }
                }
                return friend
            })

        },
        // remover solo seria cambiar el estado a fals del usuario con el id que reciba
        onRemoveFriendOnline: (state, { payload }) => {
            const userID = payload
            state.FriendsOnlineAndOffline = state.FriendsOnlineAndOffline.map((friend) => {
                if (friend._id === userID) {
                    return { ...friend, status: "Offline" }
                }
                return friend
            })
        },
        onLoadFriendRequest: (state, { payload }) => {
            state.friendRequest = payload
        },
        onAcceptFriendRequest: (state, { payload }) => {
            state.friendRequest = payload,
                state.friends = []
        },
        onDeclineFriendRequest: (state, { payload }) => {
            state.friendRequest = payload,
                state.friends = []
        },
        onClearRequestFriend: (state, { payload }) => {
            state.friendRequest = []

        },
        onSearchPeople: (state, { payload }) => {
            const { usuarios, valueSearch } = payload
            const valueLowerCase = valueSearch.toLowerCase()
            const filtradoUsuariosByValue = usuarios.filter((userPeople) => {
                return userPeople.name.toLowerCase().includes(valueLowerCase)
            })

            if (filtradoUsuariosByValue) {
                state.peoples = filtradoUsuariosByValue
            }
        },
        onloadUserById: (state, { payload }) => {
            state.resultsPeople = payload
        },
        onAddNewFriendRequestRealTime: (state, { payload }) => {
            state.friendRequest = [...state.friendRequest, payload]
        }


    },
})

// Action creators are generated for each case reducer function
export const { onLoadFriend, onLoadFriendRequest, onAcceptFriendRequest, onAddNewFriendRequestRealTime, onLoadFriendsOnlineAndOffline, onRemoveFriendOnline, onAddFriendOnline, onDeclineFriendRequest, onClearRequestFriend, onLoadriendsOffline, onSearchPeople, onStateFriendRequest, onloadUserById } = friendSlice.actions
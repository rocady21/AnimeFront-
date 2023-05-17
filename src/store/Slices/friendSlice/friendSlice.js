import { createSlice } from '@reduxjs/toolkit'
import { useUserSlice } from '../../../hooks/useUserSlice'



export const friendSlice = createSlice({
    name: 'friendSlice',
    initialState: {
        friendRequest: [],
        peoples: [],
        friends: [],
        solicitudState: "no-send",
        resultsPeople: {}
    },
    reducers: {
        onLoadFriend: (state, { payload }) => {
            state.friendRequest = [],
                state.friends = payload,
                state.solicitudState = false
        },
        onLoadFriendRequest: (state, { payload }) => {
            state.friendRequest = payload
        },
        onAcceptFriendRequest: (state, { payload }) => {
            state.friendRequest = payload,
                state.friends = [],
                state.solicitudState = "accept"
        },
        onDeclineFriendRequest: (state, { payload }) => {
            state.friendRequest = payload,
                state.friends = [],
                state.solicitudState = false
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
        onStateFriendRequest: (state, { payload }) => {
            state.solicitudState = payload
        },
        onloadUserById: (state, { payload }) => {
            state.resultsPeople = payload
        },
        onAddNewFriendRequestRealTime: (state, { payload }) => {
            console.log("esta es la info del usuario que se añade")
            console.log(payload)
            state.friendRequest = [...state.friendRequest, payload]
        }

    },
})

// Action creators are generated for each case reducer function
export const { onLoadFriend, onLoadFriendRequest, onAcceptFriendRequest, onAddNewFriendRequestRealTime, onDeclineFriendRequest, onClearRequestFriend, onSearchPeople, onStateFriendRequest, onloadUserById } = friendSlice.actions
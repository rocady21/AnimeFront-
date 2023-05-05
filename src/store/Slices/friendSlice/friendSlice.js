import { createSlice } from '@reduxjs/toolkit'



export const friendSlice = createSlice({
    name: 'friendSlice',
    initialState: {
        friendRequest: [],
        friends: [],
        isLoading: false,
    },
    reducers: {
        onLoadFriend: (state, { payload }) => {
            state.friendRequest = [],
                state.friends = payload,
                state.isLoading = false
        },
        onLoadFriendRequest: (state, { payload }) => {
            state.friendRequest = payload,
                state.friends = [],
                state.isLoading = false
        },
        onAcceptFriendRequest: (state, { payload }) => {
            state.friendRequest = payload,
                state.friends = [],
                state.isLoading = false
        },
        onDeclineFriendRequest: (state, { payload }) => {
            state.friendRequest = payload,
                state.friends = [],
                state.isLoading = false
        },


    },
})

// Action creators are generated for each case reducer function
export const { onLoadFriend, onLoadFriendRequest, onAcceptFriendRequest, onDeclineFriendRequest } = friendSlice.actions
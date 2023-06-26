import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    status: "not-authenticated",
    user: {},
    peopleInfo: {},
    friends: undefined,
    resultsAnimesFav: []
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.messageError = undefined
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated",
        state.user = payload;
      state.messageError = undefined
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {}
      state.messageError = payload
    },
    CLearMessageError: (state) => {
      state.errorMessage = undefined
    },
    onErrorLogin: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.messageError = payload
    },
    onLoadAnimesFav: (state, { payload }) => {
      state.resultsAnimesFav = payload
    },
    onLoadInfoUserById: (state, { payload }) => {
      state.peopleInfo = payload
    },
    onFriends: (state, { payload }) => {
      state.friends = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, CLearMessageError, onErrorLogin, onLoadAnimesFav, onLoadInfoUserById, onFriends } = userSlice.actions


import { createSlice } from '@reduxjs/toolkit'



export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    post: [],
    isLoading: false,
    resultsPost: undefined,
    resultsComentarios: undefined,
    MesaggeStatus: ""
  },
  reducers: {
    onLoadPostsUser: (state, { payload }) => {
      state.post = payload
      state.isLoading = false
      state.resultsPost = []
    },
    onCreateNewPost: (state, { payload }) => {
      state.post = [...state.post, payload]
      state.isLoading = false
      state.resultsPost = []
    },
    onChecking: (state, { payload }) => {
      state.post = [],
        state.isLoading = true,
        state.resultsPost = []
    },
    onShowThought: (state, { payload }) => {
      state.resultsPost = payload
    },
    onLoadComntsByPost: (state, { payload }) => {
      state.resultsComentarios = payload
    },
    onNoComents: (state, { payload }) => {
      state.resultsComentarios = payload
    },
    onDeletePost: (state, { payload }) => {
      state.MesaggeStatus = payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { onLoadPostsUser, onNoComents, onCreateNewPost, onShowThought, onLoadComntsByPost, onDeletePost } = postSlice.actions
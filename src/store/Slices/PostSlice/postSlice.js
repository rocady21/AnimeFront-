import { createSlice } from '@reduxjs/toolkit'



export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    post: [],
    isLoading: false,
    resultsPost: undefined
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
    }

  },
})

// Action creators are generated for each case reducer function
export const { onLoadPostsUser, onCreateNewPost, onShowThought } = postSlice.actions
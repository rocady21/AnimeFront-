import { createSlice } from '@reduxjs/toolkit'



export const postSlice = createSlice({
  name: 'postSlice',
  initialState:{
    post: [],
    isLoading: false,
    resultsPost: []
  },
  reducers: {
    onLoadPostsUser:(state,{payload})=> {
        state.post = [...state.resultsPost,payload]
        state.isLoading = false
        state.resultsPost = []
    },
    onCreateNewPost:(state,{payload})=> {
        state.post = [...state.resultsPost,payload]
        state.isLoading = false
        state.resultsPost = []
    },
    onChecking:(state,{payload})=> {
        state.post = [],
        state.isLoading = true,
        state.resultsPost = []
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {onLoadPostsUser } = postSlice.actions
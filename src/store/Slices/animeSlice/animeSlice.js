import { createSlice } from '@reduxjs/toolkit'



export const animeSlice = createSlice({
  name: 'userSlice',
  initialState:{
    animes: [],
    isLoading:false
  },
  reducers: {
    onLoadAnimes: (state,{payload})=> {
      state.animes = payload
      state.isLoading= true
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {onLoadAnimes} = animeSlice.actions


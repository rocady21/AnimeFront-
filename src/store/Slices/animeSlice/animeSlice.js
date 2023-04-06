import { createSlice } from '@reduxjs/toolkit'



export const animeSlice = createSlice({
  name: 'userSlice',
  initialState:{
    animes: [],
    isLoading:false,
    results:{}
  },
  reducers: {
    onLoadAnimes: (state,{payload})=> {
      state.animes = payload
      state.isLoading= true
    },
    createNewAnime:(state,{payload})=> {
      state.animes = [...state.animes,payload]
    },
    onFilterAnimeById:(state,{payload})=> {
      state.results = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {onLoadAnimes,createNewAnime,onFilterAnimeById} = animeSlice.actions


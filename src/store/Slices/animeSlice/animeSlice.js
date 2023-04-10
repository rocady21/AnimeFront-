import { createSlice } from '@reduxjs/toolkit'



export const animeSlice = createSlice({
  name: 'userSlice',
  initialState:{
    animes: [],
    isLoading:false,
    results:{},
    resultsSearch:{}
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
      state.results = payload;
    },
    onFilterAnimeByCap:(state,{payload})=> {
      state.resultsSearch = payload
      console.log(state.resultsSearch)
    },
    onClearResultsSearch:(state,{payload})=> {
      state.resultsSearch = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const {onLoadAnimes,createNewAnime,onFilterAnimeById,onFilterAnimeByCap,onClearResultsSearch} = animeSlice.actions


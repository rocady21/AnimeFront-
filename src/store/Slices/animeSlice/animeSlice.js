import { createSlice } from '@reduxjs/toolkit'



export const animeSlice = createSlice({
  name: 'userSlice',
  initialState: {
    animes: [],
    isLoading: false,
    results: {},
    resultsSearch: [],
    infoCapPage: [],
    resultsComentarios: []
  },
  reducers: {
    onLoadAnimes: (state, { payload }) => {
      state.animes = payload
      state.isLoading = true
    },
    createNewAnime: (state, { payload }) => {
      state.animes = [...state.animes, payload]
    },
    onFilterAnimeById: (state, { payload }) => {
      console.log(payload)
      console.log("payload")
      state.results = payload;
    },
    onFilterAnimeByCap: (state, { payload }) => {
      state.resultsSearch = payload
      console.log(state.resultsSearch)
    },
    onClearResultsSearch: (state, { payload }) => {
      state.resultsSearch = []
    },
    onSearchAnime: (state, { payload }) => {
      state.resultsSearch = payload
    },
    onGetCapByNumPage: (state, { payload }) => {
      state.infoCapPage = payload
    },
    onClearGetCapByNumPage: (state, { payload }) => {
      state.infoCapPage = []
    },
    onLoadComents: (state, { payload }) => {
      state.resultsComentarios = payload
    },
    onAddNewComent: (state, { payload }) => {
      state.resultsComentarios = [...state.resultsComentarios, payload]
    }

  },
})

// Action creators are generated for each case reducer function
export const { onLoadAnimes, createNewAnime, onAddNewComent, onFilterAnimeById, onFilterAnimeByCap, onClearResultsSearch, onSearchAnime, onGetCapByNumPage, onClearGetCapByNumPage, onLoadComents } = animeSlice.actions


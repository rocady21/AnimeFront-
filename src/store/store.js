import { configureStore } from '@reduxjs/toolkit'
import { animeSlice } from './Slices/animeSlice/animeSlice'
import { userSlice } from './Slices/userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    anime: animeSlice.reducer
  },
})

export default store
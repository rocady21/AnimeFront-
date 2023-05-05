import { configureStore } from '@reduxjs/toolkit'
import { animeSlice } from './Slices/animeSlice/animeSlice'
import { userSlice } from './Slices/userSlice/userSlice'
import { postSlice } from './Slices/PostSlice/postSlice'
import { friendSlice } from './Slices/friendSlice/friendSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    anime: animeSlice.reducer,
    post: postSlice.reducer,
    friend: friendSlice.reducer
  },
})

export default store
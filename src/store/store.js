import { configureStore } from '@reduxjs/toolkit'
import { animeSlice } from './Slices/animeSlice/animeSlice'
import { userSlice } from './Slices/userSlice/userSlice'
import { postSlice } from './Slices/PostSlice/postSlice'
import { friendSlice } from './Slices/friendSlice/friendSlice'
import { interaccionesSlice } from './Slices/InteraccionesUserSlice/InteraccionesUserSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    anime: animeSlice.reducer,
    post: postSlice.reducer,
    friend: friendSlice.reducer,
    interaccionesUser: interaccionesSlice.reducer
  },
})

export default store
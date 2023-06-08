import { createSlice } from '@reduxjs/toolkit'



export const interaccionesSlice = createSlice({
    name: 'interaccionesSlice',
    initialState: {
        status: "no-interaccion",
        MessageError: ""
    },
    reducers: {
        // Estos reducer manejaran el estado de las intercciones del usuario, en este caso Los likes, dislikes y comentarios
        onAddLike: (state, { payload }) => {

        },
        onAddDislike: (state, { payload }) => {

        },
        onquitLike: (state, { payload }) => {

        },
        onquitDislike: (state, { payload }) => {

        },
        onAddCoemnt: (state, { payload }) => {

        },
        onUpdateCoemnt: (state, { payload }) => {

        },
        onDeleteComent: (state, { payload }) => {

        }
    },
})

// Action creators are generated for each case reducer function

export const { onAddDislike, onAddLike, onquitLike, onquitDislike, onAddCoemnt, onUpdateCoemnt, onDeleteComent } = interaccionesSlice.actions

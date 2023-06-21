import { createSlice } from '@reduxjs/toolkit'



export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        chatToUser:undefined,
        chatContacts:undefined,
        statusContacts:"no-contacts",
        statusChat:"no-chat"
    },
    reducers: {
        onLoadChatContacts: (state, { payload }) => {
            state.chatToUser = undefined,
            state.chatContacts = payload,
            state.statusContacts = "contacts"
        },
        onLoadChatsToUser: (state, { payload }) => {
            state.chatToUser = payload,
            state.statusChat = "chats"
        }
    },
})


export const {onCheckingChatsContacts,onLoadChatContacts,onCheckingChatsToUser,onLoadChatsToUser  } = chatSlice.actions
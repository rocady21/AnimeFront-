import { createSlice } from '@reduxjs/toolkit'



export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        chatToUser:undefined,
        contactSelected:undefined,
        chatContacts:undefined,
        resultsSearch:undefined,
        statusContacts:"no-contacts",
        statusChat:"no-chat",
        messageError:""
    },
    reducers: {
        onLoadChatContacts: (state, { payload }) => {
            state.chatToUser = undefined,
            state.chatContacts = payload,
            state.statusContacts = "contacts"
        },
        onLoadChatsToUser: (state, { payload }) => {
            const {infoChat,infoUser} = payload
            state.contactSelected = infoUser
            state.chatToUser = infoChat,
            state.statusChat = "chats"
        },
        onUpdateChat:(state,{payload})=> {
            const messageNew = payload
            state.chatToUser.messages = [...state.chatToUser.messages,messageNew]
        },
        onSearchContactsChats:(state,{payload})=> {
            state.resultsSearch = payload
        },
        onAddMessageError:(state,{payload})=> {
            console.log("dispach del error")
            console.log(payload)
            state.messageError = payload
        }
        
    },
})


export const {onCheckingChatsContacts,onLoadChatContacts,onCheckingChatsToUser,onLoadChatsToUser,onAddMessageToChat,onUpdateChat,onSearchContactsChats,onAddMessageError  } = chatSlice.actions
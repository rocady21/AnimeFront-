import react from "react"
import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { onAddMessageError, onAddMessageToChat, onLoadChatContacts, onLoadChatsToUser, onSearchContactsChats, onUpdateChat } from "../store/Slices/chatSlice/chatSlice"


export const useChatSlice = ()=> {

    const {chatToUser,chatContacts,statusChat,statusContacts,contactSelected,resultsSearch,messageError} = useSelector((state)=> state.chats)
    const Dispach = useDispatch()
    
    const newChat = ({id_me,id_user})=> {

    }
    
    const loadContactsChats = async({id_me})=> {
        try {
            const {data} = await animeApi.post("/chat/LoadinfoContactsMessages",{id_me})
            if(data) {
                Dispach(onLoadChatContacts(data.usersinfo))
            } 
        } catch (error) {
            console.log(error)
        }
    }

    const loadChatFromUser = async({id_me,id_user,infoUser})=> {

        try {
            const {data} = await animeApi.post("/chat/loadMessageMeToUser",{id_me,id_user})

            if(data.ok === true) {
                Dispach(onLoadChatsToUser({infoChat:data.chat,infoUser:infoUser}))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const newMessageToChat = async({id_me,id_user,message})=> {
        try {
            const {data} = await animeApi.put("/chat/addMessageChat",{id_me,id_user,message})

        } catch (error) {
            console.log(error)
        }
    }

    const filterChatSearch = (chat,value)=> {
        if(chat) {
            const searchContactChats = chat.filter((contact)=> {
                return contact.name.includes(value)
            })
            if(searchContactChats[0]){
                console.log(searchContactChats)
                console.log("hay resultados")
                Dispach(onSearchContactsChats(searchContactChats))
            }else {
                console.log("no hay resultados")
                Dispach(onSearchContactsChats(undefined))
                Dispach(onAddMessageError("No hay Resultados..."))
            }

        }
    }
    const handleUpdateChat = (message) => {
        if(message) {
            Dispach(onUpdateChat(message))
        }
    }
    
    return {
        chatToUser,
        chatContacts,
        statusChat,
        statusContacts,
        contactSelected,
        resultsSearch,
        messageError,
        newChat,
        loadContactsChats,
        loadChatFromUser,
        newMessageToChat,
        filterChatSearch,
        handleUpdateChat
        

    }
}
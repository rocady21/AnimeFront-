import react from "react"
import { useDispatch, useSelector } from "react-redux"
import animeApi from "../AxiosConection/animeApi"
import { onLoadChatContacts, onLoadChatsToUser } from "../store/Slices/chatSlice/chatSlice"


export const useChatSlice = ()=> {

    const {chatToUser,chatContacts,statusChat,statusContacts} = useSelector((state)=> state.chats)
    const Dispach = useDispatch()
    
    const newChat = ({id_me,id_user})=> {

    }
    
    const loadContactsChats = async({id_me})=> {
        try {
            const {data} = await animeApi.post("/chat/LoadinfoContactsMessages",{id_me})
            if(data) {
                Dispach(onLoadChatContacts(data.usersinfo))
            } else {
                console.log("no existe data")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const loadLastMessage = async({id_me,id_user})=> {
        const {data} = await animeApi.post("/chat/lastMessageFromUser",{id_me,id_user})
        if(data) {
            const lastMessage = data.lastMessage
            return lastMessage
        }
    }   
    const loadChatFromUser = async({id_me,id_user})=> {
        console.log("aqui mandaremos a ver nuestros chats")
        try {
            const {data} = await animeApi.post("/chat/loadMessageMeToUser",{id_me,id_user})

            if(data.ok === true) {
                console.log(data)
                Dispach(onLoadChatsToUser(data.messages))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const newMessageToChat = ({id_me,id_user})=> {

    }
    
    return {
        chatToUser,
        chatContacts,
        statusChat,
        statusContacts,
        newChat,
        loadContactsChats,
        loadChatFromUser,
        newMessageToChat,
        loadLastMessage

    }
}
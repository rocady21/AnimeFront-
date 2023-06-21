import react from "react"
import { ChatsContacts } from "./components/ChatsContacts"
import { Chat } from "./components/Chat"


export const ChatPage = () => {

    return (
        <div className=" w-[60%] m-auto min-h-[800px]  flex flex-row">
            <div className="contactsChat w-1/3  ">
                <ChatsContacts/>
            </div>
            <div className="chat w-2/3">
                <Chat/>
            </div>
        </div>
    )
}
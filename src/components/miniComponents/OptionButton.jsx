import react from "react"
import { usePosterSlice } from "../../hooks/usePostersSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export const OptionButton = ({ options, idPost = undefined,id_User }) => {

    const { handleDeletePost } = usePosterSlice()
    const navigate = useNavigate()

    const handleOptions = (option) => {
        if (idPost) {
            switch (option) {
                case 'Ver':
                    // funcion o metodo que llevue a la pagina del post
                    navigate(`/post/${idPost}`)
                    break;
                case 'Editar':
                    // funcion que edite el post
                    break;
                case 'Borrar':
                    handleDeletePost({ id_post: idPost })
                    break;
                default:
            }
        } else if(id_User) {
            switch (option) {
                case 'Enviar Mensaje':
                    // funcion que llevue a la pagina de chat con esa persona
                    break;
                case 'Borrar Amigo':
                    // funcion que edite el post
                    break;
                case 'Ver Amigos':
                    // funcion que borre el post
                    break;
                default:
            }
        }
    }

    return (
        <div className="w-[120px] bg-white absolute top-[-70px] left-[90%] rounded-[10px] flex flex-col text-black text-[16px] trnsition-all">
            {
                options.map((option) => {
                    return <button key={option} className="w-full  p-[5px] hover:bg-black/10" onClick={() => handleOptions(option)}><p>{option}</p></button>
                })
            }
        </div>
    )

}



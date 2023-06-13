import react from "react"
import { usePosterSlice } from "../../hooks/usePostersSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const OptionButton = ({ options, idPost = undefined }) => {

    const { handleDeletePost } = usePosterSlice()

    const handleOptions = (option) => {
        if (idPost) {
            switch (option) {
                case 'Ver':
                    // funcion que llevue a la pagina del post
                    break;
                case 'Editar':
                    // funcion que edite el post
                    break;
                case 'Borrar':
                    // funcion que borre el post
                    handleDeletePost({ id_post: idPost })
                    break;
                default:
            }
        }
    }

    return (
        <div className="w-[120px] bg-white absolute top-[-70px] left-[15px] rounded-[20px] flex flex-col text-black text-[16px] trnsition-all">
            {
                options.map((option) => {
                    return <button key={option} className="w-full  p-[5px] hover:bg-black/10" onClick={() => handleOptions(option)}><p>{option}</p></button>
                })
            }
        </div>
    )

}



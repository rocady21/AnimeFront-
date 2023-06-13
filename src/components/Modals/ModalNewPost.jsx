import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { TiposPubliDropDown } from '../miniComponents/TipoPostDropDown';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { OnlinePredictionOutlined, Upload } from '@mui/icons-material';
import { fileupload } from '../../helpers/uploadFile';
import { userSlice } from '../../store/Slices/userSlice/userSlice';
import { useUserSlice } from '../../hooks/useUserSlice';
import { usePosterSlice } from '../../hooks/usePostersSlice';

const postEstructure = {
    descripcion: "",
    foto: "",
    id_user_publicate: "",
    Ubicacion: "San jose de Mayo, Uruguay",
    Tipo: "",
    MeGusta: 0,
    Comentarios: [
        {
            id_user: "",
            photo: "",
            comentario: "",
            valoracion: 0,
            Fecha: ""
        }
    ],
    FechaPublicacion: new Date()



}

export const ModalNewPost = ({ close }) => {

    const {
        descripcion,
        foto,
        id_user_publicate,
        Ubicacion,
        Tipo,
        MeGusta,
        Comentarios,
        FechaPublicacion,
        setKey,
        inputValue: PostForm,
        oninputChange
    } = useForm(postEstructure)

    const [state, setstate] = useState(1);
    const [selectedImage, setSelectedImage] = useState(undefined);
    const [previewImage, setPreviewImage] = useState(undefined);
    const [stateImage, setStateImage] = useState("noLoad")
    const { user } = useUserSlice()
    const { CreateNewPoster } = usePosterSlice()

    useEffect(() => {
        setKey({ key: "id_user_publicate", value: user._id })

    }, [])


    useEffect(() => {
        if (!selectedImage) {
            setPreviewImage(undefined)
            return
        }
        setStateImage("load")
        const imgURL = URL.createObjectURL(selectedImage)
        setPreviewImage(imgURL)
        setKey({ key: "foto", value: selectedImage })
        return () => URL.revokeObjectURL(imgURL);

    }, [selectedImage])

    const CerrarModal = () => {
        close(false)
    }

    const Siguiente = () => {
        if (Tipo.length > 0) {
            setstate(2)
        }
    }
    const CrearPublicacion = async (e) => {
        e.preventDefault()
        // convertir imagen en url para que sea mas liviana
        const fotoUrl = await fileupload(selectedImage)
        // disparar accion que cree el post 
        CreateNewPoster({ descripcion: descripcion, foto: fotoUrl, id_user_publicate: id_user_publicate, Ubicacion: Ubicacion, Tipo: Tipo, MeGusta: MeGusta, Comentarios: Comentarios, FechaPublicacion: FechaPublicacion })
        setTimeout(() => {
            CerrarModal()
        }, 500);
    }

    return (
        <div className='absolute top-[60px] left-[50%] w-[700px] h-[700px] translate-x-[-350px] bg-white translate-left-[50%] bg-zinc-950 flex flex-col	'>
            <div className='header flex flex-row justify-between'>
                <CloseIcon onClick={CerrarModal} sx={{ fontSize: 30 }} className='cursor-pointer m-[10px]' />
                <button className='text-[20px] text-amber-500 m-[10px]' onClick={Siguiente}>Siguiente</button>
            </div>
            {
                (state === 1) ? (
                    <div className="modalBody self-center mt-[200px]  ">
                        <div className="TipoPublicacion flex flex-col justify-center">
                            <p>Que Tipo de Publicacion Desea?</p>
                            <TiposPubliDropDown setKey={setKey} />
                        </div>
                    </div>
                ) : (state === 2) ? (
                    <div className='w-full h-full'>
                        <form action="" className='px-[30px] py-[30px] w-full h-full' onSubmit={CrearPublicacion}>
                            <div className='flex flex-col w-full h-full justify-between items-center'>
                                <div className='w-[90%] h-[300px] bg-black/30 cursor-pointer flex flex-row justify-center items-center'>
                                    {
                                        stateImage === "load" ?
                                            (<img src={previewImage} className='h-full w-full object-cover object-center' alt="" />) :
                                            (
                                                <span className=''>
                                                    <label className="cursor-pointer self-center ">
                                                        <img src="/icons/icons8-add-image-96.png" className='self-center' alt="" />
                                                        <input type="file" className="hidden" onChange={(file) => setSelectedImage(file?.target?.files[0])} />
                                                    </label>
                                                </span>
                                            )


                                    }
                                </div>

                                <div className='flex flex-col w-full'>
                                    <textarea className=' bg-black/20 border-none outline-none px-[20px] py-[10px] min-h-[100px] max-h-[150px]' value={descripcion} onChange={oninputChange} name='descripcion' placeholder='Añade una descripcion' rows="5" cols=""></textarea>
                                </div>

                                <button className="bg-gradient-to-r from-amber-600 to-amber-400 px-[40px] py-[10px] text-white rounded-[50px] mb-[10px]">
                                    Publicar
                                </button>
                            </div>
                        </form>
                    </div>
                ) : <div>
                    Hola
                </div>
            }


        </div>
    )
}

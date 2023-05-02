import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { TiposPubliDropDown } from '../miniComponents/TipoPostDropDown';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { useState } from 'react';

const postEstructure = {
    descripcion:"",
    foto:"",
    id_user_publicate:"",
    Ubicacion:"",
    Tipo:"",
    MeGusta:0,
    Comentarios:[
        {
            id_user:"",
            photo:"",
            comentario:"",
            valoracion:0,
            Fecha:""
        }
    ],
    FechaPublicacion:""



}

export const ModalNewPost = ({close}) => {

    const {
        descripcion,
        foto,
        id_user_publicate,
        Ubicacion,
        Tipo,
        MeGusta,
        Comentarios,
        FechaPublicacion,
        setKey
    } = useForm(postEstructure)

    const [state, setstate] = useState(1);

    useEffect(() => {
        console.log(Tipo)
    }, [Tipo]);
    
    const CerrarModal = ()=> {
        close(false)
    }

    const Siguiente = ()=> {
        if(Tipo.length > 0) {
            setstate(2)
        }
    }
    return (
    <div className='absolute top-[60px] left-[50%] w-[700px] h-[700px] translate-x-[-350px] bg-white translate-left-[50%] bg-zinc-950 flex flex-col	'>
        <div className='header flex flex-row justify-between'>
        <CloseIcon onClick={CerrarModal} sx={{fontSize:30}}  className='cursor-pointer m-[10px]'/>
        <button className='text-[20px] text-amber-500 m-[10px]' onClick={Siguiente}>Siguiente</button>
        </div>
        {
            (state === 1)? (
                <div className="modalBody self-center mt-[200px]  ">
                    <div className="TipoPublicacion flex flex-col justify-center">
                            <p>Que Tipo de Publicacion Desea?</p>
                        <TiposPubliDropDown setKey={setKey}/>
                    </div>
                </div>
            ): (state===2)? (
                <div>
                    <form action="" className='px-[30px] py-[30px]'>
                        <div className='flex flex-col justify-between'>
                        <div className='w-full h-[300px] bg-black/30 cursor-pointer'></div>

                        <div className='flex flex-col'>
                        <p className='text-center mb-[20px]'>Añada una Descripcion</p>
                        <textarea className=' bg-black ' rows="5" cols=""></textarea>
                        </div>
                        </div>
                    </form>
                </div> 
            ): <div>
                Hola
            </div>
        }


    </div>
  )
}

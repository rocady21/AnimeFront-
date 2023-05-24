import { useEffect, useState } from 'react';
import 'react-dropdown/style.css';



const tipoAnimes = ["Anime", "Pelicula", "OVA"]

export const TipoAnimeDropDown = ({ setKey }) => {

    const [state, setstate] = useState(false);
    const [tipoAnimeSelected, settipoAnimeSelected] = useState("");


    const onchangeState = () => {
        setstate(!state)
    }
    const guardarValoresSeleccionados = (tipoA) => {
        settipoAnimeSelected(tipoA)
        setstate(!state)
    }
    useEffect(() => {
        setKey({ key: "Tipo", value: tipoAnimeSelected })
        console.log(tipoAnimeSelected)
    }, [tipoAnimeSelected]);

    return (
        <div className='w-full flex justify-center flex-col items-center max-w-[400px] mb-[40px]  '>
            <div className='relative inline-block w-[120px]'>
                <div>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={onchangeState}
                    >
                        {
                            tipoAnimeSelected ? <p>{tipoAnimeSelected}</p> : <p>Tipo</p>
                        }
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {
                    state === true && (
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                                {tipoAnimes ? (
                                    tipoAnimes?.map((tipoA) => {
                                        return (
                                            <a onClick={() => guardarValoresSeleccionados(tipoA)}
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-0"
                                                key={tipoA}
                                            >
                                                <div className='flex flex-row '>
                                                    <p className='' >{tipoA}</p>
                                                </div>
                                            </a>
                                        );
                                    })
                                ) : (
                                    <a
                                        href="#"
                                        className="text-gray-700 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="menu-item-0"
                                        value="ciudad"
                                    >
                                        <p>Select Tipo</p>
                                    </a>
                                )}
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
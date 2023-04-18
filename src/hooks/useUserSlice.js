import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import animeApi from "../AxiosConection/animeApi"
import { CLearMessageError, onLogin, onLogout } from "../store/Slices/userSlice/userSlice"



export const useUserSlice = () => {

    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const {state,user,messageError} = useSelector((state) => state.user)

    
    const startLogin = async({email,password})=> {
        // mandar a disparar onChecking
        try {
            // login a bd
            // peticion a base de datos
            const {data} = await animeApi.post("/auth/login",{email,password});
            // guardar token en localStorage
            localStorage.setItem("token",data.token)
            localStorage.setItem("token-init-date",new Date().getTime())
            console.log(data)
            //guardar en el sotre
            Dispatch(onLogin({name:data.name,id:data.uid,rol:data.rol,photo:data.photo}))

        } catch (error) {
            console.log(error.response.data)
            localStorage.clear()
        }
    }

    const RegisterUsuario = async({photo,name,email,password})=> {

        try {
            // peticion a bdd
            const rol = "user"
            const resp = await animeApi.post("/auth/new",{photo,name,email,password,rol});
            // guardar token en localStorage
            localStorage.setItem("token",resp.token)
            localStorage.setItem("token-init-date",new Date().getTime())
            Dispatch(onLogin({name:resp.name,uid:resp.uid,rol:resp.rol,photo:resp.photo}))
        } catch (error) {
            Dispatch(onLogout(error.response.data?.msg))
            setTimeout(() => {
                CLearMessageError()
            }, 1000);
        }
    }

    
    const CheckAuthToken = async ()=> {
        const token = localStorage.getItem("token")
        if(!token) {
            Dispatch(onLogout());
        }
        try {            
            const {data} = await animeApi.get("auth/validarUserInfoByToken");
            if (data.ok) {
                console.log(data.doc)
                Dispatch(onLogin(data?.userInfo))
            } else {
                Dispatch(onLogout());
            }
        } catch (error) {
            Dispatch(onLogout())
        }

    }


    const startLogout = ()=> {
        localStorage.clear()
        Dispatch(onLogout())
        navigate("/login")

    } 
    return {
        user,
        startLogin,
        CheckAuthToken,
        startLogout,
        RegisterUsuario
  }
}

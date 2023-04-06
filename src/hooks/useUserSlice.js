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
            console.log("2")
            // login a bd
            // peticion a base de datos
            const {data} = await animeApi.post("/auth/login",{email,password});
            // guardar token en localStorage
            localStorage.setItem("token",data.token)
            localStorage.setItem("token-init-date",new Date().getTime())
            
            //guardar en el sotre
            Dispatch(onLogin({name:data.name,id:data.uid,rol:data.rol}))

        } catch (error) {
            console.log(error.response.data)
            localStorage.clear()
        }
    }

    const RegisterUsuario = async({name,email,password})=> {

        try {
            // peticion a bdd
            const rol = "user"
            const resp = await animeApi.post("/auth/new",{name,email,password,rol});
            // guardar token en localStorage
            localStorage.setItem("token",resp.token)
            localStorage.setItem("token-init-date",new Date().getTime())

            Dispatch(onLogin({name:resp.name,uid:resp.uid,rol:resp.rol}))

        } catch (error) {
            Dispatch(onLogout(error.response.data?.msg))
            console.log(error)
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
                console.log("si")
                Dispatch(onLogin(data?.userInfo))
            } else {
                console.log("n")
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

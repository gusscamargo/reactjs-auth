import { Button } from "antd"
import { Children } from "react"
import { useAuth } from "../../context/AuthProvider/useAuth"
import {useNavigate} from "react-router-dom"

export const ProtectedLayout = ({ children }: { children: JSX.Element}) => {
    const auth = useAuth()
    const navegate = useNavigate()

    if(!auth.email){
        const clickEvent = () => {
            navegate("/login")
        }

        return  (
            <>
                <h1>Sem acesso</h1>
                <Button type="primary" onClick={clickEvent}>
                    Volte a pagina de login
                </Button>
            </>
        )
    }

    return children
}
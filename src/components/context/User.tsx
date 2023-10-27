import { useContext } from "react"
import { UserContext } from "./UserContext"

//type assertion

// use context future value
export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
            userContext.setUser({
                name: 'Chandramukhi',
                email: 'chandramukhi@gmail.com'
            })
        
    }
    const handleLogout = () => {
            userContext.setUser(null)
        

    }
    return (
        <div>
            <button onClick={handleLogin}></button>
            <button onClick={handleLogout}></button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email }</div>
        </div>
    )
}
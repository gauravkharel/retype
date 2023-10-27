import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean
    //use ComponentType to pass in component props
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
    if(isLoggedIn){
        return <Component name='Gaurav' />
    } else{
        return <Login />
    }
}
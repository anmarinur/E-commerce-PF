import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return(
        <button class="btn btn-primary col-2 mx-0 border-0" style={{"background-color": "#a52323"}} onClick={()=> loginWithRedirect() }>Login</button>
    )
}
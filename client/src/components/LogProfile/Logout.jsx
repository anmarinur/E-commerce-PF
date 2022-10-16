import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return(
        <button class="dropdown-item btn btn-primary col-2 mx-0 border-0" style={{"background-color": "#a52323"}} onClick={() => logout({returnTo: window.location.origin}) }>Logout</button>
    )
}
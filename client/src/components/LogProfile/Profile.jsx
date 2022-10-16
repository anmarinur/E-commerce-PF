import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";


export const Profile = () => {
    const { user, isLoading } = useAuth0();

    if(isLoading){
        return(
            <p>Cargando...</p>
        )
    }
    return(
        <div class="dropdown col-2 text-center">
            <button class="btn btn-primary col-2 mx-0 border-0 dropdown-toggle" style={{"background-color": "#a52323"}}  type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Perfil
            </button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <img class="dropdown-item" src={user.picture} alt={user.name}/>
                <h2 class="dropdown-item" >{user.name}</h2>
                <p class="dropdown-item" >{user.email}</p>
                <LogoutButton/>
            </div>
        </div>
    )
}
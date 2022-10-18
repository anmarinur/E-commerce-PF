import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";


export const Profile = () => {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div className="dropdown col-2 text-center">
            <button className="btn btn-primary col-2 m-0 p-0 border-0 dropdown-toggle d-block" style={{ backgroundColor: "#a52323" }} type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mx-2 fw-semibold"> {user.name}</span>
                <img className="rounded-pill m-0 " width="32" height="32" src={user.picture} alt={user.name} />
            </button>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        
                <p className="p-2 m-0 fw-semibold" >{user.email}</p>
                <a className="btn btn-sm btn-secondary w-75 text-center ms-2 mb-2 " href={window.location.origin + "/create"}> <i className="fa-solid fa-circle-plus"></i>  Create product </a>
                <LogoutButton />
            </div>
        </div>
    )
}
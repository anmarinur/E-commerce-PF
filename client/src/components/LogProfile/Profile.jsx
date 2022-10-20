import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";
import { Link } from 'react-router-dom'


export const Profile = () => {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div className="dropdown">
            <button className="btn btn-sm  btn btn-outline-light px-2 py-0 mx-0 dropdown-toggle" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mx-2 fw-semibold"> {user.name}</span>
                <i className="fa-solid fa-user"></i>
            </button>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <p className="p-2 m-0 fw-semibold" >{user.email}</p> */}
                <Link to={'/Dashboard'} className=' dropdown-item'><i className="fa-solid fa-table-columns"></i> Dashboard </Link>
                <Link className="dropdown-item" to={'/create'}> <i className="fa-solid fa-circle-plus"></i>  Create product </Link>
                <LogoutButton />
            </div>



            {/* <div class="dropdown">
                    <button class="btn btn-sm py-0 btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div> */}
        </div>


    )
}
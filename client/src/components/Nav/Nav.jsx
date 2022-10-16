import React from "react";
import { LoginButton } from "../LogProfile/Login";
import favoriteIcon from "./images/favorite.png"
import orderIcon from "./images/orderIcon.png"
import logo from "./images/Logo.png"
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../LogProfile/Profile";

export default function Nav(){
    const { isAuthenticated } = useAuth0();

    return(
        <nav class="navbar d-inline">
                <div class="row mx-0 py-2 d-flex justify-content-between align-items-center" style={{"background-color": "#a52323"}}>
                    <div class="col-2 text-center text-white">+57 3184612011</div>
                    <a class="col-2 text-center text-white" href="http://localhost:3000/home">www.tecnoshop.com.ar</a>
                        {isAuthenticated ? <Profile/> : <LoginButton/> }
                </div>
                <div class="row mx-0 py-0 justify-content-center" style={{"background-color": "#4b1b1b"}}>   
                    <a class="navbar-brand col-3 text-white" href="http://localhost:3000/home">
                    <img src={logo} alt="logo" class="w-25"></img>
                    TECNOSHOP
                    </a>
                    <form class="d-flex col-4 my-5" role="search">
                        <input class="form-control me-0 rounded-end rounded-pill" style={{"background-color": "#d9d9d9"}} type="search" placeholder="Buscar" aria-label="Search"/>
                        <button class="btn btn-outline-success text-white rounded-start rounded-pill border-0 px-5" style={{"background-color": "#ff3030"}} type="submit">Buscar</button>
                    </form>
                    <div class="d-flex col-4 align-items-center text-center">                    
                        <div class="text-white mx-5 col">
                            <img src={favoriteIcon} alt="favoriteIcon" class="w-25 col"></img>
                            <p class="col">Favoritos</p>
                        </div>
                        <div class="text-white mx-5 col">
                        <img src={orderIcon} alt="orderIcon" class="w-25 col"/>
                        <p class="col">Carrito</p>
                        </div>
                    </div>
                </div>
        </nav>
    )
}
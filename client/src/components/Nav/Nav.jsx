import React from "react";
import { LoginButton } from "../LogProfile/Login";
import favoriteIcon from "./images/favorite.png"
import orderIcon from "./images/orderIcon.png"
import logo from "./images/Logo.png"
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../LogProfile/Profile";
import { Link } from 'react-router-dom';



export default function Nav() {

    const { isAuthenticated } = useAuth0();

    return (

        <>
            <nav className="navbar bg-dark m-0 p-0">
                {
                    /* Componente Anterior 
                <div className="row mx-0 py-2 d-flex justify-content-between align-items-center " style={{ backgroundColor: "#a52323" }}>
                    <div className="col-2 text-center text-white fw-semibold">+57 3184612011</div>
                    <Link className="col-2 text-center text-white fw-semibold" to="/">www.tecnoshop.com.ar</Link>
                    {isAuthenticated ? <Profile /> : <LoginButton />}
                </div>
                <div className="row mx-0 py-0 align-items-center justify-content-center" style={{ backgroundColor: "#4b1b1b" }}>
                    <Link className="navbar-brand col-3 text-white fw-semibold" to="/">
                        <img src={logo} alt="logo" className="w-25"></img>
                        TECNOSHOP
                    </Link>
                    
                    <div className="d-flex col-4 align-items-center text-center">
                        <div className="text-white mx-5 col">
                            
                            <p className="col">Favs</p>
                        </div>
                        <div className="text-white mx-5 col">
                            <img src={orderIcon} alt="orderIcon" className="w-25 col" />
                            <p className="col">Cart</p>
                            </div>
                    </div>
                </div> 
                */
                }
                <div className="container w-100">
                    <nav className="nav">
                        <span className="nav-link text-danger" aria-current="page" href="#"><i className="fa-solid fa-phone"></i> 55-55555</span>
                        <Link className="nav-link text-danger" to="/" >www.tecnoshop.com.ar</Link>

                    </nav>
                    {isAuthenticated ? <Profile /> : <LoginButton />}
                </div>
            </nav>
            <nav className="navbar bg-danger m-0 px-6 py-2 shadow-sm border-dark ">
                <div className="container">
                    <Link to="/" className="text-white text-decoration-none " >
                        <img src={logo} alt="logo" style={{ maxWidth: '5em' }}></img>
                        <span className="fw-semibold lh-lg fs-3 text-white "> TECNOSHOP </span>
                    </Link>
                    <div className="d-flex" role="search">
                        <Link  to="/" className="text-white text-decoration-none bg-danger position-relative my-2 mx-5 p-1 ">
                            <i className="fa-solid fa-heart fa-2x "></i>
                            <p className="fw-normal fs-6 lh-1 ">Favs</p>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                99+                         
                            </span>
                        </Link>
                        <Link  to="/" className="text-white text-decoration-none bg-danger position-relative my-2 mx-5 p-1  ">
                            <i className="fa-solid fa-cart-shopping  fa-2x"></i>
                            <p className="fw-normal fs-6 lh-1 ">Cart</p>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                99+
                            </span>
                        </Link>
                    </div>
                </div>
            </nav >

        </>
    )
}
import React,{ useEffect, useState } from "react";
import { LoginButton } from "../LogProfile/Login";
import logo from "./images/Logo.png"
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../LogProfile/Profile";
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../utils/localStore';


export default function Nav() {
    const { isAuthenticated } = useAuth0();
    const [cart] = useLocalStorage('cart', '')
    const [ countCart, setCountCart ] = useState(0);
    useEffect(() => {
        let count = cart.length;
        setCountCart(count)
    },[cart, countCart])

    return (
        <>
            <nav className="navbar bg-dark m-0 p-0">
                <div className="container w-100">
                    <nav className="nav">
                        <span className="nav-link text-white" aria-current="page" href="#"><i className="fa-solid fa-phone me-2"></i> 55-55555</span>
                        <Link className="nav-link text-white" to="/" ><i className="fa-solid fa-globe me-2"></i>www.tecnoshop.com.ar</Link>

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
                        <Link  to="/cart" className="text-white text-decoration-none bg-danger position-relative my-2 mx-5 p-1  ">
                            <i className="fa-solid fa-cart-shopping  fa-2x"></i>
                            <p className="fw-normal fs-6 lh-1 ">Cart</p>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                { countCart !==0 ? countCart : 0 }
                            </span>
                        </Link>
                    </div>
                </div>
            </nav >

        </>
    )
}
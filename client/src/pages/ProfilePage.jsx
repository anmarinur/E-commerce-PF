import React , { useState , useEffect } from 'react'
import Footer from '../components/Footer/Footer.jsx';
import Nav from '../components/Nav/Nav.jsx';
import isClient from "../utils/isClient";
import { useAuth0 } from "@auth0/auth0-react";
import FormOrder from '../components/Order/FormOrder.jsx';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import OrderContainer from '../components/Dashboard/Orders/OrderContainer.jsx';
import { useHistory } from "react-router-dom";

export default function ProfilePage() {

    const [ client, setClient] = useState(true);
    const { user, isAuthenticated } = useAuth0();
    const history = useHistory()
    useEffect( ()=>{
        isClient(user)
        .then((data)=>setClient(data))
        .catch((error)=>setClient(error));
        axios.get('http://localhost:3001/user/')
    }, []);

    return (
        <>
            <Nav />
            <div className="container mt-2 border border-secondary rounded">
                <div className="row my-3 ">
                    <div className="col-3 border-secondary border-end ">
                        <div className=" text-center">
                            
                            <img src={user.picture ? user.picture : 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'} style={ { width : '6em'}} class="text-center rounded-circle" alt="Avatar" />
                            <p className='m-0 p-0 fw-bold'>{user && user.name}</p>
                            <span className='m-0 p-0 fw-bold fs-15'>{user && user.email}</span>

                        </div>
                        <div className=" p-2 mt-3">
                            <div class="row">
                                <Link to={'/profile/myInformation'} ><span class="btn btn-sm btn-secondary" aria-current="true">My Infomation</span></Link>
                                <Link to={'/profile/myOrders'} ><span class="btn btn-sm btn-secondary mt-2">My Orders</span></Link>
                                <Link to={'/profile/myFavorites'} ><span class="btn btn-sm btn-secondary mt-2">My Favorites</span></Link>
                            </div>

                        </div>
                    </div>

                    <div className='col-9'>
                        <Route path={'/profile/myInformation'}>
                            <FormOrder user={ user} />
                        </Route>
                        <Route path={'/profile/myOrders'}>
                            <OrderContainer />
                        </Route>
                        <Route path={'/profile/myFavorites'}>
                            <></>
                        </Route>
                        
                       

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}
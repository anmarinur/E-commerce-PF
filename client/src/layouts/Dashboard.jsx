import React from 'react'
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import './dashboard.css';
import { Route, Switch } from 'react-router-dom';
import ProductsTable from '../components/Dashboard/Products/ProductsTable';
import OrderContainer from '../components/Dashboard/Orders/OrderContainer';
const Dashboard = () => {



    return (

        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Switch>
                            <Route path="/Dashboard/Products">
                                <ProductsTable />
                            </Route>

                            <Route path="/Dashboard/Orders">
                                <OrderContainer />
                            </Route>

                        </Switch>


                    </main>
                </div>
            </div>
        </>
    )
}


export default Dashboard;
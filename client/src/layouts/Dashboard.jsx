import React from 'react'
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import './dashboard.css';
import { Route, Switch } from 'react-router-dom';
import ProductsTable from '../components/Dashboard/Products/ProductsTable';
import AdminOrderContainer from '../components/Dashboard/AdminOrders/AdminOrderContainer';
import FormCreate from '../components/Dashboard/Products/FormCreate';
import Update from '../components/Dashboard/Products/Update';
import UsersList from '../components/Dashboard/UsersList/UsersList'
import DoughnutChart from '../components/Dashboard/Charts/DoughnutChart';
import Categories from '../components/Dashboard/Categories/Categories';
import FormCategory from '../components/Dashboard/Categories/FormCategory';
import PolarAreaChart from '../components/Dashboard/Charts/PolarAreaChart';
import ImageProduct from '../components/Dashboard/Products/ImageProduct';

import Offers from '../components/Dashboard/Offers/offers';
import FormOffers from '../components/Dashboard/Offers/FormOffers';
import UpdateOffers from '../components/Dashboard/Offers/UpdateOffers';

import Transition from '../components/Transition/Transition';
import TransitionY from '../components/Transition/TransitionY';


const Dashboard = () => {

    return (
        <>
            <Navbar />
                
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Switch>
                            <Route exact path="/Dashboard">
                                <div  className='d-flex justify-content-center align-items-center'>
                                    <DoughnutChart />
                                    <PolarAreaChart />
                                </div>
                            </Route>
                            <Route exact path="/Dashboard/Products">
                            <TransitionY>
                                <ProductsTable />
                            </TransitionY>
                            </Route>

                            <Route exact strict path="/Dashboard/Products/Create">
                            <Transition>
                                <FormCreate />
                            </Transition>
                            </Route>

                            <Route exact strict path="/Dashboard/Products/Image">
                            <Transition>
                                <ImageProduct />
                            </Transition>
                            </Route>

                            <Route exact strict path="/Dashboard/Products/Update">
                            <Transition>
                                <Update />
                            </Transition>
                            </Route>

                            <Route path="/Dashboard/Orders">
                            <TransitionY>
                                <AdminOrderContainer />
                            </TransitionY>
                            </Route>

                            <Route path="/Dashboard/Users">
                            <Transition>
                                <UsersList />
                            </Transition>
                            </Route>
                            <Route exact path="/Dashboard/Categories">
                            <Transition>
                                <Categories />
                            </Transition>
                            </Route>
                            <Route exact path="/Dashboard/Categories/Create">
                            <TransitionY>
                                <FormCategory />
                            </TransitionY>
                            </Route>
                            <Route exact path="/Dashboard/Categories/Update/:id/:categorySelected">
                            <TransitionY>
                                <FormCategory />
                            </TransitionY>
                            </Route>
                            <Route exact path="/Dashboard/Offers">
                              <Transition>
                              <Offers />
                              </Transition>
                            </Route>
                            <Route exact path="/Dashboard/Offers/create">
                              <TransitionY>
                              <FormOffers />
                              </TransitionY>
                            </Route>
                            <Route exact path="/Dashboard/Offers/update/:id">
                              <TransitionY>
                              <UpdateOffers />
                              </TransitionY>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </div>
        </>
    )

}


export default Dashboard;
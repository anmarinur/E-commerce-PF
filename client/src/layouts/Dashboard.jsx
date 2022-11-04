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
                  <div className="d-flex justify-content-center align-items-center">
                    <DoughnutChart />
                    <PolarAreaChart />
                  </div>
                </Route>
                <Route exact path="/Dashboard/Products">
                  <ProductsTable />
                </Route>

                <Route exact strict path="/Dashboard/Products/Create">
                  <FormCreate />
                </Route>

                <Route exact strict path="/Dashboard/Products/Image">
                  <ImageProduct />
                </Route>

                <Route exact strict path="/Dashboard/Products/Update">
                  <Update />
                </Route>

                <Route path="/Dashboard/Orders">
                  <AdminOrderContainer />
                </Route>

                <Route path="/Dashboard/Users">
                  <UsersList />
                </Route>
                <Route exact path="/Dashboard/Categories">
                  <Categories />
                </Route>
                <Route exact path="/Dashboard/Categories/Create">
                  <FormCategory />
                </Route>
                <Route
                  exact
                  path="/Dashboard/Categories/Update/:id/:categorySelected"
                >
                  <FormCategory />
                </Route>
                <Route exact path="/Dashboard/Offers">
                  <Offers />
                </Route>
                <Route exact path="/Dashboard/Offers/create">
                  <FormOffers />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </>
    );
}


export default Dashboard;
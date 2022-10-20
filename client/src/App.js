import { Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import FormCreate from './pages/FormCreate';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import About from './pages/About'
import * as bootstrap from 'bootstrap'; // do not delete this line - is for the navBar !!
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useSelector } from "react-redux";
import Alert from './components/Alert';
import Dashboard from './layouts/Dashboard';
import ProfilePage from './pages/ProfilePage';

export default function App() {

  const alertData =useSelector((state) => state.AlertInfo)
  return (
    <div className="App">      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <FormCreate />
        </Route>
        <Route exact path="/product/:id" component={ProductDetail}></Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route>
          <PageNotFound />         
        </Route>
      </Switch> 
      <Alert   data={alertData} />
     
    </div>
  );
};
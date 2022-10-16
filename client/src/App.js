import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import PageNotFound from './pages/PageNotFound';
import FormCreate from './pages/FormCreate';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import * as bootstrap from 'bootstrap'; // do not delete this line - is for the navBar !!
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="App">      
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/create">
          <FormCreate />
        </Route>
        <Route exact path="/product/:id" component={ProductDetail}></Route>
        <Route>
          <PageNotFound />         
        </Route>
      </Switch>      
    </div>
  );
};
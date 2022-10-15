import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import PageNotFound from './pages/PageNotFound';
import FormCreate from './pages/FormCreate';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/home'>
          <Nav />
          <Home />
          <Footer />
        </Route>
        <Route exact path='/create'>
          <Nav />
          <FormCreate/>
          <Footer />
        </Route>
        <Route exact path='/product/:id'>
          <Nav />
          <ProductDetail/>
          <Footer />
        </Route>
        <Route>
          <Nav />
          <PageNotFound />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};
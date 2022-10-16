import CardProductsList from "../components/CardProductList/CardProductsList";
import FilterAndOrder from "../components/FilterAndOrderProducts/FilterAndOrder";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return (
      <>
        <Nav />
        <div className="container mt-4">
          <div className="row">
            <div className="col-3">
              <FilterAndOrder />
            </div>
            <div className="col-9">
              <CardProductsList />
            </div>
          </div>          
        </div>
        <Footer />
      </>
    );
}
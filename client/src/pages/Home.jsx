import CardProductsList from "../components/CardProductList/CardProductsList";
import FilterAndOrder from "../components/FilterAndOrderProducts/FilterAndOrder";

export default function Home(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-3">
                    <FilterAndOrder/>
                </div>
                <div className="col-9">
                    <CardProductsList />
                </div>
            </div>
        </div>
    )
}
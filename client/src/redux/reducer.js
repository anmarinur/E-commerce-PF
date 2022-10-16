import { GET_PRODUCTS, GET_PRODUCT} from "./actions/productActions";
import { GET_DETAILS } from "./actions.js"
const stateInitial = {
    products: {},
    datails: []
};

export default function rootReducer(state= stateInitial, action){
    switch(action.type){
        case GET_PRODUCTS :
            return {
                ...JSON.parse(JSON.stringify(state)),
                products: action.payload
            }
        case GET_PRODUCT :
            return {
                ...JSON.parse(JSON.stringify(state)),
                product: action.payload
            }
            case GET_DETAILS :
                return {
                    ...JSON.parse(JSON.stringify(state)),
                    details: action.payload
                }
    
        default: return state;
    }
}
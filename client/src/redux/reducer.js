import { GET_PRODUCTS, GET_PRODUCT } from "./actions/productActions";

const stateInitial = {
    products: {}
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
        default: return state;
    }
}
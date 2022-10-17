import { GET_PRODUCTS, GET_DETAILS, DELETE_PRODUCT } from "./actions";

const stateInitial = {
    products: {},
    details: {}
};

export default function rootReducer(state= stateInitial, action){
    switch(action.type){
        case GET_PRODUCTS :
         console.log(action.payload)
         return {
             ...JSON.parse(JSON.stringify(state)),
             products: action.payload
         }
        case GET_DETAILS :
         return {
          ...JSON.parse(JSON.stringify(state)),
          details: action.payload
        }
        case DELETE_PRODUCT:
            return {
                ...JSON.parse(JSON.stringify(state)),
                products: state.products.filter((p) => p.id !== action.payload),
            }
        default: 
         return state;
    }
}
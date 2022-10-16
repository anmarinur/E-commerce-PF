import { GET_PRODUCTS, GET_DETAILS } from "./actions";

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
        default: 
         return state;
    }
}
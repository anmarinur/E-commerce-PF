import { GET_PRODUCTS, GET_DETAILS, DELETE_PRODUCT, FLAG_UPDATE, ALERT } from "./actions";

const stateInitial = {
    products: {},
    details: {},
    flagUpdate: {},
    AlertInfo : { show:false },
};

export default function rootReducer(state= stateInitial, action){
    switch(action.type){
        case GET_PRODUCTS :
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
        case FLAG_UPDATE:
            return {
                ...JSON.parse(JSON.stringify(state)),
                flagUpdate: {
                    flag: action.payload.flag,
                    id: action.payload.id
                }
            }
        case ALERT :
            return {
                ...JSON.parse(JSON.stringify(state)),
                AlertInfo: {
                    type: action.payload.type,
                    show: action.payload.show,
                    title: action.payload.title,
                    body: action.payload.body,
                }
            }
        default: 
         return state;
    }
}
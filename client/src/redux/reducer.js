import { GET_PRODUCTS, GET_DETAILS, GET_USER_ORDERS } from "./actions";

const stateInitial = {
    products: {},
    details: {},
    cart: [],
    currentItem: null,
    userOrders:[]
};

export default function rootReducer(state = stateInitial, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...JSON.parse(JSON.stringify(state)),
                products: action.payload
            }
        case GET_DETAILS:
            return {
                ...JSON.parse(JSON.stringify(state)),
                details: action.payload
            }
        case GET_USER_ORDERS:
        return {
            ...JSON.parse(JSON.stringify(state)),
            details: action.payload
        }
        default:
            return state;
    }
}
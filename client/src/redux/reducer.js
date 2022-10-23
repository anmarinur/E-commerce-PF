import { GET_PRODUCTS, GET_DETAILS, DELETE_PRODUCT, ADD_CART , DELETE_CART, ORDER_DETAIL, CLEAR_CART} from "./actions";

const stateInitial = {
    products: {},
    details: {},
    cart: [],
    totalOrder: 0,
    currentItem: null,
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
        case DELETE_PRODUCT:
            return {
                ...JSON.parse(JSON.stringify(state)),
                products: state.products.filter((p) => p.id !== action.payload),
            }
        case ADD_CART:
            return {   
                ...JSON.parse(JSON.stringify(state)),
                cart: [...JSON.parse(JSON.stringify(state.cart)), action.payload]
            }
        case DELETE_CART:
            return {
                ...JSON.parse(JSON.stringify(state)),
                cart: state.cart.filter((p) => p.id !== action.payload)
            }
        case ORDER_DETAIL:
            return {
                ...JSON.parse(JSON.stringify(state)),
                totalOrder: state.totalOrder + action.payload
            }
        case CLEAR_CART:
            return {
                ...JSON.parse(JSON.stringify(state)),
                cart: []
            }
        default:
            return state;
    }
}
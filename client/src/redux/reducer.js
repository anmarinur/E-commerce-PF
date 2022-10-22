import { GET_PRODUCTS, GET_DETAILS, DELETE_PRODUCT, ADD_TO_CART , DELETE_FROM_CART, ADJUST_QUANTITY, LOAD_CURRENT_ITEM } from "./actions";

const stateInitial = {
    products: {},
    details: {},
    cart: [],
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
        case ADD_TO_CART:
            //get the item from products array
            //const products = action.payload.products;
            const item = state.products.products.find(
                (prod) => prod.id === action.payload.id
            );
            //

            //console.log(state.cart.item, item.maxQuantity);
            const checkQty = state.cart.find(
                (item) => item.qty === action.payload.item.maxQuantity
            );
            //console.log(checkQty, 123);
            //check if the item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ADJUST_QUANTITY:
            
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: action.payload.qty }
                        : item
                ),
                currentItem:
                    state.currentItem.id === action.payload.id
                        ? { ...state.currentItem, qty: action.payload.qty }
                        : { ...state.currentItem, qty: 1 },

            };
        case LOAD_CURRENT_ITEM:
           
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
}
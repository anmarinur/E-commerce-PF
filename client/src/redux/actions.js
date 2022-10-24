import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const ORDER_DETAIL = "ORDER_DETAIL";
export const CLEAR_CART = "CLEAR_CART";
export const GET_ITEMS_LOCAL = "GET_ITEMS_LOCAL";
export const SET_TOTAL_PAYMENT = "SET_TOTAL_PAYMENT";
export const SET_CURRENT_ORDER = "SET_CURRENT_ORDER";

export const addCartGlobal = (item)=>{
    return { 
        type: ADD_CART,
        payload: item
    }
}

export const setTotalPayment = (total)=>{
    return { 
        type: SET_TOTAL_PAYMENT,
        payload: total
    }
}

export const setCurrentOrder = (currentOrder)=> {
    return {
        type: SET_CURRENT_ORDER,
        payload: currentOrder
    }
}

export const getItemsLocal = (items)=>{
    return { 
        type: GET_ITEMS_LOCAL,
        payload: items
    }
}

export const clearCart = ()=>{
    return { 
        type: CLEAR_CART,
    }
}

export const deleteCartGlobal = (id)=>{
    return { 
        type: DELETE_CART,
        payload: id
    }
}

export const orderDetail = (total)=>{
    return { 
        type: ORDER_DETAIL,
        payload: total
    }
}

export const getAllProducts = (size, page, filterCategory,sort,search,brands) => {
    var queryCat = '';
    var querySortPrice ='';
    var querySearch = '';
    var queryBrands = '';


    if (filterCategory) queryCat = `&cat=${filterCategory}`;
    if (sort)  querySortPrice = `&ordprice=${sort}`;
    if (search)  querySearch = `&search=${search}`;
    if (brands)  queryBrands = `&brand=${brands}`;
    
    return async function (dispatch) {
        try {
            const result = await axios.get(`/product?size=${size}&page=${page}${queryCat}${querySortPrice}${querySearch}${queryBrands}`);
            return dispatch({ type: GET_PRODUCTS, payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
};


export const getDetails = (id) => {

    return async function (dispatch) {
        try {
            var json = await axios.get("/product/" + id);

            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";
export const GET_USER_ORDERS = "GET_USER_ORDERS";





export const getAllProducts = (size, page, filterCategory,sort,search) => {
    var queryCat = '';
    var querySortPrice ='';
    var querySearch = '';
    if (filterCategory) queryCat = `&cat=${filterCategory}`;
    if (sort)  querySortPrice = `&ordprice=${sort}`;
    if (search)  querySearch = `&search=${search}`;

    
    return async function (dispatch) {
        try {
            const result = await axios.get(`/product?size=${size}&page=${page}${queryCat}${querySortPrice}${querySearch}`);
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


export const getUserOrders = (email) => {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/order/email/${email}`);
            return dispatch({
                type: GET_USER_ORDERS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
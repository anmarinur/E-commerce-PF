import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";
export const DELETE_PRODUCT = "DELETE_PRODUCT"




export const getAllProducts = (size, page, filterCategory,sort) => {
    var catFilter = '';
    var sortPrice ='';
    if (filterCategory) catFilter = `&cat=${filterCategory}`;
    if (sort)  sortPrice = `&ordprice=${sort}`;
    
    return async function (dispatch) {
        try {
            const result = await axios.get(`/product?size=${size}&page=${page}${catFilter}${sortPrice}`);
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

export const deleteProduct = (id) => {

    return async function (dispatch) {

        try {
            await axios.delete(`/product/${id}`)

            return dispatch({
                type: DELETE_PRODUCT,
                payload: id,
            })

        } catch (error) {
            console.log(error)
        }
    }
}
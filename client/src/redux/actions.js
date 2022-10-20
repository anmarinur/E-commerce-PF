import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const ADJUST_QUANTITY = "ADJUST_QUANTITY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";



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


export const loadProducts = (items) => {
    return {
      type: LOAD_PRODUCTS,
      payload: {
        products: items,  
      },
    };
  };
  
  export const addToCart = (event, theItem, itemID) => {
    event.preventDefault();
    return {
      type: ADD_TO_CART,
      payload: {
        event: event,
        item: theItem,
        id: itemID,  
      },
  
    };
  };

  export const deleteFromCart = (event, itemID) => {
    event.preventDefault();
    return {
      type: DELETE_FROM_CART,
      payload: {
        id: itemID,
      },
    };
  };
  
  export const adjustQuantity = (itemID, value) => {
    return {
      type: ADJUST_QUANTITY,
      payload: {
        id: itemID,
        qty: value,
      },
    };
  };
  
  export const LoadCurrentItem = (item) => {
    return {
      type: LOAD_CURRENT_ITEM,
      payload: item,
    };
  };
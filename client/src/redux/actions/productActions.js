import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";

export const getAllProducts = (size,page)=>{
    return async function (dispatch) {
        
          const result = await axios.get(`http://localhost:3001/product?size=${size}&page=${page}`);
          return dispatch({type: GET_PRODUCTS, payload: result.data});
      };
     
}
export const getProduct = ()=>{
    return {type: GET_PRODUCT, payload: "Product ID"}
}
import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAILS = "GET_DETAILS";




export const getAllProducts = (size, page) => {
  return async function (dispatch) {
   try {
    const result = await axios.get(`/product?size=${size}&page=${page}`);
    return dispatch({ type: GET_PRODUCTS, payload: result.data });  
   } catch (error) {
    console.log(error);
   }    
 } 
};


export const getDetails = (id)=> {
    console.log(id)
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
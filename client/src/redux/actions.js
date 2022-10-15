export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";

export const getAllProducts = ()=>{
    return {type: GET_PRODUCTS, payload: "All Products"}
}
export const getProduct = ()=>{
    return {type: GET_PRODUCT, payload: "Product ID"}
}

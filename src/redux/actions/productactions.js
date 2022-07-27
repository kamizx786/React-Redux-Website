import { ActionTypes } from "../constant/actiontype";
export const setProducts=(products)=>{
return{
    type:ActionTypes.SET_PRODUCTS,
    payload:products
}
}
export const selectProducts=(products)=>{
    return{
        type:ActionTypes.SELECT_PRODUCTS,
        payload:products
    }
    }
    export const removeselectProducts=()=>{
        return{
            type:ActionTypes.REMOVE_SELECT_PRODUCTS,
        }
        }
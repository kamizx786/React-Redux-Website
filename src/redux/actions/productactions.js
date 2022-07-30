import { ActionTypes } from "../constant/actiontype";
import axios from "axios";
export const fetchProducts=()=>{

    return async(dispatch)=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            dispatch(setProducts(response.data));
        }).catch((error)=>{
            console.log(error);
        }
        );
    }
}
export const fetchProductsById=(id)=>{
    return async(dispatch)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response)=>{         
            dispatch(selectProducts(response.data));
        }
        ).catch((error)=>{
            console.log(error);
        }
        );
    }
}
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
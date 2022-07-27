import { ActionTypes } from "../constant/actiontype";

const initialState={
    products:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
switch(type)
{
case ActionTypes.SET_PRODUCTS:
return {...state,products:payload};
default:
    return state;
}
}
export const selectproductReducer=(state={},{type,payload})=>{
    switch(type)
    {
    case ActionTypes.SELECT_PRODUCTS:
    return {...state,...payload};
    case ActionTypes.REMOVE_SELECT_PRODUCTS:
        return {};
    default:
        return state;
    }
    }
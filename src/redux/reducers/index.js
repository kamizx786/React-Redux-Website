import { combineReducers } from "redux";
import { productReducer } from "./productreducers";
import { selectproductReducer } from "./productreducers";
const reducers=combineReducers({
allproducts:productReducer,
products:selectproductReducer,
});
export default reducers;
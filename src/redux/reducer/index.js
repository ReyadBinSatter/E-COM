import handleCart from "./handleCart";
import handleBuyCart from "./handleBuyCart";
import {combineReducers} from 'redux';
import handleWishlist from "./handleWishlist";


const rootReducers = combineReducers(
    {handleCart,handleWishlist,handleBuyCart,}
)

export default rootReducers;
export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }    
}
export const delCart = (product) =>{
    return{
        type : "DELITEM",
        payload : product
    }    
}
export const addWishCart = (product) =>{
    return{
        type : "WADDITEM",
        payload : product
    }    
}
export const delWishCart = (product) =>{
    return{
        type : "WDELITEM",
        payload : product
    }    
}
export const addBuyCart = (product) =>{
    return{
        type : "BUYITEM",
        payload : product
    }    
}
export const delBuyCart = (product) =>{
    return{
        type : "DELBUYITEM",
        payload : product
    }    
}
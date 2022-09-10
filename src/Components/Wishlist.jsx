import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delWishCart } from '../redux/action/index';
import { addCart } from '../redux/action/index';
import { NavLink } from 'react-router-dom';
import { addBuyCart } from '../redux/action/index';

const Wishlist = () => {
    const state = useSelector((state) => state.handleWishlist)
    const dispatch = useDispatch()

    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const addBuyProduct = (product) => {
        dispatch(addBuyCart(product));
    }

    const handleClose = (product) => {
        dispatch(delWishCart(product));
    }
    const cartItems = (product) => {
        console.log(product);
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" onClick={() => handleClose(product)}></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <NavLink to={`/products/${product.id}`}>
                                <img src={product.image} height='200px' width='200px' />
                            </NavLink>
                        </div>
                        <div className="col-md-4">
                            <NavLink to={`/products/${product.id}`} className="text-decoration-none text-dark">
                                <h3>{product.title}</h3>
                                <p className='lead fw-bold '>${product.price}</p>
                            </NavLink>
                            <div className="d-flex justify-content-start mt-5 align-items-center">
                                <NavLink to='/checkout' className='me-3 text-decoration-none btn btn-outline-dark' onClick={() => addBuyProduct(product)}>Buy Now</NavLink>
                                <button className="me-3  btn btn-outline-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Wishlist is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className='my-5 py-5'>
            <h1 className='text-center'>My Wishlist</h1>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}

        </div>
    );
};

export default Wishlist;
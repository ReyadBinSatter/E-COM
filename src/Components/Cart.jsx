import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from '../redux/action/index';
// import { addCart } from '../redux/action/index';
import { addBuyCart } from '../redux/action/index';
import { NavLink } from 'react-router-dom';
import './common.css';

const Cart = () => {

    const [isChecked, setisChecked] = useState([]);
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    // const addProduct = (product) => {
    //     dispatch(addCart(product));
    // }
    const addBuyProduct = (product) => {
        dispatch(addBuyCart(product));
    }


    const handleClose = (product) => {
        dispatch(delCart(product));
    }






    const cartItems = (product) => {

        let total = 0;
        total = total + product.price * product.qty;

        const handleCheckbox = (e) => {
            const { value, checked } = e.target;

            if (checked) {
                setisChecked([...isChecked, value]);

                if (Number(value) === product.id) {
                    dispatch(addBuyCart(product, product.qty));
                }
            }
            else {
                setisChecked(isChecked.filter((e) => e !== value))
            }

        }


        return (
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">

                    <button className="btn-close float-end" onClick={() => handleClose(product)}></button>
                    <div className='position-relative'>
                        <div className='form-check position-absolute top-50 start-0 '>
                            <input type="checkbox" className='form-check-input' value={product.id} checked={product.isChecked} onChange={(e) => handleCheckbox(e)} />
                        </div>
                        <div className="row justify-content-center">

                            <div className="col-md-4">
                                <NavLink to={`/products/${product.id}`}>
                                    <img className='.c-img' src={product.image} height='200px' width='200px' />
                                </NavLink>

                            </div>
                            <div className="col-md-4 ">
                                <NavLink to={`/products/${product.id}`} className="text-decoration-none text-dark">
                                    <h3>{product.title}</h3>
                                    <p className='lead fw-bold '>${total}</p>
                                </NavLink>


                                <div className="d-flex justify-content-between mt-5 align-items-center">
                                    <NavLink to='/checkout' className='me-3 text-decoration-none btn btn-outline-dark' onClick={() => addBuyProduct(product)}>Buy Now</NavLink>
                                </div>

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
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }


    const button = () => {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <NavLink to='/checkout' className='btn btn-outline-dark mb-5'>Proceed To Checkout</NavLink>
                </div>
            </div>
        )
    }

    return (
        <div className='my-5 py-5'>
            <h1 className='text-center'>My Cart</h1>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    );
};

export default Cart;
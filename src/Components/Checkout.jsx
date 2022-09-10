import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delBuyCart } from '../redux/action/index';
import { addBuyCart } from '../redux/action/index';

const Checkout = () => {

    const state = useSelector((state) => state.handleBuyCart)
    const dispatch = useDispatch()
    const addBuyProduct = (product) => {
        dispatch(addBuyCart(product));
    }
    const delBuyProduct = (product) => {
        dispatch(delBuyCart(product));
    }


    let total = 0;
    const productList = (product) => {
        total = total + product.price * product.qty;
        return (
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">{product.title}</h6>
                </div>
                <div className='input-group w-25'>
                    <button type='button' onClick={() => delBuyProduct(product)} className='input-group-text'>-</button>
                    <div className='form-control text-center p-1'>{product.qty}</div>
                    <button type='button' onClick={() => addBuyProduct(product)} className='input-group-text'>+</button>
                </div>
                <span class="text-muted">${product.price * product.qty}</span>
            </li>
        )
    }
    return (
        <div className='m-auto container my-5 pt-5'>
            <div class="row g-5">
                <div class="col-md-5 col-lg-6 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-dark">Your Cart List</span>
                        <span class="badge bg-dark rounded-circle">{state.length}</span>
                    </h4>
                    <ul class="list-group mb-3">

                        {
                            state.map(productList)
                        }

                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${total}</strong>
                        </li>
                    </ul>

                    <form class="card p-2">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Promo code" />
                            <button type="submit" class="btn btn-secondary">Redeem</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-7 col-lg-6">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation was-validated" novalidate="">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <label for="firstName" class="form-label">First name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <label for="lastName" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="username" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text">@</span>
                                    <input type="text" class="form-control" id="username" placeholder="Username" required="" />
                                    <div class="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                                <div class="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                        </div>




                        <hr class="my-4" />

                        <h4 class="mb-3">Payment</h4>

                        <div class="my-3">
                            <div class="form-check">
                                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="" />
                                <label class="form-check-label" for="credit">Credit card</label>
                            </div>
                            <div class="form-check">
                                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" />
                                <label class="form-check-label" for="debit">Debit card</label>
                            </div>
                            <div class="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" />
                                <label class="form-check-label" for="paypal">PayPal</label>
                            </div>
                        </div>

                        <div class="row gy-3">
                            <div class="col-md-6">
                                <label for="cc-name" class="form-label">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>

                            <div class="col-md-6">
                                <label for="cc-number" class="form-label">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
                                <div class="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="cc-expiration" class="form-label">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                                <div class="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="cc-cvv" class="form-label">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                                <div class="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>

                        <hr class="my-4" />

                        <button class="w-100 btn btn-dark btn-lg" type="submit">Continue to checkout</button>


                    </form>
                </div>
            </div>
        </div>


    );
};

export default Checkout;
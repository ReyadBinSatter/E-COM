import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
    const state = useSelector((state) => state.handleCart);
    const state1 = useSelector((state1) => state1.handleWishlist);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-white border-bottom border-dark py-3">
                <div className="container-fluid mx-5">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">E-Com</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link home" aria-current="page" to="/">HOME</NavLink>
                            </li>
                            {/* <li className="nav-item mx-5">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li> */}
                            <li class="nav-item dropdown mx-5">
                                <NavLink className="nav-link dropdown-toggle text-decoration-none text-dark" to="" role="button" data-bs-toggle="dropdown" >
                                    <span className='dd'>PRODUCTS</span>
                                </NavLink>
                                <ul className="dropdown-menu dd-menu" >
                                    <li><NavLink className="dropdown-item my-2 text-decoration-none" to={`/product/${"men's clothing"}`}><span className='mx-5 my-2 text-dark'>MEN'S CLOTHING</span></NavLink></li>
                                    <li><NavLink className="dropdown-item my-2 text-decoration-none" to={`/product/${"women's clothing"}`}><span className='mx-5 my-2 text-dark'>WOMEN'S CLOTHING</span></NavLink></li>
                                    <li><NavLink className="dropdown-item my-2 text-decoration-none" to={`/product/${"jewelery"}`}><span className='mx-5 my-2 text-dark'>JEWELERY</span></NavLink></li>
                                    <li><NavLink className="dropdown-item my-2 text-decoration-none" to={`/product/${"electronics"}`}><span className='mx-5 my-2 text-dark'>OTHERS</span></NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link about" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link contact" to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                        <div>
                            <NavLink to="/wishlist" className="position-relative text-decoration-none text-dark fs-5 ms-5"><i className="fa fa-regular fa-heart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge text-light rounded-circle fw-semibold bg-secondary p-1"> {state1.length} </span>
                            </NavLink>
                            <NavLink to="/login" className="text-decoration-none text-dark fs-5 ms-5"><i className="fa fa-regular fa-user"></i></NavLink>
                            <NavLink to="/cart" className="position-relative text-decoration-none text-dark fs-5 ms-5">
                                <i className="fa fa-regular fa-shopping-cart"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge text-light rounded-circle fw-semibold bg-secondary p-1"> {state.length} </span>

                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
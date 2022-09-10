import React from 'react';
import { NavLink } from 'react-router-dom';
import './common.css';
const Footer = () => {
    return (
        <div className='footer-bg p-3'>
            <div class="mx-5 text-center pt-5">
                <div class="row">
                    <div class="col">
                        <div className="row">
                            <div className="col">

                                <NavLink to='/faq' className='justify-content-start text-decoration-none'><span className='text-dark fs-5 d-block'>FAQS</span></NavLink>
                                <NavLink to='/faq' className='justify-content-start text-decoration-none'><span className='text-dark fs-5 d-block'>DELIVERY & RETURNS</span></NavLink>

                            </div>
                            <div className="col">
                                <NavLink to='/faq' className=' text-decoration-none'><span className='text-dark fs-5 d-block'>SIZING</span></NavLink>
                                <NavLink to='/faq' className=' text-decoration-none'><span className='text-dark fs-5 d-block'>STOCKISTS</span></NavLink>
                                <NavLink to='/contact' className=' text-decoration-none'><span className='text-dark fs-5 d-block'>CONTACT US</span></NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className='mt-3'>
                            <i class="fa fa-brands fa-facebook-f fs-5 me-5"></i>
                            <i class="fa fa-brands fa-instagram fs-5 me-5"></i>
                            <i class="fa fa-brands fa-youtube fs-5 me-5"></i>
                            <i class="fa fa-brands fa-pinterest-p fs-5 me-5"></i>
                        </div>
                    </div>
                    <div class="col">
                        <form action="">
                            <div className='d-flex border-bottom'>
                                <label className=' justify-content-center align-items-center fs-5 pt-2' htmlFor=""><strong>SUBSCRIBE</strong></label>
                                <input type="email" placeholder="Enter your email address" className='ft-input form-control shadow-none border-0 bg-transparent justify-content-center align-items-center fs-5' />
                                <button className='btn btn-link text-decoration-none text-dark justify-content-center align-items-center fs-5'><i class="fa fa-regular fa-arrow-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-8 col-sm-12 align-items-center">
                        <div className="d-flex">
                            <div className='justify-content-start align-items-center'>
                                <span >
                                    © 2022 Ecom
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex justify-content-between">
                            <NavLink to='/faq' className='text-decoration-none justify-content-center align-items-center'><span className='text-dark text-wrap fs-5'>Terms & Conditions</span></NavLink>
                            <NavLink to='/faq' className='text-decoration-none justify-content-center align-items-center'><span className='text-dark text-wrap fs-5'>Privacy policy</span></NavLink>
                            <NavLink to='/faq' className='text-decoration-none justify-content-center align-items-center'><span className='text-dark text-wrap fs-5 '>Terms of Service</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
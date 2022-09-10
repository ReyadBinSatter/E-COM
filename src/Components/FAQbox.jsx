import React from 'react';
import { NavLink } from 'react-router-dom';

const FAQbox = () => {
    return (
        <div className='footer-bg p-3'>
            <div className='mx-5 text-center row'>
                <NavLink to='/faq' className=' text-decoration-none col my-3'>
                    <div className='border px-5  text-dark me-3  bg-light'>
                        <i class="fa fa-regular fa-truck fs-4 my-3"></i>
                        <h3 className='text-center'>SHIPPING</h3>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus.'.substring(0, 35)}...</p>
                    </div>
                </NavLink>
                <NavLink to='/faq' className=' text-decoration-none col my-3'>
                    <div className='border px-5 text-dark me-3  bg-light '>
                        <i class="fa fa-regular fa-repeat fs-4 my-3"></i>
                        <h3 className='text-center'>RETURNS</h3>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus.'.substring(0, 35)}...</p>
                    </div>
                </NavLink>
                <NavLink to='/faq' className=' text-decoration-none col my-3'>
                    <div className='border  me-3 px-5  text-dark bg-light'>
                        <i class="fa fa-regular fa-question fs-4 my-3"></i>
                        <h3 className='text-center'>QUESTIONS</h3>
                        <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus.'.substring(0, 35)}...</p>
                    </div>
                </NavLink>
            </div>
        </div>

    );
};

export default FAQbox;
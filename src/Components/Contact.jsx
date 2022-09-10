import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='my-5'>
            <img src="/img/3.jpg" className="d-block w-100" alt="..." height='950px' />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                    <h5 className="card-title display-3 fw-bolder mb-0 text-dark">Contact</h5>
                    <p className="card-text lead fs-2 text-dark">Lorem ipsum dolor.</p>
                </div>
            </div>

            <div className='container'>

                <div className="d-flex my-5 justify-content-around align-items-center">
                    <div className=''>
                        <h1 className='fs-1 fw-bold'>Contact Form</h1>
                    </div>
                    <div >
                        <p className='fs-5 mb-0'>Get in touch with our Customer Care Team.</p>
                    </div>

                </div>

                <form action="">
                    <label className=' justify-content-center align-items-center fs-5 my-4' htmlFor=""><h4> Your Details</h4></label>
                    <div className='d-flex justify-content-start w-100'>
                        <div className='w-75 me-5'>
                            <input type="text" placeholder="First Name" className='form-control shadow-none border-0 bg-transparent justify-content-center align-items-center fs-5 w-100 border-bottom rounded-0  mb-5' />
                            <input type="email" placeholder="Email Address" className='form-control shadow-none border-0 bg-transparent justify-content-center align-items-center fs-5 w-100 border-bottom rounded-0 mb-5' />

                        </div>
                        <div className='w-75'>
                            <input type="text" placeholder="Last Name" className='form-control shadow-none border-0 bg-transparent justify-content-center align-items-center fs-5 w-100 border-bottom rounded-0 mb-5' />
                            <input type="text" placeholder="Phone Number" className='form-control shadow-none border-0 bg-transparent justify-content-center align-items-center fs-5 w-100 border-bottom rounded-0 mb-5' />

                        </div>
                    </div>
                    <textarea class="form-control shadow-none border-0 bg-transparent justify-content-center align-items-center fs-5 w-100 border-bottom rounded-0 mb-5" id="exampleFormControlTextarea1" rows="3" placeholder='Write Message'></textarea>
                    <div className='d-flex justify-content-center align-items-center'>
                    <Button variant="outline-dark " className='btn-size '>CONTACT US</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
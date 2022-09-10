import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {
    const navigate = useNavigate();
    const gotoSignIn = event => {
        navigate('/login')
    }
    return (
        <div className=' w-100 h-75 mx-auto d-flex align-items-start mt-5 pt-4'>
           
                <Row className='align-items-center w-100 mx-0'>
                    <Col xs={12} md={6}>
                        <div className='text-dark'>
                            <h1 className='text-center'>Please Registration</h1>
                            <p className='text-center'>If you have a account <Link to="/login" className='text-info text-decoration-none' onClick={gotoSignIn}>Goto Sign In</Link></p>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="name" placeholder="User Name" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" placeholder="First Name" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="name" placeholder="Last Name" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className='border bg-transparent text-light' required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control type="number" placeholder="Mobile No." className='border bg-transparent text-light' required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Button variant="outline-info w-50 mx-auto d-block mb-2" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="/img/6.jpg" className="d-block w-100 pe-0" alt="..." height='850px' />
                    </Col>
                </Row>
        
        </div>
    );
};

export default Registration;
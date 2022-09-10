import React from 'react';
import { Button, Col,  Form, Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './common.css';

const Login = () => {
    const navigate = useNavigate();
    const gotoRegistration = event => {
        navigate('/registration')
    }
    return (
        <div className=' w-100 h-75 mx-auto d-flex align-items-center mt-5 pt-4'>
            
                <Row className='align-items-center w-100 '>
                    <Col xs={12} md={6}>
                        <img src="/img/5.jpg" className="d-block w-100" alt="..." height='600px' />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='text-dark'>
                            <h1 className='text-center'>Please Log In</h1>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className='border bg-transparent text-light' required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <div className='d-flex justify-content-center mb-3'>
                                    <Button variant="outline-info " type="submit" className='btn-size me-5'>
                                        Sign In
                                    </Button>
                                    <Button variant="outline-info " className='btn-size'>Reset password</Button>
                                </div>
                            </Form>
                            <p className='text-center'>If you are a new user <Link to="/registration" className='text-info text-decoration-none' onClick={gotoRegistration}>Please Registration</Link></p>
                        </div>
                    </Col>

                </Row>
            
        </div>
    );
};

export default Login;
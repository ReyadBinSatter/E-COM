import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart } from '../../redux/action';
import { addWishCart } from '../../redux/action';
import { addBuyCart } from '../../redux/action/index';

export default function CardSlider() {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([false]);

    let componentMounted = true;

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const wishProduct = (product) => {
        dispatch(addWishCart(product));
    }
    const addBuyProduct = (product) => {
        dispatch(addBuyCart(product));
    }
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }

        }
        getProducts();
    }, []);
    const Loading = () => {
        return (
            <>
                loading......
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <Slider {...settings}>
                    {
                        data.map((product) => {

                            return (
                                <>

                                    
                                    <Card style={{ width: '19rem' }} className="h-100 c-bg text-center p-2">
                                        <NavLink to={`/products/${product.id}`}>
                                            <Card.Img variant="top" src={product.image} height='250px' />
                                        </NavLink>
                                        <Card.Body>
                                            <Card.Title className='mb-0'>{product.title.substring(0, 12)}...</Card.Title>
                                            <div className='d-flex justify-content-center'>
                                                <Card.Text className='lead fw-bold me-3' style={{ textDecoration: 'line-through' }}>
                                                    ${product.price}
                                                </Card.Text>
                                                <Card.Text className='lead fw-bold text-danger'>
                                                    ${product.price}
                                                </Card.Text>
                                            </div>

                                            <div className="d-flex justify-content-center align-items-center">
                                                <NavLink to='/checkout' className='me-1 text-decoration-none btn btn-outline-dark' onClick={() => addBuyProduct(product)}>Buy Now</NavLink>
                                                <button className="btn btn-outline-dark me-1" onClick={() => wishProduct(product)}><i class="fa fa-heart-o" aria-hidden="true"></i></button>
                                                <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    
                                </>
                            )


                        })
                    }
                </Slider>

            </>
        )
    }
    return (


        <div className="mx-5 mb-5">
            {loading ? <Loading /> : <ShowProducts />}
        </div>





    )
}

import { addBuyCart } from '../redux/action/index';
import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart } from '../redux/action';
import { addWishCart } from '../redux/action';

import './common.css';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
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
                setFilter(await response.json());
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
                <div className='col-md-3'>
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}></Skeleton>
                </div>
            </>
        )
    }


    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            < >


                {
                    filter.map((product) => {

                        return (
                            <>
                                <div className=" mb-4 me-1 card-s">
                                    <div class="card h-100 text-center p-3 c-bg" key={product.id}>


                                        <NavLink to={`/products/${product.id}`}>
                                            <img src={product.image} class="card-img-top" alt={product.title} height='250px' />
                                        </NavLink>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                            <div className='d-flex justify-content-center '>
                                                <p class="card-text lead fw-bold me-3" style={{ textDecoration: 'line-through' }}>${product.price}</p>
                                                <p class="card-text lead fw-bold text-danger">${product.price}</p>
                                            </div>


                                            <div className="d-flex justify-content-center align-items-center">
                                                <NavLink to='/checkout' className='me-1 text-decoration-none btn btn-outline-dark' onClick={() => addBuyProduct(product)}>Buy Now</NavLink>
                                                <button className="btn btn-outline-dark me-1" onClick={() => wishProduct(product)}><i class="fa fa-heart-o" aria-hidden="true"></i></button>
                                                <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>Add to Cart</button>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </>
                        )


                    })
                }


            </>
        )
    }

    return (
        <div>
            <div className='  m-5 py-5'>
                <div className='row'>
                    <div className="col-12 ">
                        <h1 className="display-6 fw-bolder text-start">
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                
                <div className="buttons mb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Others</button>
                </div>
                <div className="row justify-content-between">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    );
};

export default Products;




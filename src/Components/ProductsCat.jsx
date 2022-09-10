import React, { useState, useEffect } from 'react';
import { addBuyCart } from '../redux/action/index';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart } from '../redux/action';
import { addWishCart } from '../redux/action';

import {  useParams } from 'react-router-dom';
import './common.css';

const ProductsCat = () => {


    const { category } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
  
    




    let componentMounted = true;

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const addBuyProduct = (product) => {
        dispatch(addBuyCart(product));
    }

    const wishProduct = (product) => {
        dispatch(addWishCart(product));
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
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
    }, [category]);

    const Loading = () => {
        return (
            <>
                loading.....
            </>
        )
    }

    // const filterProduct = (cat) => {
    //     const updatedList = data.filter((x) => x.category === cat);
    //     setFilter(updatedList);
    // }

    const Show = () => {
        return (
            <>
                

                {
                    
                    filter.map((product) => {

                        return (
                            <>
                                <div className="col-md-3 mb-4 me-1 card-s">
                                    <div class="card h-100 text-center p-3" key={product.id}>


                                        <NavLink to={`/products/${product.id}`}>
                                            <img src={product.image} class="card-img-top" alt={product.title} height='250px' />
                                        </NavLink>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title?.substring(0, 12)}...</h5>
                                            <p class="card-text lead fw-bold">${product.price}</p>

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
            <div className=' my-5 py-5'>
                {/* <div className="side-bar">
                    <div className='text-dark fs-5 mt-5 text-center pt-5 '>
                        <div className='position-absolute top-50 start-50 translate-middle'>
                            <div className="wrap">


                                <button className="btn1 btn btn-outline-dark side-btn p-1 m-1 rounded-circle" onClick={() => setFilter(data)}>A</button>
                                
                            </div>
                            <div className="wrap">

                                <button className="btn btn-outline-dark side-btn p-1 m-1 rounded-circle" onClick={() => filterProduct("men's clothing")}>M</button>
                               
                            </div>
                            <div className="wrap">

                                <button className="btn btn-outline-dark side-btn p-1 m-1 rounded-circle" onClick={() => filterProduct("women's clothing")}>W</button>
                               
                            </div>
                            <div className="wrap">

                                <button className="btn btn-outline-dark side-btn p-1 m-1 rounded-circle" onClick={() => filterProduct("jewelery")}>J</button>
                                
                            </div>
                            <div className="wrap">

                                <button className="btn btn-outline-dark side-btn p-1 m-1 rounded-circle" onClick={() => filterProduct("electronics")}>O</button>
                    
                            </div>


                        </div>





                    </div>
                </div> */}
                <div className='row mx-5'>
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-start">
                            Latest {category}
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <Show />}
                </div>
            </div>

        </div>
    );
};

export default ProductsCat;




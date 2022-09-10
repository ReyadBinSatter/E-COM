import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { addWishCart } from '../redux/action';
import { NavLink, useParams } from 'react-router-dom';
import { addBuyCart } from '../redux/action/index';
import { SRLWrapper } from "simple-react-lightbox";
import "./common.css";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


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
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
            <>
                loading.....
            </>
        )
    }
    const Rating = () =>{
        return (
            <>
              {[...Array(5)].map((_, i) => (
                <span key={i} >
                  {(product.rating && product.rating.rate) > i ? (
                    <i className="fa fa-star"></i>
                  ) : (
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  )}
                </span>
              ))}
            </>
          );
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <SRLWrapper>
                        <div className='d-flex justify-content-start'>
                            <div className=''>
                                <img src={product.image} class="card-img-top img-s row" alt={product.title} />
                                <img src={product.image} class="card-img-top img-s row" alt={product.title} />
                                <img src={product.image} class="card-img-top img-s row" alt={product.title} />
                                <img src={product.image} class="card-img-top img-s row" alt={product.title} />
                                <img src={product.image} class="card-img-top img-s row" alt={product.title} />
                            </div>
                            <img src={product.image} class="card-img-top c-img-s" alt={product.title} />
                        </div>


                    </SRLWrapper>
                </div>

                <div className="col-md-6 ps-5">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5  my-3">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <Rating/>
                    </p>
                    <div className='d-flex justify-content-start'>
                        <h3 style={{ textDecoration: 'line-through' }} className="display-6 fw-bold my-4 ">
                            ${product.price}
                        </h3>
                        <h3 className="display-6 fw-bold my-4 ms-5 text-danger">
                            ${product.price}
                        </h3>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p className="lead fw-bolder me-2" >Available Color: </p>
                        <div className='color-box bg-light'></div>
                        <div className='color-box bg-danger'></div>
                        <div className='color-box bg-success'></div>
                        <div className='color-box bg-primary'></div>
                    </div>
                    <p className="lead">{product.description}</p>

                    <div className="d-flex justify-content-start mt-5 align-items-center">
                        <NavLink to='/checkout' className='me-3 text-decoration-none btn btn-outline-dark' onClick={() => addBuyProduct(product)}>Buy Now</NavLink>
                        <button className="me-3  btn btn-outline-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                        <button className="btn  btn-outline-dark" onClick={() => wishProduct(product)}>Wishlist</button>
                    </div>
                </div>

            </>
        )
    }


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    

    const ProductReview = () => {
        return (
            <div className="tab-container mt-3">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Product Details
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Reviews
                    </button>

                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >

                        <p>Size: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Color: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Febric: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Stock: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <Rating/>
                                    <p>by User name</p>
                                </div>
                                <p>30 August 2022</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, non sit. Optio a quo laudantium nobis consectetur amet repellendus iusto.</p>
                            <hr />
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <Rating/>
                                    <p>by User name</p>
                                </div>
                                <p>30 August 2022</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, non sit. Optio a quo laudantium nobis consectetur amet repellendus iusto.</p>
                            <hr />
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <Rating/>
                                    <p>by User name</p>
                                </div>
                                <p>30 August 2022</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, non sit. Optio a quo laudantium nobis consectetur amet repellendus iusto.</p>
                            <hr />
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <Rating/>
                                    <p>by User name</p>
                                </div>
                                <p>30 August 2022</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, non sit. Optio a quo laudantium nobis consectetur amet repellendus iusto.</p>
                            <hr />
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <Rating/>
                                    <p>by User name</p>
                                </div>
                                <p>30 August 2022</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, non sit. Optio a quo laudantium nobis consectetur amet repellendus iusto.</p>
                            <hr />
                        </div>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <Rating/>
                                    <p>by User name</p>
                                </div>
                                <p>30 August 2022</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, non sit. Optio a quo laudantium nobis consectetur amet repellendus iusto.</p>
                            <hr />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="mx-5 py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                    <ProductReview />
                </div>

            </div>
        </div>
    );
};

export default Product;
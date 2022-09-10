import React from 'react';
import FAQbox from './FAQbox';
import Products from './Products';
import CardSlider from './Slider/Slider';


const Home = () => {
    return (
        <>

            <div className='cover my-5 w-100'>
                <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active card text-bg-dark border-0">
                            <img src="/img/1.jpg" className="d-block w-100" alt="..." height='950px' />
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className='container'>
                                    <h5 className="card-title display-3 fw-bolder mb-0 text-dark">GET 40% OFF</h5>
                                    <p className="card-text lead fs-2 text-dark">Lorem ipsum dolor.</p>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item card text-bg-dark border-0">
                            <img src="/img/2.jpg" className="d-block w-100" alt="..." height='950px' />
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className='container'>
                                    <h5 className="card-title display-3 fw-bolder mb-0 text-dark">GET 50% OFF</h5>
                                    <p className="card-text lead fs-2 text-dark">Lorem ipsum dolor.</p>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item card text-bg-dark border-0">
                            <img src="/img/3.jpg" className="d-block w-100" alt="..." height='950px' />
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className='container'>
                                    <h5 className="card-title display-3 fw-bolder mb-0 text-dark">GET 60% OFF</h5>
                                    <p className="card-text lead fs-2 text-dark">Lorem ipsum dolor.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                        <i class="fa fa-solid fa-caret-left text-black fs-1"></i>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <i class="fa fa-solid fa-caret-right text-black fs-1"></i>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div className="mx-5 carousel">
                <h1 className='slider_title'>Best Selling Product</h1>
                <hr className='mb-5' />
                <CardSlider></CardSlider>
            </div>
            <FAQbox></FAQbox>
            <Products></Products>
        </>

    );
};

export default Home;
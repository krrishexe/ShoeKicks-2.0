import React from 'react'

function Carousel() {
    return (
        <div>
            <section id="caraousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("../Media/images/186668.jpg")} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Premium Section</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                    <div className="slider-btn">
                                        <button className="btn btn-1">Our services</button>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Media/images/JGwAprF-nike-shoes-wallpaper.jpg")} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Greedy Greens</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                    <div className="slider-btn">
                                        <button className="btn btn-1">Our services</button>
                                    </div>

                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Media/images/mick-haupt-O8_sTTWaJ14-unsplash.jpg")} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Lorem ipsum dolor</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing..</p>

                                    <div className="slider-btn">
                                        <button className="btn btn-1">Our services</button>
                                    </div>

                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Carousel

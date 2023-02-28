import React from 'react'

function Carousel2() {
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
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                            aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("../Media/images/shoes/lebron-17.jpg")} className="d-block w-100" alt="..." />
                                {/* <div className="carousel-caption d-none d-md-block">
                                    <h5>Premium Section</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                    <div className="slider-btn">
                                        <button className="btn btn-1">Explore more</button>
                                    </div>
                                </div> */}
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Media/images/shoes/lebron-17 (1).jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Media/images/shoes/lebron-17 (2).jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Media/images/shoes/lebron-17 (3).jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Media/images/shoes/lebron-17 (4).jpg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require("../Media/images/shoes/lebron-17 (5).jpg")} className="d-block w-100" alt="..." />
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
    </div>
  )
}

export default Carousel2

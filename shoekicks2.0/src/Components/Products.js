import React from 'react'

function Products() {
    return (
        <div>
            <section id="product1" className="section-p1">
                <h1>2022 Featured Products</h1>
                <p>You don't wanna miss this!</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="images/f1.jpg" alt="" height="600px" width="300px" />
                            <div className="des">
                                <span>Nike</span>
                                <h5>Nike Retro Jordan 5</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$150</h4>
                            </div>
                            <a href="/"><span className="material-symbols-outlined" style={{color: "white"}}>shopping_cart
                            </span></a>
                    </div>
                    <div className="pro">
                        <img src="images/f4.jpg" alt="" height="600px" width="300px" />
                            <div className="des">
                                <span>Adidas</span>
                                <h5>Adidas Flyby knit 3 (Limited Edition)</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$720</h4>
                            </div>
                            <a href="/"><span className="material-symbols-outlined" style={{color: "white"}}>shopping_cart
                            </span></a>
                    </div>
                    <div className="pro">
                        <img src="images/p2-4.jpg" alt="" height="600px" width="300px" />
                            <div className="des">
                                <span>Nike</span>
                                <h5>Nike Jordan Dior's</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$550</h4>
                            </div>
                            <a href="/"><span className="material-symbols-outlined" style={{color: "white"}}>shopping_cart
                            </span></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products

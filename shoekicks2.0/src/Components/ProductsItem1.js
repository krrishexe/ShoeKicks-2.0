import React from 'react'

function ProductsItem1(props) {
    return (
        <div>
            <div className="pro">
                <img src={require("../Media/images/f1.jpg")} alt="" height="600px" width="300px" />
                <div className="des">
                    <span>Nike</span>
                    <h5>Nike Retro Jordan 5</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>{props.price1}</h4>
                </div>
                <a href="/"><span className="material-symbols-outlined" style={{ color: "white" }}>shopping_cart
                </span></a>
            </div>
        </div>
    )
}

export default ProductsItem1
 
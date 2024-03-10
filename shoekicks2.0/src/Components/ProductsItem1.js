import React from 'react'

function ProductsItem1(props) {
    return (
        <div>
            <div className="pro">

                
                {/* <img src={props.images0} alt="" height="600px" width="300px" /> */}
                <img src={props.src} alt="" height="600px" width="300px" />
                <div className="des">
                    <span>{props.para}</span>
                    <h5>{props.head}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>{props.price1}</h4>
                </div>
                <a href="/"><span className="material-symbols-outlined" style={{ color: "whitesmoke" }}>shopping_cart
                </span></a>
            </div>
        </div>
    )
}

export default ProductsItem1
 
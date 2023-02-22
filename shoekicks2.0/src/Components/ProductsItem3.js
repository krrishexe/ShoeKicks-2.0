import React from 'react'

function ProductsItem3(props) {
  return (
    <div>
      <div class="pro">
                <img src={require("../Media/images/p2-4.jpg")} alt="" height="600px" width="300px" />
                <div class="des">
                    <span>Nike</span>
                    <h5>Nike Jordan Dior's</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>{props.price3}</h4>
                </div>
                <a href="/"><span class="material-symbols-outlined" style={{color: "white"}}>shopping_cart
                    </span></a>
            </div>
    </div>
  )
}

export default ProductsItem3

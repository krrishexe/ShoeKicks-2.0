import React from 'react'

function ProductsItem2(props) {
  return (
    <div>
      <div class="pro">
                <img src={require("../Media/images/f4.jpg")} alt="" height="600px" width="300px" />
                <div class="des">
                    <span>Adidas</span>
                    <h5>Adidas Flyby knit 3 (Limited Edition)</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>{props.price2}</h4>
                </div>
                <a href="/"><span class="material-symbols-outlined" style={{color: "white"}}>shopping_cart
                    </span></a>
            </div>
    </div>
  )
}

export default ProductsItem2

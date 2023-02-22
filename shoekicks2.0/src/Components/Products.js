import React from 'react'
import ProductsItem1 from './ProductsItem1'
import ProductsItem2 from './ProductsItem2'
import ProductsItem3 from './ProductsItem3'





function Products() {
    return (
        <div>
            <section id="product1" className="section-p1">
                <h1>2022 Featured Products</h1>
                <p>You don't wanna miss this!</p>
                <div className="pro-container">
                    
                    <ProductsItem1 price1={"150$"} />

                    <ProductsItem2 price2={"720$"}  />

                    <ProductsItem3 price3={"550$"} />

                </div>
            </section>
        </div>
    )
}

export default Products

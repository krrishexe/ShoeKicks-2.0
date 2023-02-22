import React from 'react'
import ProductsItem from './ProductsItem'



function Products() {
    return (
        <div>
            <section id="product1" className="section-p1">
                <h1>2022 Featured Products</h1>
                <p>You don't wanna miss this!</p>
                <div className="pro-container">
                    
                    <ProductsItem price1={"150$"} />

                    <ProductsItem price2={"720$"}  />

                    <ProductsItem price3={"550$"} />

                </div>
            </section>
        </div>
    )
}

export default Products

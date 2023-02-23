import React from 'react'
import ProductsItem1 from './ProductsItem1'


function Products(props) {
    return (
        <div>
            <section id="product1" className="section-p1">
                <h1>{props.head}</h1>
                <p>{props.para}</p>
                <div className="pro-container">
                    
                    <ProductsItem1 price1={"150$"} src={require("../Media/images/f1.jpg")}/>
                    <ProductsItem1 price1={"150$"} src={require("../Media/images/f4.jpg")}/>
                    <ProductsItem1 price1={"150$"} src={require("../Media/images/p2-4.jpg")} />

                </div>
            </section>
        </div>
    )
}

export default Products

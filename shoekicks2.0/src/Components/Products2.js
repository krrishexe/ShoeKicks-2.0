import React from 'react'
import ProductsItem2 from './ProductsItem2'


function Products(props) {
    return (
        <div>
            <section id="product1" className="section-p1">
                <h1>{props.head}</h1>
                <p>{props.para}</p>
                <div className="pro-container">
                    
                    <ProductsItem2 price1={"300$"} src={require("../Media/images/Untitled design.png")} head={"Nike Patta Orange"} para={"Nike"} />
                    <ProductsItem2 price1={"250$"} src={require("../Media/images/p2-1.jpg")}  head={"Nike Jordans High"} para={"Nike"}/>
                    <ProductsItem2 price1={"700$"} src={require("../Media/images/p2-3.jpg")}  head={"Nike Travis Scott's (Pink)"} para={"Nike"} />

                    
                </div>
            </section>
        </div>
    )
}

export default Products

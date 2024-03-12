import React from 'react'
import ProductsItem1 from './ProductsItem1'



function Products(props) {
    return (
        <div>
            <section id="product1" className="section-p1">
                <h1>{props.head}</h1>
                <p>{props.para}</p>
                <div className="pro-container">

                    <ProductsItem1 price1={"150$"} src={require("../Media/images/f1.jpg")} head={"Nike Retro Jordan 5"} para={"Nike"} link={'/singleproduct/10'} />
                    <ProductsItem1 price1={"250$"} src={require("../Media/images/f4.jpg")} head={"Adidas Flyby knit 3 (Limited Edition)"} para={"Adidas"} link={'singleproduct/58'} />
                    <ProductsItem1 price1={"500$"} src={require("../Media/images/p2-4.jpg")} head={"Nike Jordan Dior's"} para={"Nike"} link={'singleproduct/80'} />


                </div>
            </section>
        </div>
    )
}

export default Products

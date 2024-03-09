import React, { useEffect } from 'react'
import VanillaTilt from "../Media/JS/Vanilla-tilt"
import { Link } from 'react-router-dom';

function Hero3() {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".socks"), {
            max: 15,
            speed: 300,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1.25,
        });
    }, [])
    return (
        <>
            <div className="product-month">
                <h2>Special Edition </h2>
                <h4>Now available in Three colors </h4>
            </div>
            <div className="centered">
                <div className="bottle">
                    <div className="socks">
                        <h2 className="name">Nike Air Max</h2>
                        <Link to={'/singleproduct/68'} className="buy">Buy Now</Link>
                        <div className="circle"></div>
                        <img className="product" alt="" src={"https://assets.codepen.io/7773162/green.png"} />
                    </div>


                    <div className="socks bounce">
                        <h2 className="name">Nike Air Max</h2>
                        <Link to={'/singleproduct/2'} className="buy">Buy Now</Link>
                        <div className="circle"></div>
                        <img className="product" alt="" src={"https://assets.codepen.io/7773162/blue.png"} />
                    </div>


                    <div className="socks">
                        <h2 className="name">Nike Air Max</h2>
                        <Link to={'/singleproduct/125'} className="buy">Buy Now</Link>
                        <div className="circle"></div>
                        <img className="product" alt="" src={"https://assets.codepen.io/7773162/red.png"} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Hero3

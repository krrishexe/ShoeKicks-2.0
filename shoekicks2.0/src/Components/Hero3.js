import React from 'react'
import VanillaTilt from "../Media/JS/Vanilla-tilt"

function Hero3() {
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
                        <a href="/" className="buy">Buy Now</a>
                        <div className="circle"></div>
                        <img className="product" alt="" src={"https://assets.codepen.io/7773162/green.png"} />
                    </div>


                    <div className="socks">
                        <h2 className="name">Nike Air Max</h2>
                        <a href="/" className="buy">Buy Now</a>
                        <div className="circle"></div>
                        <img className="product" alt="" src={"https://assets.codepen.io/7773162/blue.png"} />
                    </div>


                    <div className="socks">
                        <h2 className="name">Nike Air Max</h2>
                        <a href="/" className="buy">Buy Now</a>
                        <div className="circle"></div>
                        <img className="product" alt="" src={"https://assets.codepen.io/7773162/red.png"} />
                    </div>
                </div>
            </div>
        </>
    )
}
VanillaTilt.init(document.querySelectorAll(".socks"), {
    max: 15,
    speed: 300,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1.25,
});

export default Hero3

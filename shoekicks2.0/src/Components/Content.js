import React from 'react'
import Hero1 from "../Components/Hero1";
import Hero2 from "../Components/Hero2";
import Hero3 from "../Components/Hero3";
import Products from "../Components/Products";
import Products2 from "../Components/Products2";
import Carousel from "../Components/Carousel";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

function Content() {
    return (
        <div>
            <Hero1 />

            <Products head={"2022 Featured Products"} para={"You don't wanna miss this!"} />

            <Hero2 />

            <Products2 head={"New Launches"} para={"Its's NIKE time of the year !!!"} />

            <Hero3 />

            <Carousel />

            <Newsletter />

            <Footer />
        </div>
    )
}

export default Content

import React from 'react'
import { Link } from 'react-router-dom'

function Hero2() {
  return (
    <div>
      <section id="month">
        <div className="product-month">
          <h2>#Product Of The Month</h2>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h2>Upto <span>70% off</span> - All t-shirts & accessories</h2>
        <button className="normal"><Link style={{ textDecoration: 'none', color: '#000' }} to={'/Products'}>Explore More</Link></button>
      </section>

    </div>
  )
}

export default Hero2

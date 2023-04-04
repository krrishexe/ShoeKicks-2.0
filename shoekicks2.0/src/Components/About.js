import React from 'react'
import Shoe from './Shoe'

function About(props) {
  return (
    <div>
      <div className="bigContainer">
        <div className="test" style={{ textAlign: 'center', margin: "50px 0px"  }}>
          <h2>Empty your pocket Sale</h2>
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.webp" type="image/webp" />
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.gif" alt="💸" width="32" height="32" />
          </picture>
        </div>

            <div class="container">
              <div class="big"></div>
              <div class="smol-1"></div>
              <div class="smol-2"></div>
            </div>

            <div className="test" style={{ textAlign: 'center', margin: "50px 0px" }}>
              <h2>New Arrivals</h2>
            </div>

            <Shoe />




        </div>
      </div>
      )
}

      export default About

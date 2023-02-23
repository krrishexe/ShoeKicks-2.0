import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="section-p1">
        <div className="col">
            <img className='logo' src={require("../Media/images/site_logo.png")} alt="" />
            <h4>Contact</h4>
            <p> <strong>Address</strong> : blah blah blah </p>
            <p> <strong>Phone</strong> : (+91) 6376365536 </p>
            <p> <strong>Hours</strong> : blah blah blah </p>
            <div className="follow">
                <h4>Follow us @</h4>
                <div className="icon">
                    <i className="/ab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="/">About us</a>
            <a href="/">Delivery Information</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms and Conditions</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="/">Sign In</a>
            <a href="/">View cart</a>
            <a href="/">My Wishlist</a>
            <a href="/">Help</a>
        </div>

        <div className="col install">
            <h4>Install our App</h4>
            <p>From App store Or Google Play</p>

            <div className="row">
                <a href="/" title="Image from freepnglogos.com"><img
                        src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
                        width="200" alt="google play and apple app store logos" /></a>
            </div>

            <p>Secure Payment Gateways</p>
            <a href="/"><img src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png" width="200"
                    alt="visa and mastercard logo" /></a>
        </div>

        <div className="copyright">
            <p>© 2022 , ShoeKicks & co. </p>
        </div>

    </footer>
    </div>
  )
}

export default Footer

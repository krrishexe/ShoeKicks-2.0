import React from 'react'

function Newsletter() {
    return (
        <div>
            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h2> Sign Up for our Newsletter</h2>
                    <p>Get E-mail updates about our <span>latest products</span>  and <span>special offers.</span> </p>
                </div>
                <div className="form">
                    <input type="email" placeholder="Your email address here" />
                        <button className="normal"> Sign Up</button>
                </div>
            </section>
        </div>
    )
}

export default Newsletter

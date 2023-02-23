import React from 'react'

function Newsletter() {
    return (
        <div>
            <section id="newsletter" class="section-p1 section-m1">
                <div class="newstext">
                    <h2> Sign Up for our Newsletter</h2>
                    <p>Get E-mail updates about our latest products and <span>special offers.</span> </p>
                </div>
                <div class="form">
                    <input type="email" placeholder="Your email address here" />
                        <button class="normal"> Sign Up</button>
                </div>
            </section>

        </div>
    )
}

export default Newsletter

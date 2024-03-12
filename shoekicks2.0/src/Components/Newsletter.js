import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

function Newsletter() {
    const [email, setMail] = useState('')
    const handleNews = async (e) => {
        try {
            e.preventDefault()
            console.log("clicked")
            const data = await axios.post("http://localhost:5000/api/v1/user/handle-newsletter", { email })
            console.log(data)
            if (data.data.status === 200) {
                toast.success("Mail Sent Successfully ✅")
            } else {
                toast.error("Error sending mail")
            }

        } catch (error) {
            console.log("Error sending mail", error.message)
            toast.error("Error sending mail")
        }
    }

    return (
        <div>
            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h2> Sign Up for our Newsletter</h2>
                    <p>Get E-mail updates about our <span>latest products</span>  and <span>special offers.</span> </p>
                </div>
                <form>
                    <div className="form">
                        <input style={{ width: "350px" }} type="email" placeholder="Your email address here" value={email} onChange={(e) => setMail(e.target.value)} />
                        <button className="normal" type='submit' onClick={handleNews}> Sign Up</button>
                        <ToastContainer />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Newsletter

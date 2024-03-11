import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function VerifyEmail() {
    const [token, setToken] = useState('')
    const [isVerified, setIsVerified] = useState(false)
    const navigate = useNavigate()

    const verifyEmail = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/user/verifyemail/`, { token })
            if (response.data.status === 200) {
                console.log("Email verified successfully")
                toast.success(`Email verified successfully 🦄 ${response.data.message} `, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                toast.success(`Your mail is verified , Please Login! 🦄 ${response.data.message} `, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setTimeout(() => {
                    navigate(`/login`)
                }, 5000);
            }
            else {
                console.log("Email verification")
                setIsVerified(true)
                toast.error(`Email verification failed 🦄 ${response.data.message} `, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (token.length > 0) {
            verifyEmail()
        }
    }, [token])
    useEffect(() => {
        const urlToken = window.location.href.split('=')[1]
        console.log(urlToken)
        setToken(urlToken || '')
    }, [token])

    return (
        <div className='container1'>
            {
                isVerified && (
                    <div>
                        <h1>Verify Email :</h1>
                        <div>
                            <h2>Email verified Successfully!!!</h2>
                            <h2>Token :{token}</h2>
                            <ToastContainer />
                        </div>
                    </div>
                )
            }
            {
                !isVerified && (
                    <div>
                        <h1>Verify Email :</h1>
                        <div>
                            <h2>Verifying your email...</h2>
                            <h2>Token :{token}</h2>
                            <ToastContainer />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default VerifyEmail

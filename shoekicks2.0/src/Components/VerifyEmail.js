import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../utils/constants';

function VerifyEmail() {
    const [token, setToken] = useState('')
    const [isVerified, setIsVerified] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post(`${BASE_URL}/user/verifyemail/`, { token })
                if (response.data.status === 200) {
                    console.log("Email verified successfully")
                    setIsVerified(true)
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
                    setTimeout(() => {
                        navigate(`/login`)
                    }, 5000);
                }
                else {
                    console.log("Email verification")
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

        if (token.length > 0) {
            verifyEmail()
        }
    }, [token, navigate])

    useEffect(() => {
        const urlToken = window.location.href.split('=')[1]
        console.log(urlToken)
        setToken(urlToken || '')
    }, [])

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
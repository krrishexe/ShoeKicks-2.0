import React, { useEffect } from 'react'
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { signUpSchema } from "../models/index"
import axios from 'axios'
import "../Media/CSS/signup.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const initialValues = { username: '', email: '', password: '' }

function Signup() {
    const navigate = useNavigate();

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values: any) => {
            console.log(values)
        }
    })
    useEffect(() => {
        console.log(values, errors)
    }, [values,errors])
    const [loading, setLoading] = useState(false)
    const [passwordBtn, setPasswordBtn] = useState(false)

    const onLogin = async (e) => {
        try {
            e.preventDefault()
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/user/signup`, values)
            if (response.data.status === 200) {
                console.log("Sign up Successful " + response.data)
                toast.success(`Signup successful 🦄 ${response.data.message} `, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                toast.success(`Please check your inbox to verify your email! 🦄 ${response.data.message} `, {
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
            } else {
                console.log("Signup Failed " + response.data.message)
                toast.error(`Signup Failed ❌ ${response.data.message}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                values.username = ''
                values.email = ''
                values.password = ''

            }

        } catch (error) {
            console.log("Signup Failed " + error.message)
            toast.error(`Signup Failed ❌ ${error.message}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className='container1'>
        <div className="signup-container">
          <h2 className="signup-title">Sign Up</h2>
          <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-field"
                />
                {errors.username && touched.username && <p className="error-message">{errors.username}</p>}
              </div>
    
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-field"
                />
                {errors.email && touched.email && <p className="error-message">{errors.email}</p>}
              </div>
    
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div>

                <input
                  type={passwordBtn ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-field"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setPasswordBtn(!passwordBtn)}
                >
                  <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zm0 144a144 144 0 1 1 288 0 144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                </button>
                </div>
                {errors.password && touched.password && <p className="error-message">{errors.password}</p>}
              </div>
    
              <button
                className={loading ? `btn loader` : `btn button-submit`}
                disabled={Object.keys(errors).length > 0 || Object.values(values).some(value => !value)}
                onClick={onLogin}
              >
                {loading ? "" : "Sign Up"}
              </button>
              <ToastContainer />
              <p className="text-center">
                Already have an account? <Link to="/login" className="link">Sign In</Link>
              </p>
              <p className="text-center line">Or Sign Up With</p>
              <div className="social-buttons">
                <button className="btn google">
                  <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path style={{ fill: '#FBBB00' }} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
      c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
      C103.821,274.792,107.225,292.797,113.47,309.408z" />
                    <path style={{ fill: '#518EF8' }} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
      c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
      c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
                    <path style={{ fill: '#28B446' }} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
      c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
      c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
                    <path style={{ fill: '#F14336' }} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
      c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
      C318.115,0,375.068,22.126,419.404,58.936z" />
                  </svg>
                  Google
                </button>
                <button className="btn apple">
                  <svg viewBox="0 0 22.773 22.773" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                  </svg>
                  Apple
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      );
}

export default Signup

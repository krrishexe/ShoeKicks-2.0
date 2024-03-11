import React from 'react'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import Bo from './Bo';

function Success() {
    const navigate = useNavigate()
    return (
        <div style={{ background: "#fff" }}>
            <div className="breadcrumb-area">
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center">
                </div>
            </div>
            <div className="container1">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={'/'}><i className="fa fa-home" /> Home</Link></li>
                                <li className="breadcrumb-item"><Link to={"/Products"}><FaShopify /> Shop</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Success</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div>
                    <h1 className='tcCenter1'>Payment successful</h1>
                </div>
            </div>
            <div className='empty-cart'>
                <p className='bo-happy' style={{ color: "#000", textAlign: 'center' }}><span>Bo </span> is finally happy <span> :)</span>
                </p>
                <Bo />
                <div style={{ display: 'block', height: '50px', fontSize: '12px' }}>Yes, Bo is me.</div>

            </div>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight + 1200}
                colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#000']}
                tweenDuration={10000}

            />
        </div>
    )
}

export default Success

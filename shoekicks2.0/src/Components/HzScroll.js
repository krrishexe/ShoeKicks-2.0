import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

function HzScroll() {

    // const child   = { width: `300em`, height: `100%`}

    return (
        <div className='Hz'>
            <HorizontalScroll reverseScroll = { true } config= {{ stiffness: 100, damping: 10 }}  animValues    = { 10 }>
                <div className="main bg" >
                    <img src={require("../Media/images/shoes/lebron-17.jpg")} className="d-block w-100" alt="..." />
                </div>

                <div className="main bg1" >
                    <img src={require("../Media/images/shoes/lebron-17 (1).jpg")} className="d-block w-100" alt="..." />
                </div>

                <div className="main bg2" >
                    <img src={require("../Media/images/shoes/lebron-17 (2).jpg")} className="d-block w-100" alt="..." />
                </div>

                <div className="main bg3" >
                    <img src={require("../Media/images/shoes/lebron-17 (3).jpg")} className="d-block w-100" alt="..." />
                </div>

                <div className="main bg4" >
                    <img src={require("../Media/images/shoes/lebron-17 (4).jpg")} className="d-block w-100" alt="..." />
                </div>

                <div className="main bg5" >
                    <img src={require("../Media/images/shoes/lebron-17 (5).jpg")} className="d-block w-100" alt="..." />
                </div>

            </HorizontalScroll>
        </div>
    )
}

export default HzScroll

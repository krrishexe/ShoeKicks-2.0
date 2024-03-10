import React, { useEffect } from 'react'

function Bo() {


    useEffect(() => {
        document.querySelector(".move-area").addEventListener("mousemove", function (event) {
            var eyel = document.querySelectorAll(".eyel");
            var eyer = document.querySelectorAll(".eyer");
            eyel.forEach(eye => {
                var eyeRect = eye.getBoundingClientRect();
                var x = eyeRect.left + (eyeRect.width / 2);
                var y = eyeRect.top + (eyeRect.height / 2);
                var rad = Math.atan2(event.pageX - x, event.pageY - y);
                var rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.style.webkitTransform = 'rotate(' + rot + 'deg)';
                eye.style.mozTransform = 'rotate(' + rot + 'deg)';
                eye.style.msTransform = 'rotate(' + rot + 'deg)';
                eye.style.transform = 'rotate(' + rot + 'deg)';
            });
            eyer.forEach(eye => {
                var eyeRect = eye.getBoundingClientRect();
                var x = eyeRect.left + (eyeRect.width / 2);
                var y = eyeRect.top + (eyeRect.height / 2);
                var rad = Math.atan2(event.pageX - x, event.pageY - y);
                var rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.style.webkitTransform = 'rotate(' + rot + 'deg)';
                eye.style.mozTransform = 'rotate(' + rot + 'deg)';
                eye.style.msTransform = 'rotate(' + rot + 'deg)';
                eye.style.transform = 'rotate(' + rot + 'deg)';
            });
        });

    }, []);



    return (
        <div className='move-area'>
            <div className="bo">
                <div className="face">
                    <div className="earL" />
                    <div className="earR" />
                    <div class='.container4'>
                        <div class='eyel'></div>
                        <div class='eyer'></div>
                    </div>
                    <div className="hairs" />
                    <div className="nose" />
                    <div className="mouth" />
                    <div className="smileL">
                        <svg xmlSpace="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                            <filter id="blurMe">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={0} />
                            </filter>
                            <path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#FF0000" filter="url(#blurMe)" />
                            <path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#FF0000" filter="url(#blurMe)" />
                            <path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#FF0000" filter="url(#blurMe)" />
                        </svg>
                    </div>
                    <div className="smileR">
                        <svg xmlSpace="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                            <filter id="blurMe">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={0} />
                            </filter>
                            <path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#FF0000" filter="url(#blurMe)" />
                            <path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#FF0000" filter="url(#blurMe)" />
                            <path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#FF0000" filter="url(#blurMe)" />
                        </svg></div>
                    <div className="snow">
                        <div className="mountain-cap-1" />
                        <div className="mountain-cap-2" />
                        <div className="mountain-cap-3" />
                        <div className="mountain-cap-4" />
                        <div>
                        </div>
                    </div>
                </div></div>

        </div>
    )
}

export default Bo

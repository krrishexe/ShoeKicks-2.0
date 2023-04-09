import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Shoe = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        setTimeout(() => {

            fetchMoreData();
        }, 2000);
    },[])

    const fetchMoreData = async () => {
        const url = `http://localhost:5000/posts/`;
        let data = await fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        let parsedData = await data.json()
        // console.log(parsedData)
        // console.log(parsedData[0])
        setProducts((parsedData[0].products))
        setLoading(false)

        // setTotalResults(parsedData.totalResults)
    };

    return (
        <div>
            <div className="App">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">

                    {
                        loading
                            ?
                            <>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div class="product-card" >
                                            <div class="badge">Hot</div>
                                            <div class="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div class="product-details">
                                                <span class="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="#"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div class="product-card" >
                                            <div class="badge">Hot</div>
                                            <div class="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div class="product-details">
                                                <span class="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="#"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div class="product-card" >
                                            <div class="badge">Hot</div>
                                            <div class="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div class="product-details">
                                                <span class="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="#"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div class="product-card" >
                                            <div class="badge">Hot</div>
                                            <div class="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div class="product-details">
                                                <span class="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="#"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div class="product-card" >
                                            <div class="badge">Hot</div>
                                            <div class="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div class="product-details">
                                                <span class="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="#"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div class="product-card" >
                                            <div class="badge">Hot</div>
                                            <div class="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div class="product-details">
                                                <span class="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="#"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                            :
                            products.map((element) => {
                                return <div key={element.url} className='bigCard'>
                                    <ShoeItem vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images0={element.images[0]} images1={element.images[1]} price={element.price} />
                                </div>
                            }).slice(0,6)
                    }
                </SkeletonTheme>
            </div>



        </div>



    )
}

export default Shoe



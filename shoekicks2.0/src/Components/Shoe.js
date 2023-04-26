import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'
import HomeContainer from '../Containers/HomeContainer'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from './Footer' 


const Shoe = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    let page = 0;

    let past_height = 0;

    useEffect(() => {

        setTimeout(() => {

            fetchMoreData();
        }, 2000);


        window.addEventListener('scroll', () => {

            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            // console.log({ scrollTop, scrollHeight, clientHeight });

            // console.log(past_height, scrollHeight)
                    if (clientHeight + scrollTop >= scrollHeight - 400) {
                        // console.log("to the bottom");
                        // show the loading animation once 

                        if (scrollHeight > past_height){
                        
                            showLoading();
                            past_height = scrollHeight;
                        }
                    }
        
        })
        const loading = document.querySelector('.loading')
        
        function showLoading() {
            // animation visible 
            loading.classList.add('show');
            // loading more data once it reaches to the bottom
            
            setTimeout(() => {
                
                fetchMoreData();
                loading.classList.remove('show');
                
            }, 2000);

        }
    }, [])
    

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


        setProducts((parsedData[0].products).slice(0,6 + page * 12))
        page+=1;
        setLoading(false)
       
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
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="/"><i class="fa fa-heart"></i></a>
                                                        <a href="/"><i class="fa fa-shopping-cart"></i></a>
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
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="/"><i class="fa fa-heart"></i></a>
                                                        <a href="/"><i class="fa fa-shopping-cart"></i></a>
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
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="/"><i class="fa fa-heart"></i></a>
                                                        <a href="/"><i class="fa fa-shopping-cart"></i></a>
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
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="/"><i class="fa fa-heart"></i></a>
                                                        <a href="/"><i class="fa fa-shopping-cart"></i></a>
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
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="/"><i class="fa fa-heart"></i></a>
                                                        <a href="/"><i class="fa fa-shopping-cart"></i></a>
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
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><Skeleton /> </div>
                                                    <div class="product-links">
                                                        <a href="/"><i class="fa fa-heart"></i></a>
                                                        <a href="/"><i class="fa fa-shopping-cart"></i></a>
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
                                    <HomeContainer vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images0={element.images[0]} images1={element.images[1]} price={element.price} />
                                </div>
                            })
                    }
                </SkeletonTheme>

                <div class="loading">
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                </div>
            </div>
            
        <Footer />


        </div>



    )
}

export default Shoe



import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Shoe = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    let page = 0;

    let past_height = 0;

    useEffect(() => {


        fetchMoreData();


        window.addEventListener('scroll', () => {

            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            // console.log({ scrollTop, scrollHeight, clientHeight });

            // console.log(past_height, scrollHeight)
            if (clientHeight + scrollTop >= scrollHeight - 500) {
                // console.log("to the bottom");
                // show the loading animation once 

                if (scrollHeight > past_height) {

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

            }, 3000);

        }
    }, [])


    const fetchMoreData = async () => {
        const url = `http://localhost:5000/api/v1/posts`;
        // const url = `https://shoekicks.onrender.com/posts/`;
        let data = await fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        let parsedData = await data.json()

        setProducts((parsedData[0].products).slice(0, 6 + page * 12))
        page += 1;
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
                                        <div className="product-card" >

                                            <div className="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div className="product-bottom-details">
                                                    <div className="product-price"><Skeleton /> </div>
                                                    <div className="product-links">
                                                        <a href="/"><i className="fa fa-heart"></i></a>
                                                        <a href="/"><i className="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div className="product-card" >

                                            <div className="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div className="product-bottom-details">
                                                    <div className="product-price"><Skeleton /> </div>
                                                    <div className="product-links">
                                                        <a href="/"><i className="fa fa-heart"></i></a>
                                                        <a href="/"><i className="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div className="product-card" >

                                            <div className="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div className="product-bottom-details">
                                                    <div className="product-price"><Skeleton /> </div>
                                                    <div className="product-links">
                                                        <a href="/"><i className="fa fa-heart"></i></a>
                                                        <a href="/"><i className="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div className="product-card" >

                                            <div className="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div className="product-bottom-details">
                                                    <div className="product-price"><Skeleton /> </div>
                                                    <div className="product-links">
                                                        <a href="/"><i className="fa fa-heart"></i></a>
                                                        <a href="/"><i className="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div className="product-card" >

                                            <div className="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div className="product-bottom-details">
                                                    <div className="product-price"><Skeleton /> </div>
                                                    <div className="product-links">
                                                        <a href="/"><i className="fa fa-heart"></i></a>
                                                        <a href="/"><i className="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bigCard">
                                    <div className='moreCards'>
                                        <div className="product-card" >

                                            <div className="product-tumb">
                                                <Skeleton height={303} width={380} />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-catagory"> <Skeleton /> </span>
                                                <h4><a href="/"> <Skeleton /> </a></h4>
                                                <div className="product-bottom-details">
                                                    <div className="product-price"><Skeleton /> </div>
                                                    <div className="product-links">
                                                        <a href="/"><i className="fa fa-heart"></i></a>
                                                        <a href="/"><i className="fa fa-shopping-cart"></i></a>
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
                                    <ShoeItem id={element.id ? element.id : ""} vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images0={element.images[0]} images1={element.images[1]} price={element.price} element={element} />
                                </div>
                            })
                    }
                </SkeletonTheme>


                <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster loading">
                    <div className="wheel" />
                    <div className="hamster">
                        <div className="hamster__body">
                            <div className="hamster__head">
                                <div className="hamster__ear" />
                                <div className="hamster__eye" />
                                <div className="hamster__nose" />
                            </div>
                            <div className="hamster__limb hamster__limb--fr" />
                            <div className="hamster__limb hamster__limb--fl" />
                            <div className="hamster__limb hamster__limb--br" />
                            <div className="hamster__limb hamster__limb--bl" />
                            <div className="hamster__tail" />
                        </div>
                    </div>
                    <div className="spoke" />
                </div>

            </div>



        </div>



    )
}

export default Shoe



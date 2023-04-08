import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'
import Cardskeleton from './Cardskeleton';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Shoe = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        setTimeout(() => {

            fetchMoreData();
        }, 2000);
    })

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
        setProducts(products.concat(parsedData[0].products))
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
                                <Cardskeleton />
                                <Cardskeleton />
                                <Cardskeleton />
                                <Cardskeleton />
                                <Cardskeleton />
                                <Cardskeleton />
                                   
                            </>

                            :
                            
                            products.map((element) => {
                                return <div key={element.url} className='bigCard'>
                                    <ShoeItem vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images={element.images} price={element.price} />
                                </div>
                            })
                    }
                </SkeletonTheme>
            </div>



        </div>



    )
}

export default Shoe



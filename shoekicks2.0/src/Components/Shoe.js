import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'

const Shoe = (props) => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {

        fetchMoreData();


        // fetch('http://localhost:5000/posts/', {
        //     mode: 'no-cors',
        //     method: 'GET',
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then((json) => {
        //         console.log(json.images);
                // setLoading(false);
                // setData(json);
        //     })
    })

    const fetchMoreData = async () => {
        const url = `http://localhost:5000/posts`;
        let data = await fetch(url,{
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        // setTotalResults(parsedData.totalResults)
    };

    return (
        <div>
            <div className="App">
            <div className="row">
                {articles.map((element) => {
                    return <div>
                        <ShoeItem vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images={element.images} source={element.source.name} />
                    </div>
                })}
            </div> 
            </div>


        </div>
    )
}

export default Shoe



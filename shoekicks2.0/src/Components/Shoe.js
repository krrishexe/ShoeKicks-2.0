import React, { useState, useEffect } from 'react'
import ShoeItem from './ShoeItem'

const Shoe = (props) => {

    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    

    useEffect(() => {
        fetch(`http://localhost:5000/posts`,{
            mode: 'no-cors',
            method: 'GET',
        })
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                // setLoading(false);
                setData(json);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            })
    }, [])


    return (
        <div>
            <div className="App">
                <ShoeItem />
                {/* {loading && <p>Loading...</p>}
                {!loading && <p>Fetched data</p>} */}
            </div>


        </div>
    )
}

export default Shoe


{/* <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.link}>
                        <ShoeItem vendor={element.vendor ? element.vendor : ""} name={element.name ? element.name : ""} images={element.images} source={element.source.name} />
                    </div>
                })}
            </div> */}
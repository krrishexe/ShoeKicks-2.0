import React from 'react'
import ShoeItem from './ShoeItem'


function RelatedProducts() {
    return (
        <>
            <h2 className='tcCenter'>Related Products</h2>
            <div className='related-products'>
                <ShoeItem />
                <ShoeItem />
                <ShoeItem />
            </div>
        </>
    )
}

export default RelatedProducts

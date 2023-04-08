import React from 'react'
import Skeleton from 'react-loading-skeleton'

function Cardskeleton() {
    return (
        <div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardskeleton

import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import RelatedProducts from './RelatedProducts'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";
import { SiReebok } from "react-icons/si";




function Shoes() {
  const [particularData, setParticularData] = useState([])

  const { id } = useParams()
  const { /* data */ } = useContext(UserContext) // Commented out as it's not used

  const fetchParticularData = async (id) => {
    const url = `http://localhost:5000/api/v1/posts/${id}`
    let data = await fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    let parsedData = await data.json()
    console.log(parsedData.products)

    setParticularData(parsedData.products)
  }
  useEffect(() => {
    fetchParticularData(id)
  }, [id]) // Added id as a dependency

  return (
    <>
      {
        particularData.map((item) => {
          return (
            <div key={item.id}>

              <div className="container1">
                <div className="row">
                  <div className="col-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div>
                  <h1 className='tcCenter'>ShoeKick Original's</h1>
                  <br />
                </div>
              </div>
              <div key={item.id}>


                <div className='twoFlex'>

                  <div className="images-section parent">
                    <div className="main-image">
                      <img className='spacey-bw' src={item.images[0]} alt="" />
                    </div>
                    <div className="small-images">
                      <img className='spacey-bw' src={item.images[1]} alt="" />
                      <img className='spacey-bw' src={item.images[2]} alt="" />
                      <img className='spacey-bw' src={item.images[3]} alt="" />
                    </div>
                  </div>

                  <div className="articles-desc">

                    <div className='vendor-name'>
                      <span className='vendor'>{
                        item.vendor.includes('Nike') ? <div className='flx-wave'> <SiNike className='brand-logo' />  {item.vendor}</div> :
                          item.vendor.includes('Adidas') ? <div className='flx-wave'> <SiAdidas className='brand-logo' /> {item.vendor}</div> :
                            item.vendor.includes('Puma') ? <div className='flx-wave'> <SiPuma className='brand-logo' /> {item.vendor}</div> :
                              item.vendor.includes('Reebok') ? <div className='flx-wave'> <SiReebok className='brand-logo' /> {item.vendor}</div> :
                                item.vendor.includes('Jordan') ? <div className='flx-wave'> <SiJordan className='brand-logo' /> {item.vendor}</div> : <div>
                                  <GiConverseShoe /> {item.vendor}
                                </div>
                      }</span>

                    </div>

                    <h2 className='genos'>{item.name}</h2>
                    <span className='descc'>{item.shoe_type} </span>
                    <p className='descc'>{item.description}</p>


                    <h3 className='vendor'>{item.price}</h3>

                      <span className='descc'>{item.size_type} : </span>
                    <div>
                      {item.sizes.map((size, index) => (
                        <button key={index} type='checkbox' className='checkbox'>{size}</button>
                      ))}
                      
                    </div>

                    <div className='quantity-buttons'>
                      <span>-</span>
                      <span>5</span>
                      <span>+</span>
                    </div>
                    <div>
                      <button className='add-to-cart'>Add to cart <AiOutlineShoppingCart /> </button>
                    </div>

                  </div>

                </div>
                <RelatedProducts />
              </div>
            </div>
          )
        })
      }
    </>

  )
}

export default Shoes
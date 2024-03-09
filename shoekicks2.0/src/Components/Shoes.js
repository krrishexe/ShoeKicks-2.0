import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import RelatedProducts from './RelatedProducts'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";
import { SiReebok } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';



function Shoes() {
  const [particularData, setParticularData] = useState([])
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const { id } = useParams()
  const { /* data */ } = useContext(UserContext) // Commented out as it's not used

  const handleImageSwap = (index) => {
    setMainImage(particularData[0].images[index]);
  }

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
    setParticularData(parsedData.products)
    if (parsedData.products[0]) {
      setMainImage(parsedData.products[0].images[0]);
    }
  }
  useEffect(() => {
    fetchParticularData(id)
  }, [id, selectedSize]) // Added id as a dependency

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
                        <li className="breadcrumb-item"><Link to={'/'}><i className="fa fa-home" /> Home</Link></li>
                        <li className="breadcrumb-item"><Link to={"/Products"}><FaShopify />  Shop</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div>
                  <h1 className='tcCenter'>ShoeKick Original's</h1>
                </div>
              </div>



              <div className='twoFlex'>

                <div className="images-section parent">
                  <div style={{ borderRadius: '15px' }} className="main-image">
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: mainImage,
                        width: 400,
                        height: 600

                      },
                      largeImage: {
                        src: mainImage,
                        height: 1200,
                        width: 1200

                      },
                      isHintEnabled: true,
                      hoverDelayInMs: 100,

                    }} />
                    {/* <img className='spacey-bw' src={item.images[0]} alt="" /> */}
                  </div>
                  <div className="small-images">
                    {item.images.slice(1, 4).map((image, index) => (
                      <img
                        key={index}
                        className='spacey-bw'
                        src={image}
                        alt=""
                        onClick={() => handleImageSwap(index + 1)} // Add onClick handler
                      />
                    ))}
                  </div>
                </div>

                <div className="articles-desc">

                  <div className='vendor-name'>
                    <span className='vendor'>{
                      item.vendor.includes('Nike') ? <div className='flx-wave'> <SiNike className='brand-logo' />  {item.vendor}</div> :
                        item.vendor.includes('Adidas') ? <div className='flx-wave'> <SiAdidas className='brand-logo' /> {item.vendor}</div> :
                          item.vendor.includes('Puma') ? <div className='flx-wave'> <SiPuma className='brand-logo' /> {item.vendor}</div> :
                            item.vendor.includes('Reebok') ? <div className='flx-wave'> <SiReebok className='brand-logo' /> {item.vendor}</div> :
                              item.vendor.includes('Jordan') ? <div className='flx-wave'> <SiJordan className='brand-logo' /> {item.vendor}</div> : <div className='flx-wave'>
                                <GiConverseShoe /> {item.vendor}
                              </div>
                    }</span>

                  </div>

                  <h2 className='genos'>{item.name}</h2>
                  <span className='descc'>{item.shoe_type} </span>
                  <p className='descc'>{item.description}</p>


                  <h3 className='vendor' style={{ marginTop: "10px" }}>{item.price}</h3>

                  <span className='descc'>{item.size_type} : </span>
                  <div className='flex-buttons'>
                    <div>
                      {item.sizes.map((size, index) => (
                        <button
                          key={index}
                          type='button'
                          className={`checkbox ${size === selectedSize ? 'selected' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <a className='descc'>Size Chart</a>

                  </div>
                  <span className='descc'>Quantity : </span>
                  <div className='quantity-buttons'>
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                  </div>
                  <div style={{ marginTop: "20px", width: "600px" }}>
                    <button className='add-to-cart'> <span className='IconContainer'><AiOutlineShoppingCart /></span > <p className='text1'>Add to cart</p> </button>
                  </div>

                </div>

              </div>
              <RelatedProducts />
            </div>

          )
        })
      }
    </>

  )
}

export default Shoes
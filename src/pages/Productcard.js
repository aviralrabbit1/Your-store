import React from 'react'
import StarRatings from 'react-star-ratings';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';

const Productcard = () => {
  return (
    <div className='col-3'>
        <div className='product-card position-relative'>
            <Link>
                <div className='wishlist-icon position-absolute'>
                    <Link><img src="images/wish.svg" alt="" /></Link>
                    
                </div>
                <div className='product-image'>
                    <img className='img-fluid' 
                    src="images/watch.jpg" alt="product image1" />
                    <img className='img-fluid' 
                    src="images/headphone.jpg" alt="product image2" />
                    
                </div>
                <div className='product-details'>
                    <h6>Havels</h6>
                    <h5 className='product-title'> Kids headphones</h5>
                    {/* <StarRatings
                        rating={2.303}
                        starDimension="30px"
                        starSpacing="5px"
                        starRatedColor="blue"
                        // changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                    /> */}
                    <ReactStars
                            count={5}
                            value='4.33'
                            // onChange={ratingChanged}
                            size={34}
                            isHalf={true}
                            edit={false}    // will stop us from editing directly
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    <p className='product-price'>Rs 2200</p>
                    
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15 py-3 me-4'>
                        <Link>
                        <img src="images/prodcompare.svg" alt="compare product" />                        
                        </Link>
                        <Link>
                        <img src="images/view.svg" alt="view" />                        
                        </Link>
                        <Link>
                        <img src="images/add-cart.svg" alt="Add to cart" />                        
                        </Link>
                        
                    </div>
                    
                </div>
            </Link>
        </div>
      
    </div>
  )
}

export default Productcard

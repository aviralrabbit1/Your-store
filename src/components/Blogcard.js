import React from 'react'
import {Link} from 'react-router-dom';

const Blogcard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img className='img-fluid' 
                src="images/blog-1.jpg"  alt="" />
                
            </div>
            <div className='blog-content'>
                <p className='date'>6 March, 2023</p>
                <h5 className='title'>
                    What a beautiful day!
                </h5>
                <p className='description'>Lorem ipsum dolor sit amet</p>
                <Link className='button' to='/'>Read More</Link>

                
            </div>
        </div>
      
    </div>
  )
}

export default Blogcard

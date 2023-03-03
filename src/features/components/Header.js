import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
    <div>
<header class="header-top-strip py-3">
  {/* padding from top/bottom, px = padding left/right, ps = p start, pe = p end */}
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-6'>
        <p className='text-white mb-0'>Free shippping over 500 RS</p>
        
      </div>
      <div className='col-6'>
        <p className="text-end text-white">  {/* text-align: right */}
        Hotline: <a className='text-white' href="tel:+91 8318055410">+91 8318055410</a>
        </p>
      </div>
      
    </div>
    
  </div>

</header>
<header class="header-upper py-3">
<div className='container-xxl'>
    <div className='row align-items-center'>
      <div className='col-2'>
        <h2>
          <Link className='text-white'>Developers</Link>
        </h2>
      </div>
      <div className='col-5'>
      <div className="input-group">
        <input type="text" className="form-control py-2" 
        placeholder="Search Product" 
        aria-label="Search Product" 
        aria-describedby="basic-addon2"
        />

        <span className="input-group-text p-3" 
        id="basic-addon2"><BsSearch className='fs-6'/> </span>
      </div>
      </div>
      <div className='col-5'>
        <div className='header-upper-links d-flex align-items-center 
        justify-content-between'>
          <div>
            <Link className='d-flex align-items-center gap-10'>
            <img src="https://static.thenounproject.com/png/141961-200.png" alt="Compare" />
            <p className='mb-0'>
              Compare <br/> Products
            </p></Link>
          </div>
          <div>
            <Link className='d-flex align-items-center gap-10'>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/wishlist-1859797-1577201.png" alt="wishlist" />
            <p className='mb-0'>
              My <br/> Wishlist
            </p></Link>
          </div>
          <div>
            <Link className='d-flex align-items-center gap-10'>
            <img src="data:image/png;base64,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" alt="Login" />
            <p className='mb-0'>
              Login <br/> My Account  
            </p></Link>
          </div>
          <div>
            <Link className='d-flex align-items-center gap-10'>
            <img src="data:image/png;base64,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" alt="Cart" />
            <div className='d-flex flex-column'> 
              <span className='badge bg-white text-dark'>0</span>
            </div>
            <p className='mb-0'> Rs 500

            </p></Link>
          </div>
          <div>
            <Link>
            <img src="/images/" alt="" />
            <p></p></Link>
          </div>
          
        </div>
      </div>
      
    </div>
    
  </div>

</header>
    </div>
  )
}

export default Header

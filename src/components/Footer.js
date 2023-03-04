import React from 'react';
import {Link} from 'react-router-dom';
import {BsLinkedin, BsGithub, BsInstagram, BsFacebook, BsYoutube} from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="https://www.freeiconspng.com/uploads/newsletter-icon-0.png" 
                alt="newsletter" height='50px' />
                <h2 className='mb-0 text-white'>Sign Up for newsletter</h2>
              </div>
              
            </div>
            <div className='col-7'>
              <div className="input-group py-1">
                <input type="text" className="form-control py-2" 
                placeholder="Your Email Adress" 
                aria-label="Your Email Adress" 
                aria-describedby="basic-addon2"
                />

                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact</h4>
              <div>
                <address className='text-white fs-6'>
                  Aviral Verma <br/>
                  Gafur Khan Lane, <br/>
                  Welesly Ganj,    <br/>
                  Mirzapur, 231001 <br/>
                  Uttar Pradesh
                </address>
                <a href="tel:+91 8318055410" className='mt-4 d-block mb-3 text-white'>+91 8318055410</a>
                <a href="mailto:aviral.robin@gmail.com" className='mt-4 d-block mb-3 text-white'>aviral.robin@gmail.com</a>
                
              </div>
              <div className='social-icons d-flex align-itmes-center gap-30'>
                <a className='text-white' href="https://www.linkedin.com/in/aviral-verma-iiita/"> <BsLinkedin className='fs-4'/> </a>
                <a className='text-white' href="https://github.com/aviralrabbit1"> <BsGithub className='fs-4'/> </a>
                <a className='text-white' href="https://www.facebook.com/aviral.varma.3"> <BsFacebook className='fs-4'/></a>
                <a className='text-white' href="https://www.instagram.com/aviral.rabbit/"> <BsInstagram className='fs-4'/> </a>                
                <a className='text-white' href="https://www.youtube.com/channel/UCn-5DN10jktIfqLmo1Au0iA"> <BsYoutube className='fs-4'/> </a>                
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' >Privacy Policy</Link>
                <Link className='text-white py-2 mb-1' >Refund Policy</Link>
                <Link className='text-white py-2 mb-1' >Shipping Policy</Link>
                <Link className='text-white py-2 mb-1' >Blogs</Link>
                <Link className='text-white py-2 mb-1' >Terms and Conditions</Link>
                
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' >About us</Link>
                <Link className='text-white py-2 mb-1' >FAQ</Link>
                <Link className='text-white py-2 mb-1' >Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' >Accessories</Link>
                <Link className='text-white py-2 mb-1' >Laptops</Link>
                <Link className='text-white py-2 mb-1' >Headphone</Link>
                <Link className='text-white py-2 mb-1' >Tablets</Link>
                <Link className='text-white py-2 mb-1' >Watch</Link>
                
              </div>
            </div>
            
          </div>
          
        </div>
        
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>            
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Developed by Aviral Verma </p>
              
            </div>
            
          </div>
        </div>        
      </footer>
    </div>
  )
}

export default Footer

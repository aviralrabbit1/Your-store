import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative py-2'>
                <img className='img-fluid rounded-3' 
                src="images/main-banner-1.jpg" 
                alt="main banner" />
                
                <div className='main-banner-content position-absolute'>
                  <div className='main-banner-content-info'>                  
                  <h4>Supercharged for pros!</h4>
                  <h5>ipad S13+ Pro</h5>
                  <p>From 65000 Rs</p>
                  <Link className='button'>BUY NOW!</Link>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>

                <div className='small-banner position-relative p-2'>
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-01.jpg" 
                    alt="main banner" 
                    />                    
                    <div className='small-banner-content position-absolute'>
                      <div className='main-banner-content-info'>                  
                      <h4>Supercharged for pros!</h4>
                      <h5>MAC Air Pro</h5>
                      <p>From 80000 Rs</p>
                      {/* <Link className='button'>BUY NOW!</Link> */}
                      </div>
                    </div>
                  </div>
                  <div className='small-banner position-relative p-2'>
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-02.jpg" 
                    alt="main banner" 
                    />                    
                    <div className='small-banner-content position-absolute'>
                      <div className='main-banner-content-info'>                  
                      <h4>Supercharged for pros!</h4>
                      <h5>I Watch</h5>
                      <p>From 15000 Rs</p>
                      {/* <Link className='button'>BUY NOW!</Link> */}
                      </div>
                    </div>
                  </div>
                  <div className='small-banner position-relative p-2'>
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-03.jpg" 
                    alt="main banner" 
                    />                    
                    <div className='small-banner-content position-absolute'>
                      <div className='main-banner-content-info'>                  
                      <h4>Supercharged for pros!</h4>
                      <h5>IPad Pro</h5>
                      <p>From 35000 Rs</p>
                      {/* <Link className='button'>BUY NOW!</Link> */}
                      </div>
                    </div>
                  </div>
                  <div className='small-banner position-relative p-2'>
                    <img className='img-fluid rounded-3' 
                    src="images/catbanner-04.jpg" 
                    alt="main banner" 
                    />                    
                    <div className='small-banner-content position-absolute'>
                      <div className='main-banner-content-info'>                  
                      <h4>Supercharged for pros!</h4>
                      <h5>IPHONE Headphones</h5>
                      <p>From 25000 Rs</p>
                      {/* <Link className='button'>BUY NOW!</Link> */}
                      </div>
                    </div>
                </div>                              
                </div>            
              </div>
          </div>
          
        </div>
        
      </section>
    </div>
  )
}

export default Home

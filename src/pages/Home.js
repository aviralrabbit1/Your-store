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
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-30'> 
                  <img src="images/service.png" alt="services" />
                  <div> {/* putting texts on top of each other */}                                        
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>For all orders over Rs 500</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-30'> 
                  <img src="images/service-02.png" alt="services" />
                  <div>                    
                    <h6>Daily offers!</h6>
                    <p className='mb-0'>Save upto 50% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-30'> 
                  <img src="images/service-03.png" alt="services" />
                  <div>                    
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-30'> 
                  <img src="images/service-04.png" alt="services" />
                  <div>                    
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get everything at real prices!</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-30'> 
                  <img src="images/service-05.png" alt="services" />
                  <div>                    
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% safe</p>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>TV</h6>
                    <p>12 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Watch</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>TV</h6>
                    <p>12 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Watch</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
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

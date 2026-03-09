import React from 'react'
import '../../css/Story.css'
import CheckIcon from '@mui/icons-material/Check';
import story from '../../assets/images/r3-img-1.webp'

function Story
() {
  const story ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/iadzqmfi8a7fjcloukmg.webp"
  return (
   <div className='container'>
     <div className='row'>
        <div className="col-lg-6">
                <h1 className='story-title'>The Number Story</h1>
                <p className='story-des'>With our tailor-made, End-to-End business solutions, we are devoted to 
                  catering the best experience to you. Stepping into the world of successful business in 
                    today’s high-competitive world was a challenge! 
                   Our solutions are scalable so that your business can grow 
                   and succeed.</p>
          </div>
            <div className="col-lg-6">
              <img src={story} alt="story" className='story-img'/> 
            </div>
           <div className='row'>
              <div className='col-xl-3 col-md-6'>
                
              </div>
              <div className='col-xl-3 col-md-6'>
              </div>
 
              <div className='col-xl-3 col-md-6'>
                   <div className="box1">
                  <h4 className='box1_head'>Our Journey</h4>
                  <div className='row'>
                  <div className='col-lg-6 col-6 d-flex align-items-center justify-content-center'>
                  <p  className='box'>
            
                       <CheckIcon  className='story-icon'/></p>
                  </div>
                  <div className='col-lg-6 col-6'>
                  <p  className='story-para'>
                      100%
                       </p>
                       <p  className='story-para1'>Result</p>
                  </div>
                  

                  </div>
                  </div> 
              </div>

              <div className='col-xl-3 col-md-6'>
               
              </div>
            </div> 
      
      </div>
   </div>
    
   
  )
}

export default Story

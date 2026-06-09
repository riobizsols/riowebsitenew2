import '../../css/Story.css';
import LazyImage from '../LazyImage';
import { cloudinaryUrl } from '../../utils/cloudinary';

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

const STORY_IMAGE =
  'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/iadzqmfi8a7fjcloukmg.webp';

function Story() {
  const storySrc = cloudinaryUrl(STORY_IMAGE, { width: 640, format: 'auto', quality: 'auto' });

  return (
   <div className='container'>
     <div className='row'>
        <div className="col-lg-6">
                <h2 className='story-title'>The Number Story</h2>
                <p className='story-des'>With our tailor-made, End-to-End business solutions, we are devoted to 
                  catering the best experience to you. Stepping into the world of successful business in 
                    today’s high-competitive world was a challenge! 
                   Our solutions are scalable so that your business can grow 
                   and succeed.</p>
          </div>
            <div className="col-lg-6">
              <LazyImage
                src={storySrc}
                alt="RioBizSols team celebrating business growth"
                className="story-img"
                width={640}
                height={480}
              />
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

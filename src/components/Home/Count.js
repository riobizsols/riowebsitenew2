import React,{useState, useEffect} from 'react'
import '../../css/Story.css';
import MovingIcon from './Moving';

function Count() {

  const [count, setCount] = useState(0); // Initialize state to 0
  const maxCount = 50; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 80);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render


  const [count1, setCount1] = useState(0); // Initialize state to 0
  const maxCount1 = 100; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount1((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount1) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 80);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const [count2, setCount2] = useState(0); // Initialize state to 0
  const maxCount2 = 4; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount2((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount2) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const [count3, setCount3] = useState(0); // Initialize state to 0
  const maxCount3 = 20; // Set maximum count

  useEffect(() => {
    // Set up a timer that increases the count every 1 second (1000 ms)
    const interval = setInterval(() => {
      setCount3((prevCount) => {
        // Check if the count has reached the maximum value
        if (prevCount >= maxCount3) {
          clearInterval(interval); // Clear the interval if max count is reached
          return prevCount; // Return the previous count to stop incrementing
        }
        return prevCount + 1; // Increment count by 1
      });
    }, 80);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render



  return (
  <>
    <div className='container'>
      <div className="row counter">
      <div className="col-12 col-md-3">
        
      <h1 className='count2'>{count}+</h1>
      <h2 className='count-title2'>Brands</h2>
          <p className='count-des2'> Businesses have put their trust in us and for a good reason. 
            Our expertise and dedication have helped them 
            achieve unparalleled growth and success. 
            Let us do the same for you.</p>
            
      </div>
      <div className="col-12 col-md-3">
      <h2 className='count2'>{count1}+</h2>
          <h2 className='count-title2'>Customers</h2>
          <p className='count-des2'>Satisfied customers who have trusted us to provide exceptional service and quality products. 
            We are committed to your satisfaction and look forward to exceeding your expectations.</p>
        
      </div>
      <div className="col-12 col-md-3">
      <h2 className='count2'>{count2}+</h2>
          <h2 className='count-title2'>Experience</h2>
          <p className='count-des2'>Extensive years of expertise in providing end-to-end business solutions. 
            Whether you need assistance in planning or implementation, 
            we have the skills to ensure project success.</p>
      </div>
      <div className="col-12 col-md-3">
      <h2 className='count2'>{count3}+</h2>
          <h2 className='count-title2'>Product Implementations</h2>
          <p className='count-des2'>RIO solutions successfully implemented for customers across industries, 
            from first rollout to ongoing optimization of their product stack.</p>
      </div>
      </div>
    </div>
    <div className="count-divider-wrap">
      <div className="count-divider-line" aria-hidden="true" />
      <MovingIcon />
    </div>
  </>
  )
}
export default Count

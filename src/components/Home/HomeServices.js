import React from 'react'
import LazyImage from '../LazyImage';
import '../../css/home-service.css'
import Digital from '../../../src/assets/images/dm.png';
import Web from '../../../src/assets/images/wd.png';
import App from '../../../src/assets/images/ad.png';
import Staff from '../../../src/assets/images/staff.png';
// MODIFIED: Removed ERP and IP imports (2026-01-18)
// NOTE: ALM uses a package icon from cloudinary
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';



function Services() {
  // MODIFIED: Image URLs updated (2026-01-18)
  // Removed ERP and IP URLs
  // Added ALM icon URL
  const Web ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png"
  const Digital ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/m0v93zn1r5ehnqamqhpc.png"
  const App ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/bwa6k62zz3jvvfb8wsbx.png"
  const Staff ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png"
  // NEW: ALM Product icon
  const ALM ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png"

  return (
    <div className='service'>
        <h2 className='title'>Here’s How we Help You Succeed!</h2>
        <h4 className='subtitle-homeser'>Your success is our Success! With a clear vision of being “The World's best 
          End-to-End Business Solution provider” the RIO BizSols team ensures to help 
          from start to finish.</h4>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 ">
              <div className='card'>
              <Link to='/our-service/digital-marketing/' style={{textDecoration:'none', color:'White'}}><LazyImage src={Digital} alt="Digital Marketing" width={300} height={300}/></Link>
              
                <div className='info'>
                 
                <Link to='/our-service/digital-marketing/' style={{textDecoration:'none', color:'White'}}> <h1 className='title_head' >
                      Digital <br/>
                      Marketing
                    </h1></Link>
               
                   
                    <p className='descrip_para'>Committed to delivering high-performance results, 
                      we aim to provide complete digital marketing services to 
                      help you produce high-quality sales, improve ROI, 
                      and generate valuable leads for your business.</p>
                      <Divider style={{ background: 'white', width:'95%', margin: '10px auto'}}/>
                      <Link to='/our-service/digital-marketing/' style={{textDecoration:'none', color:'White'}}> <h4 className='title_head1'>To Known More</h4></Link>
                     
                     
                </div>


             </div>

              </div>
              <div className="col-lg-4 col-md-6">
              <div className='card'>
              <Link to='/our-service/web-development' style={{textDecoration:'none', color:'White'}}><LazyImage src={Web} alt="Web Development" width={300} height={300}/></Link>
                <div className='info'>
                  
                    <h1 className='title_head'>
                      Web <br/>
                      Development
                    </h1>
                    <p className='descrip_para'>Committed to delivering high-performance results, 
                      we aim to provide complete digital marketing services to 
                      help you produce high-quality sales, improve ROI, and generate 
                      valuable leads for your business.</p>
                      <Divider style={{ background: 'white', width:'95%', margin: '10px auto'}}/>
                      <Link to='/our-service/web-development' style={{textDecoration:'none', color:'White'}}> <h4 className='title_head1'>To Known More</h4></Link>

                </div>

             </div>
              </div>
              <div className="col-lg-4 col-md-6">
              <div className='card'>
              <Link to='/our-service/app-development' style={{textDecoration:'none', color:'White'}}>
              <LazyImage src={App} alt="App Development" width={300} height={300}/></Link>
                <div className='info'>
                <Link to='/our-service/app-development' style={{textDecoration:'none', color:'White'}}>
                    <h1 className='title_head'>
                      App <br/>
                      Development
                    </h1></Link>
                    <p className='descrip_para'>Committed to delivering high-performance results, 
                      we aim to provide complete digital marketing services to 
                      help you produce high-quality sales, improve ROI, and generate 
                      valuable leads for your business.</p>
                      <Divider style={{ background: 'white', width:'95%', margin: '10px auto'}}/>
                      <Link to='/our-service/app-development' style={{textDecoration:'none', color:'White'}}>
                      <h4 className='title_head1'>To Known More</h4></Link>
                </div>

             </div>
              </div>
            
              <div className="col-lg-4 col-md-6 ">
              <div className='card'>
              <Link to='/our-service/staffing' style={{textDecoration:'none', color:'White'}}>

              <LazyImage src={Staff} alt="Staffing Services" width={300} height={300}/></Link>
                <div className='info'>
                <Link to='/our-service/staffing' style={{textDecoration:'none', color:'White'}}>

                    <h1 className='title_head'>
                    Staffing
                    </h1></Link>
                    <p className='descrip_para'>Focusing on outsourced talent acquisition, 
                      temporary staffing, direct hiring, temp-to-hire, and on-premise staff management, 
                      RIO leverages recruitment expertise to address hiring needs in today's workforce.
                      <br/>
                      <br/>
                      </p>
                      <Divider style={{ background: 'white', width:'95%', margin: '10px auto'}}/>
                      <Link to='/our-service/staffing' style={{textDecoration:'none', color:'White'}}>

                      <h4 className='title_head1'>To Known More</h4></Link>
                </div>

             </div>

              </div>
              <div className="col-lg-4 col-md-6">
                {/* MODIFIED: Replaced ERP Software with RIO ALM Product (2026-01-18) */}
              <div className='card'>
              <Link to='/products/rio-alm' style={{textDecoration:'none', color:'White'}}>

              <LazyImage src={ALM} alt="RIO ALM" width={300} height={300}/></Link>
                <div className='info'>
                <Link to='/products/rio-alm' style={{textDecoration:'none', color:'White'}}>

                    <h1 className='title_head'>
                    RIO ALM
                    </h1></Link>
                    <p className='descrip_para'>Asset Lifecycle Management solution designed for enterprises. 
                      Track, manage, and optimize your assets throughout their entire lifecycle with RIO ALM's 
                      comprehensive platform for maintenance, depreciation, and compliance.</p>
                      <Divider style={{ background: 'white', width:'95%', margin: '10px auto'}}/>
                      <Link to='/products/rio-alm' style={{textDecoration:'none', color:'White'}}>

                      <h4 className='title_head1'>To Known More</h4></Link>
                </div>

             </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Services
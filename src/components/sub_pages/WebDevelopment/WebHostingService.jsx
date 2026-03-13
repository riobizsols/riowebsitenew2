import React from 'react'
import '../WebDevelopment/WebHostingService.css'
import { Helmet } from 'react-helmet-async';
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import ClientLogohead from '../../Home/ClientLogohead'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ContactFrom from '../../Services/ContactFrom'

const WebHostingService = () => {

  const w_s_banner = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/cwlxbfxzvn34wryynyln.jpg"
  const hosting = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599917/rio_main_website/bmstywuib98vym1fu60g.png"
  const basic = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/d6mk27vdu7uicxrzbyzf.png"
  const buss = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599897/rio_main_website/poaxkaxi1hpxg7dg5z5o.png"
  const enterprise_plan = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599909/rio_main_website/csd90d3hvs3z8dxaxd82.png"
  const web_h_1 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/gyevoxeu1ekp3cv4rdgc.png"
  const web_h_2 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/uks0vijcgvgpe5h8ujuk.png"
  const web_h_3 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/qhcaachypgtsbiozqlyw.png"
  const web_h_4 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599892/rio_main_website/unpzxiqbf9oyyfmzkm2b.jpg"
  const web_h_5 = "https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599952/rio_main_website/fhpf2deo3onebrbtk3as.png"

  return (
    <div >
      <Helmet>
        <title>Reliable Web Hosting Services | RioBizSols
        </title>
        <meta name="description" content="Discover fast and secure web hosting services with RioBizSols. Perfect for businesses looking to establish a strong online presence." />
        <meta name="keywords" content="web hosting service, best wordpress hosting, web hosting companies, website hosting companies
" />
      </Helmet>
        <div className='web-banner'>
            <img className='web-img' src={w_s_banner} alt="w_s_banner" />
            <div className='web-banner-wm'>Web-Hosting-Service</div>
        </div>

        <div className="web_main_content">
          <div className="web_main_intro">
        <div className="container_web_main">
          <div className="w_m_con">
            <h4>Fast-Secure-Reliable</h4>
          <h1 className='w_m_h'>RIO Web Hosting Services - Empowering Your Digital Journey</h1>
          <p className='w_m_p'>We understand the critical role that web hosting plays in the success of your online presence. Whether you’re a small business, an e-commerce platform, or a growing blog, RIO’s robust hosting solutions ensure your website is always up, running, and performing at its best.</p>
          <div ></div>
          <Link to='/contact'>
        <button className="get-started">LET'S CONNECT US! <ArrowCircleRightIcon/></button></Link>
          </div>
          <div className="w_m_img">
          <img className='web_main_img' src={hosting} alt="hosting"/>
          </div>
         </div>
          </div>
          <ClientLogohead/>
          <hr />

          <div className="web_hosting_service">
             <div className="stand-h">
                What makes us stand apart?
             </div>
             <div className="stand-p">
                In the digital age, your website is often the first interaction potential customers have with your business. Here's why investing in quality web hosting services is crucial for your success
             </div>
            <div className="stand-grid">
              <div className="expertise">
                <div className="expertise-h">
                <div className="stand-icon"><FaAnglesRight /></div>
                Enhanced Performance and Speed
                </div>
                <div className="expertise-con">
                 A slow website can frustrate visitors and drive them away. Reliable web hosting ensures your site loads quickly, providing a smooth user experience that keeps customers engaged and encourages them to stay longer.
                </div>
              </div>  

              <div className="expertise">
                <div className="expertise-h">
                <div className="stand-icon"><FaAnglesRight /></div>
                Improved Security
              </div>
              <div className="expertise-con">
                With cyber threats on the rise, protecting your website from attacks is more important than ever. Professional web hosting services offer robust security measures to safeguard your site and customer data, building trust and credibility.
              </div>
              </div> 

              <div className="expertise">
                <div className="expertise-h">
                <div className="stand-icon"><FaAnglesRight /></div>
                Better SEO Rankings
              </div>
              <div className="expertise-con">
                 Search engines favor websites that are fast, secure, and reliable. By choosing a reputable web hosting service, you can improve your site's SEO performance, helping you rank higher in search results and attract more organic traffic.
              </div>
                </div>

                <div className="expertise">
                <div className="expertise-h">
                <div className="stand-icon"><FaAnglesRight /></div>
                Scalability and Growth
              </div>
              <div className="expertise-con">
                As your business expands, your website needs to handle increased traffic and more complex operations. Quality web hosting services offer scalable solutions that grow with you, ensuring your site remains efficient and effective.
              </div>
              </div>

              <div className="expertise">
                <div className="expertise-h">
                <div className="stand-icon"><FaAnglesRight /></div>
                24/7 Customer Support
              </div>
              <div className="expertise-con">
                Technical issues can occur at any time, potentially disrupting your business. With 24/7 support, you can resolve problems quickly, minimizing downtime and maintaining a professional online presence.
              </div>
              </div>

              <div className="expertise">
                <div className="expertise-h">
                <div className="stand-icon"><FaAnglesRight /></div>
                Professional Email
              </div>
              <div className="expertise-con">
                 Web hosting services often include professional email accounts that use your domain name, adding credibility to your business communications and enhancing your brand image.
              </div>
              </div>
           </div>
          </div>

          <div className='web_hosting_service_prices'>
            <div className="stand-h">
              Web Hosting Services
             </div>
             <div className="stand-p">
             Launch your online store with ease. Our hosting plans support various e-commerce platforms and provide the security and speed needed for successful transactions. Moreover, install popular CMSs like WordPress, Joomla, and Drupal with a single click. Get your site up and running quickly and efficiently.
             </div>

             <div className="pricing-container">
            <div className="menu_wh basic">
                <div className="card-icon">
                    <img src={basic} alt="Basic" />
                </div>
                <h3>Basic Plan</h3>
                <p>Perfect for small websites and blogs.</p>
                <Link className='get_con' to='/contact'>
                <button className="get-connect">Get Started</button></Link>
                <ul>
                    <li>✅ 10 GB Storage</li>
                    <li>✅ Unlimited Bandwidth</li>
                    <li>✅ Free SSL Certificate</li>
                    <li>✅ 24/7 Support</li>
                </ul>
            </div>
            <div className="menu_wh professional">
                <div className="card-icon">
                    <img src={buss} alt="Professional Plan Icon" />
                </div>
                <h3>Professional Plan</h3>
                <p>Ideal for growing businesses.</p>
                <Link className='get_con' to='/contact'>
                <button className="get-connect">Get Started</button></Link>
                <ul>
                    <li>✅ 50 GB Storage</li>
                    <li>✅ Unlimited Bandwidth</li>
                    <li>✅ Free SSL Certificate</li>
                    <li>✅ Daily Backups</li>
                    <li>✅ 24/7 Support</li>
                </ul>
            </div>
            <div className="menu_wh enterprise">
                <div className="card-icon">
                    <img src={enterprise_plan} alt="Enterprise Plan Icon" />
                </div>
                <h3>Enterprise Plan</h3>
                <p>For large businesses and high-traffic websites.</p>
                <Link className='get_con' to='/contact'>
                <button className="get-connect">Get Started</button></Link>
                <ul>
                    <li>✅ Unlimited Storage</li>
                    <li>✅ Unlimited Bandwidth</li>
                    <li>✅ Free SSL Certificate</li>
                    <li>✅ Daily Backups</li>
                    <li>✅ Priority Support</li>
                    <li>✅ Dedicated IP Address</li>
                </ul>
            </div>
        </div>
          </div>

      <div className='Why_Choose_Us?'>
        <div className='staff_bg'>
           <div className="stand-h">Why Choose Us?</div>
           <div className="stand-p">When you choose RIO Web Hosting Services, you’re not just getting a hosting provider; you're partnering with a team committed to your online success.</div>
          
          <div className="custom-container">
                <div className="sub_custom_containers">
                    <img src={web_h_1} alt="Speed" className="custom-image-left" />
                    <div className="custom-card-left">
                      <h2 className='custom_card_head'>Lightning-Fast Speeds</h2>
                      <p>
                        In today's digital world, speed is crucial. Our cutting-edge technology and optimized servers deliver
                        lightning-fast load times, ensuring your visitors have a seamless experience on your site.
                      </p>
                    </div>
                </div>              
                <div className="sub_custom_containers">
                <img src={web_h_2} alt="Security" className="custom-image-right" />
                    <div className="custom-card-right">
                      <h2 className='custom_card_head'>Top-Notch Security</h2>
                      <p>
                        Your website's security is our top priority. With advanced security measures including SSL certificates, daily
                        backups, and continuous monitoring, you can rest easy knowing your data is safe with us.
                      </p>
                    </div>
                    </div>

                  <div className="sub_custom_containers">
                    <img src={web_h_3} alt="Uptime" className="custom-image-left" />
                    <div className="custom-card-left">
                      <h2 className='custom_card_head'>99.9% Uptime Guarantee</h2>
                      <p>
                        Downtime is detrimental to your business. Our reliable infrastructure guarantees 99.9% uptime, keeping your
                        site accessible to your customers around the clock.
                      </p>
                    </div>
                </div>
              
                <div className="sub_custom_containers">
                <img src={web_h_4} alt="Support" className="custom-image-right" />
                    <div className="custom-card-right">
                      <h2 className='custom_card_head'>24/7 Customer Support</h2>
                      <p>
                        Questions or issues can arise at any time. Our dedicated support team is available 24/7 to assist you with any
                        challenges you may face, ensuring your website remains operational and efficient.
                      </p>
                    </div>
                </div> 
              
                <div className="sub_custom_containers">
                    <img src={web_h_5} alt="Scalable" className="custom-image-left" />
                    <div className="custom-card-left">
                      <h2 className='custom_card_head'>Scalable Solutions</h2>
                      <p>
                        As your business grows, so do your hosting needs. Our scalable hosting plans are designed to evolve with you,
                        providing the resources you need without any hassle.
                      </p>
                    </div>
                </div> 
            </div>

        </div>
      </div>


          <div className="contact-con">
              <div className="contact-h">
               Let’s Discuss Your Project
              </div>
              <div className="contact-p">Ready to take your business to the next level?
               Contact RIO Analytics experts for a free consultation and discover how our web analytics services can transform your online presence.</div>
          </div>
           <div className="wm_contact">
             <ContactFrom/>
           </div>

      </div>
</div>
  )
}

export default WebHostingService
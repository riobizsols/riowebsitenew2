import React from 'react'
import DM from '../../assets/images/Digital-Marketing-1.jpg'
import WD from '../../assets/images/Web-development.jpg'
import App from '../../assets/images/App-development.png'
import staff from '../../assets/images/Staffing.jpg'
import ERP from '../../assets/images/ERP.jpg'
import IP from '../../assets/images/IPR.jpg'
import '../../css/Ser.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Divider from '@mui/material/Divider';
import Clientlogo from '../Home/Clientlogo'
import {Link} from 'react-router-dom'

export const MainServices = () => {
    const DM ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599906/rio_main_website/ntixfkstcjws2zse42yo.jpg"
    const WD ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599951/rio_main_website/yezvyawfuuwbcfw1ho8o.jpg"
    const App ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599894/rio_main_website/qvbwvkzbmlyx522ukbrd.png"
    const staff ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/b0xkxci7a8zsd4qtolpa.jpg"
    const ERP ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599909/rio_main_website/njlq9t6xhuyqpnrk2fax.jpg"
    const IP ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599921/rio_main_website/y0yylbskh7i9ldxi0mz7.jpg"
  return (
    <div>
        <h1 className='ser_title'>
            We Provide
        </h1>
        
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <div className='ser'> <img src={DM} alt="DM"  className='ser_img'/>
                    <h2>01</h2>
                   <p> <Link to='/our-service/digital-marketing/'><ArrowOutwardIcon/></Link></p>
                    <h3>Digital Marketing</h3>
                    </div>
                
                </div>
                <div className="col-md-6">
                <div className='ser'>  
                <h2>02</h2>
                <p> <ArrowOutwardIcon/></p>
                <h3>Web Development</h3>
                <img src={WD} alt="WD"  className='ser_img'/>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className='ser'>
                <h2>03</h2>
                <p> <Link to='/our-service/app-development'><ArrowOutwardIcon/></Link></p>
                <h3>App Develpment</h3>
                    <img src={App} alt="app"  className='ser_img'/>
                    </div>
                </div>
                <div className="col-md-6">
                <div className='ser'>
                <h2>04</h2>
                <p> <Link to='/our-service/staffing'><ArrowOutwardIcon/></Link></p>
                <h3>Staffing</h3>
                <img src={staff} alt="staff"  className='ser_img'/>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className='ser'>
                    <h2>05</h2>
                    <p> <Link to='/our-service/odoo/'><ArrowOutwardIcon/></Link></p>
                    <h3>ERP Software</h3>
                    <img src={ERP} alt="ERP"  className='ser_img'/>
                    </div>
                
                </div>
                <div className="col-md-6">
                <div className='ser'>
                <h2>06</h2>
                <p> <Link to='/our-service/ipr/'><ArrowOutwardIcon/></Link></p>
                <h3>Intellectual Property Rights</h3>
                <img src={IP} alt="IP"  className='ser_img'/>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
        <Divider className="col-12 col-md-6 divider-ser"/>
        <div className="client">
            <p className='client_subhead'>OUR CLIENT</p>
            <h2>
            Trusted By 1,000+ Companies
            </h2>
            <Clientlogo/>
        </div>
        </div>
       
    </div>
  )
}

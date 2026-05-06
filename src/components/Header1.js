import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Header.css'
import Logo from '../assets/images/RIO-Logo.png'
import {Link} from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Header1() {
  return (
    
    <Navbar expand="lg" className='nav_bar'>
    <Container>
      <Navbar.Brand href="/">
        <img src={Logo} alt=''/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mob-navbar" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="menu">
          <Nav.Link href="/">Home</Nav.Link>
          
          <NavDropdown title={<Link to='service'>Services</Link>} id="basic-nav-dropdown">  
         
            <NavDropdown.Item href="#action/3.1">Staffing</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Digital Marketing
            </NavDropdown.Item>
            <NavDropdown.Item href="">App Development</NavDropdown.Item>
           
            <NavDropdown.Item href="#action/3.4">
              Web Development
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Odoo ERP
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">
            Intellectual Property Rights
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/contact">Contact us</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
      
      <Row>
        <Col>
        <div  className='mob-menu-button'><button className='menu-button'>Contact Us</button></div>
        
        <div className='nav-social'>
        <FacebookRoundedIcon className='nav-social-icon'/>
            <LinkedInIcon  className='nav-social-icon'/>
            <YouTubeIcon  className='nav-social-icon'/>
           
        </div>
        
        </Col>
        {/* <Col className='nav-social'>
        <FacebookRoundedIcon className='nav-social-icon'/>
            <LinkedInIcon  className='nav-social-icon'/>
            <YouTubeIcon  className='nav-social-icon'/>
            <InstagramIcon  className='nav-social-icon'/>
        </Col> */}
      </Row>
    </Container>
  </Navbar>
  )
}

import React, { useState } from 'react'
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


export default function Header() {
  const [productsOpen, setProductsOpen] = useState(false);

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
          <Nav.Link href="/about">About</Nav.Link>
          <div
            className="products-dropdown-wrapper"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
          <NavDropdown
            title="Products"
            id="products-nav-dropdown"
            show={productsOpen}
            onToggle={setProductsOpen}
          >
            <NavDropdown drop="end" title="RIO ALM" id="products-alm-dropdown">
              <NavDropdown.Item href="/products/rio-alm">Overview</NavDropdown.Item>
              <NavDropdown.Item href="/products/rio-alm/pricing">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="/products/rio-alm/features">Features</NavDropdown.Item>
              <NavDropdown.Item href="/products/rio-alm/industries">Industries</NavDropdown.Item>
              <NavDropdown.Item href="/products/rio-alm/deployment">Deployment</NavDropdown.Item>
              <NavDropdown.Item href="/products/rio-alm/contact">Contact / Demo</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown drop="end" title="RIO MEMS" id="products-mems-dropdown">
              <NavDropdown.Item href="/products/medical-equipment-maintenance">Overview</NavDropdown.Item>
              <NavDropdown.Item href="/products/medical-equipment-maintenance/pricing">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="/products/medical-equipment-maintenance/features">Features</NavDropdown.Item>
              <NavDropdown.Item href="/products/medical-equipment-maintenance/industries">Industries</NavDropdown.Item>
              <NavDropdown.Item href="/products/medical-equipment-maintenance/contact">Contact / Demo</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown drop="end" title="AIssist" id="products-aissist-dropdown">
              <NavDropdown.Item href="/products/aissist">Overview</NavDropdown.Item>
              <NavDropdown.Item href="https://oneaissist.com/pricing" target="_blank" rel="noopener noreferrer">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="https://chromewebstore.google.com/detail/aissist-connect-comment-e/pncjbdpggmlfclmaifflmbidojgokban" target="_blank" rel="noopener noreferrer">Add to Chrome</NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          </div>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="/contact" className="contact-us-btn">Contact Us</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
      
      <Row>
        {/* <Col>
        <div  className='mob-menu-button'>
          <button className='menu-button'>Contact Us</button></div>
        
        <div className='nav-social'>
        <FacebookRoundedIcon className='nav-social-icon'/>
            <LinkedInIcon  className='nav-social-icon'/>
            <YouTubeIcon  className='nav-social-icon'/>
           
        </div>
        
        </Col> */}
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

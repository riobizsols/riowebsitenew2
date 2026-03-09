import React,{useState} from 'react'
import '../css/Header.css'
import {Link} from 'react-router-dom'

export const Menus = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
        <ul className="menu" onClick={() => setMenuOpen(!menuOpen)}>
         <li>
          <Link to="/">Home</Link>
          </li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
      </ul>
    
  )
}

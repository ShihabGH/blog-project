import React from 'react';
import Logo from '../assets/images/Orange.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const linkStyle = {
  textDecoration: "none",
  color: '#333',
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to="/"><img src={Logo} alt='company logo'/></Link>
        </div>
        <div className='links'>
          <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
          <Link className='link' to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className='link' to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
          <span>Mahi</span>
          <span>Logout</span>
          <span className='write'>
            <Link to="/write" style={linkStyle}>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
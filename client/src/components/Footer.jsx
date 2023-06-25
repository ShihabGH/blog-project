import React from 'react';
import Logo from '../assets/images/Orange.png';

const Footer = () => {
  return (
    <footer>
      <div className='contents'>
        <img src={Logo} alt='logo'/>
        <span>Made with passion</span>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import topHeaderLogo from '../assets/icons/nav-top-logo.png';
import companyLogo from '../assets/icons/company-logo.png';
import Image from 'next/image';

import searchLogo from '../assets/icons/search-logo.png';
import heartLogo from '../assets/icons/heart-logo.png';
import shoppingBagLogo from '../assets/icons/shopping-bag-logo.png';
import profileLogo from '../assets/icons/profile-logo.png';
import downArrow from '../assets/icons/down-arrow-logo.png';
import './navbar.css';

const Navabar = () => {
  return (
    <header>
      {/* top-nav-section */}
      <section id='header-top-section'>
        <div className='header-top-item d-none-mobile'>
          <Image src={topHeaderLogo} alt='' />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className='header-top-item d-none-mobile'>
          <Image src={topHeaderLogo} alt='' />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className='header-top-item'>
          <Image src={topHeaderLogo} alt='' />
          <p>Lorem ipsum dolor</p>
        </div>
      </section>
      
      {/* middle-nav-section */}
      <section id='header-body-section'>
        <div className='company-logo'>
          <Image src={companyLogo} />
        </div>
        <div className='company-title'>
          <h1>LOGO</h1>
        </div>
        <div id='header-navigation-icons'>
          <div>
            <Image src={searchLogo} alt='' />
          </div>
          <div>
            <Image src={heartLogo} alt='' />
          </div>
          <div>
            <Image src={shoppingBagLogo} alt='' />
          </div>
          <div className='d-none-mobile'>
            <Image src={profileLogo} alt=''/>
          </div>
          <div className='d-none-mobile' style={{display : 'flex' , alignItems: 'center'}}>
            <b style={{ marginRight: '6px', fontSize: '16px', letterSpacing: '1px' }}>ENG</b>
            <Image src={downArrow} alt='' />
          </div>
        </div>
      </section>

      <section id='header-footer-section'>
        <nav>
          <div className='nav-item nav-item-active'>
            <p>HOME</p>
          </div>
          <div className='nav-item'>
            <p>SHOP</p>
          </div>
          <div className='nav-item d-none-mobile'>
            <p>SKILLS</p>
          </div>
          <div className='nav-item d-none-mobile'>
            <p>STORIES</p>
          </div>
          <div className='nav-item d-none-mobile'>
            <p>ABOUT</p>
          </div>
          <div className='nav-item d-none-mobile'>
            <p>CONTACT US</p>
          </div>
        </nav>
        </section>
    </header>
  )
}

export default Navabar
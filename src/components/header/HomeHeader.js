import React, { useState } from 'react'
import banner_1 from './../../image/bg/banner-1.jpg';
import TopNav from './TopNav';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';
import GeneralNav from './GeneralNav';
import Search from './Search';

import whiteLogo from './../../image/logo/white-logo.png'
import BannerSwiper from '../banner/BannerSwiper';



function HomeHeader() {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  const [fixNav, setFixNav] = useState(false);
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      setFixNav(true)
    } else {
      setFixNav(false)
    }
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);
  return (
    <header className='home'>
      <div className='home-header-bg'>
        <img src={banner_1} alt="banner-img" />
      </div>
      <TopNav />
      <MobileNav fixNav={fixNav} logo={whiteLogo} handleShowSearch={handleShowSearch} handleShow={handleShow} />
      <MobileMenu  logo={whiteLogo} show={show} handleClose={handleClose} handleShow={handleShow} menuClass='mobile-menu home' />
      <GeneralNav fixNav={fixNav} logo={whiteLogo} handleShowSearch={handleShowSearch} />
      <Search showSearch={showSearch} handleCloseSearch={handleCloseSearch} handleShowSearch={handleShowSearch} searchClass='search-offcanvas home' />
      <BannerSwiper/>
    </header>
  )
}

export default HomeHeader

import React, { useState } from 'react'
import TopNav from './TopNav'
import MobileNav from './MobileNav'
import MobileMenu from './MobileMenu';
import GeneralNav from './GeneralNav';
import Search from './Search';
import whiteLogo from './../../image/logo/white-logo.png'
import blackLogo from './../../image/logo/black-logo.png'


function Header() {
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
    <header>
      <TopNav />
      <MobileNav  fixNav={fixNav} logo={fixNav ? whiteLogo : blackLogo} handleShowSearch={handleShowSearch} handleShow={handleShow} />
      <MobileMenu logo={fixNav ? whiteLogo : blackLogo} show={show} handleClose={handleClose} handleShow={handleShow} menuClass={fixNav ? 'mobile-menu black-bg' : 'mobile-menu'} />
      <GeneralNav fixNav={fixNav} logo={fixNav ? whiteLogo : blackLogo} handleShowSearch={handleShowSearch} />
      <Search showSearch={showSearch} handleCloseSearch={handleCloseSearch} handleShowSearch={handleShowSearch} searchClass={fixNav ? 'search-offcanvas black-bg' : 'search-offcanvas'} />
    </header>
  )
}

export default Header

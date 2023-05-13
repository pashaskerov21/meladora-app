import React from 'react'
import { Link } from 'react-router-dom'
import whiteFooterLogo from './../../image/logo/footer-logo-1.png'
import { headerLinkArr } from './../header/HeaderLink'

function HomeFooter() {
  return (
    <footer className='home'>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-12 col-xl-6 logo-col">
              <Link className='footer-logo' to='/'>
                <img src={whiteFooterLogo} alt="logo" />
              </Link>
            </div>
            <div className="col-12 col-lg-6 col-xl-3">
              <div className="footer-links">
                <h3 className='title'>Menyular</h3>
                {
                  headerLinkArr.map(link => (
                    <Link key={link.id} to={link.path}>{link.label}</Link>
                  ))
                }
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3">
              <div className="footer-links">
                <h3 className='title'>Faydalı Linklər</h3>
                <Link>Tez-tez soruşulanlar</Link>
                <Link>Karyera</Link>
                <Link>Xidmət şəbəkəsi</Link>
                <Link>Təhlükəsizlik</Link>
                <Link>Şərtlər və Qaydalar</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; Copyright</span>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter

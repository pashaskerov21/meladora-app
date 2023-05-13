import React from 'react'
import { Link } from 'react-router-dom';

function TopNav() {
    return (
        <nav className='top-nav'>
            <div className="container">
                <div className="inner">
                    <Link className="phone">
                        <i className="fa-solid fa-phone"></i>
                        <span className='d-none d-md-block'>(055 555 55 55)</span>
                    </Link>
                    <div className='sosial-icons'>
                        <Link><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link><i className="fa-brands fa-twitter"></i></Link>
                        <Link><i className="fa-brands fa-instagram"></i></Link>
                        <Link><i className="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav

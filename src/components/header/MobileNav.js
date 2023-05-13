import React from 'react'
import { Link } from 'react-router-dom'

function MobileNav(props) {
    

    return (
        <nav className={props.fixNav ? 'd-xl-none fixed-top' : 'd-xl-none'}>
            <div className="container">
                <div className="inner">
                    <Link to='/' className='logo'>
                        <img src={props.logo} alt="logo" />
                    </Link>
                    <div className="right">
                        <button className='menu-button me-3' onClick={props.handleShow}>
                            <i className='fa-solid fa-bars'></i>
                        </button>
                        <button className='search-button' onClick={props.handleShowSearch}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav

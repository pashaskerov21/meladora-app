import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { headerLinkArr } from './HeaderLink'

function GeneralNav(props) {
    
    return (
        <nav className={props.fixNav ? 'd-none d-xl-flex fixed-top' : 'd-none d-xl-flex'}>
            <div className="container">
                <div className="inner">
                    <Link to='/' className='logo'>
                        <img src={props.logo} alt="logo" />
                    </Link>
                    <div className="right">
                        <div className="nav-links">
                            {
                                headerLinkArr.map(link => (
                                    <NavLink key={link.id} to={link.path}>{link.label}</NavLink>
                                ))
                            }
                        </div>
                        <button className='search-button' onClick={props.handleShowSearch}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default GeneralNav

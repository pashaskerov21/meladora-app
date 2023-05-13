import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { headerLinkArr } from './HeaderLink'


function MobileMenu(props) {

    return (
        <Offcanvas show={props.show} onHide={props.handleClose} placement='end' className={props.menuClass}>
            <Offcanvas.Header>
                <Link to='/' className='logo'>
                    <img src={props.logo} alt="logo" />
                </Link>
                <button className='close-button' onClick={props.handleClose}>
                    <i className='fa-solid fa-xmark'></i>
                </button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='offcanvas-links'>
                    {
                        headerLinkArr.map(link => (
                            <NavLink key={link.id} to={link.path}>{link.label}</NavLink>
                        ))
                    }
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default MobileMenu

import React from 'react'
import { Offcanvas } from 'react-bootstrap'

function Search(props) {
    return (
        <Offcanvas show={props.showSearch} className={props.searchClass} placement='top'>
            <Offcanvas.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <form action="#">
                                <input type="text" className='form-control' placeholder='Axtar' />
                                <button>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-2">
                            <button className='close-button' onClick={props.handleCloseSearch}>
                                <i className='fa-solid fa-xmark'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Search

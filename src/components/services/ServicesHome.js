import React from 'react'
import SectionTitle from '../title/SectionTitle'
import { serviceArr } from './ServiceData'
import { Link } from 'react-router-dom'

function ServicesHome() {
    return (
        <section className="services home">
            <div className="container">
                <SectionTitle title='Xidmətlərimiz' />
                <div className="row">
                    {
                        serviceArr.map(service => (
                            <div key={service.id} className="col-12 col-md-6 col-xl-4">
                                <Link to='/services'>
                                    <div className="service-card">
                                        <div className="icon">
                                            <img src={service.icon} alt="icon" />
                                        </div>
                                        <h4 className='title'>{service.title}</h4>
                                        <div className='text'>
                                            <p>{service.text.substring(0, 160) + '...'}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServicesHome

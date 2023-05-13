import React from 'react'
import SectionTitle from '../title/SectionTitle'
import { serviceArr } from './ServiceData'

function ServiceSection() {
    return (
        <section className="services">
            <div className="container">
                <SectionTitle title='Xidmətlərimiz' />
                <div className="service-container">
                    {
                        serviceArr.map(service => (
                            <div key={service.id} className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="service-card">
                                        <div className="icon">
                                            <img src={service.icon} alt="icon" />
                                        </div>
                                        <h4 className='title'>{service.title}</h4>
                                        <div className='text'>
                                            <p>{service.text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="service-img">
                                        <img src={service.image} alt="service" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceSection

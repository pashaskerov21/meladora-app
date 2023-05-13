import React from 'react'
import SectionTitle from '../title/SectionTitle'
import { Link } from 'react-router-dom'

function ContactSection() {
    return (
        <section className="contact">
            <div className="container">
                <SectionTitle title='Əlaqə' />
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <form action="#" className='contact-form'>
                            <h3 className='title'>Müraciət Formu</h3>
                            <input type="text" placeholder='Adınız Soyadınız*' />
                            <input type="number" placeholder='Telefon*' />
                            <input type="email" placeholder='Email*' />
                            <textarea placeholder='Mesajınız'></textarea>
                            <button type='submit'>Göndər</button>
                        </form>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="contact-info">
                            <div className="item">
                                <i className="fa-solid fa-phone"></i>
                                <span>(055) 555 55 55</span>
                            </div>
                            <div className="item">
                                <i className="fa-solid fa-flower-tulip"></i>
                                <span>İstehsal:<br />İsmayıllı ray, Qalıncaq kəndi</span>
                            </div>
                            <div className="item">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>MELADORA mmc<br />Baş ofis <br />Bakı</span>
                            </div>
                            <div className='sosial-icons'>
                                <Link><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                                <Link><i className="fa-brands fa-twitter"></i></Link>
                                <Link><i className="fa-brands fa-instagram"></i></Link>
                                <Link><i className="fa-brands fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

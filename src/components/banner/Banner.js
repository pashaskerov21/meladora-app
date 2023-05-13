import React from 'react'
//import banner_2 from './../../image/bg/banner-2.png'
import bannerDesign from './../../image/design/banner-design.png'

function Banner() {
  return (
    <section className="banner">
        <div className="banner-img"></div>
        <div className="design-img">
            <img src={bannerDesign} alt="design" />
        </div>
    </section>
  )
}

export default Banner

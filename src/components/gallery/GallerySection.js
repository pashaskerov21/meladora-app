import React from 'react'
import SectionTitle from '../title/SectionTitle'
import img_1 from '../../image/bg/about-bg.png'
import img_2 from '../../image/bg/banner-1.jpg'
import img_3 from '../../image/bg/banner-2.png'
import img_4 from '../../image/garden/g1-img.png'
import img_5 from '../../image/garden/g2-img.png'
import img_6 from '../../image/garden/g3-img.png'
import img_7 from '../../image/garden/g4-img.png'
import img_8 from '../../image/garden/g5-img.png'
import img_9 from '../../image/garden/g6-img.png'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const galleryImages = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9]

function GallerySection() {
  return (
    <section className="gallery">
      <div className="container">
        <SectionTitle title='Qalereya' />
        <div className="row">
          {
            galleryImages.map((img, index) => (
              <div key={index} className="col-12 col-md-6 col-xl-4">
                <div className="image">
                  <img src={img} alt="gallery" />
                  <div className='hover'>
                      <a href={img} data-fancybox="gallery">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      </a>
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

export default GallerySection

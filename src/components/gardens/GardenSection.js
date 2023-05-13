import React from 'react'
import SectionTitle from '../title/SectionTitle'
import { gardenArr } from './GardenContent'

function GardenSection() {
  return (
    <section className="garden general">
      <div className="container">
        <SectionTitle title='Bağlarımız' />
        <div className="garden-container">
          {
            gardenArr.map(garden => (
              <div key={garden.id} className="row">
                <div className="col-12 col-lg-6">
                  <div className="content">
                    <div className="number">
                      <span>{garden.id}</span>
                    </div>
                    <h1>{garden.title}</h1>
                    <div className='text'>
                      <p>{garden.text}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="garden-img">
                    <img src={garden.image} alt="garden" />
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

export default GardenSection

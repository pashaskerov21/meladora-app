import React from 'react'
import titleDesign from '../../image/design/title-design-1.png'

function SectionTitle({title}) {
  return (
    <div className='section-title'>
      <h1 className='title'>{title}</h1>
      <img src={titleDesign} alt="design" />
    </div>
  )
}

export default SectionTitle

import React from 'react'
import Layout from './Layout'
import AboutSection from '../components/about/AboutSection'
import GallerySection from '../components/gallery/GallerySection'


function About() {
  return (
    <Layout>
      <AboutSection/>
      <GallerySection/>
    </Layout>
  )
}

export default About

import React from 'react'
import HomeHeader from '../components/header/HomeHeader'
import HomeFooter from '../components/footer/HomeFooter'
import AboutSection from '../components/about/AboutSection'
import GardenHomeSection from '../components/gardens/GardenHomeSection'
import ProductSection from '../components/products/ProductSection'
import ServicesHome from '../components/services/ServicesHome'
import BlogSection from '../components/blogs/BlogSection'
import GallerySection from '../components/gallery/GallerySection'



function Home() {
  return (
    <>
      <HomeHeader />
       <AboutSection/> 
       <GardenHomeSection/>
       <ProductSection/>
       <ServicesHome/>
       <BlogSection/>
       <GallerySection/>
      <HomeFooter />
    </>
  )
}

export default Home

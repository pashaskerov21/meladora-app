import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'

function Layout({children}) {
  return (
    <>
    <Header/>
    <Banner/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout

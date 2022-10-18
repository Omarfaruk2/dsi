import React from 'react'
import Banner from './Banner'
import BannerSecound from './BannerSecound'
import Footer from './Footer'
import Navbar from './Navbar'
import ProductAndService from './ProductAndService'
import Sponser from './Sponser'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <BannerSecound />
            <ProductAndService />
            <Sponser />
            <Footer />
        </div>
    )
}

export default Home
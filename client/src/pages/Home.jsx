import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
const Home = () => {
  return (
    <div >
      <div>
      <Slider/>

      <Categories/>
      <Carousel/>

      <Products/>
      </div>
      
      
     
    </div>
  )
}

export default Home

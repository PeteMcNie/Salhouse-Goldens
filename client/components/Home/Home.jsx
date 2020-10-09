import React from 'react'

import NavbarComp from '../NavbarComp'
import Carousel from './Carousel'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'

const Home = () => {
  return (
    <>
      <NavbarComp />
      <Carousel />
      <div className='mainBody'>
        <HomeBody />
        <HomeFooter />
      </div>
    </>
  )
}

export default Home

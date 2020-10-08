import React from 'react'

import NavbarComp from '../NavbarComp'
import AboutUsBody from './AboutUsBody'
import AboutUsImages from './AboutUsImages'

const AboutUs = () => {
  return (
    <>
      <NavbarComp />
      <div className='mainBodyMLWA'>
        <AboutUsBody />
        <AboutUsImages />
      </div>
    </>
  )
}

export default AboutUs

import React from 'react'

import Navbar from '../NavbarComp'
import GYGStart from './GYGStart'
import BasicGroomingTips from './BasicGroomingTips'
import GroomingService from './GroomingService'
import TestimonialsAndPhotos from './TestimonialsAndPhotos'

function GYG () {
  return (
    <>
      <Navbar />
      <GYGStart />
      <BasicGroomingTips />
      <GroomingService />
      <TestimonialsAndPhotos />
    </>
  )
}

export default GYG

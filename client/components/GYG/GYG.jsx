import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'

import Navbar from '../NavbarComp'
import GYGStart from './GYGStart'
import BasicGroomingTips from './BasicGroomingTips'
import GroomingService from './GroomingService'
import TestimonialsAndPhotos from './TestimonialsAndPhotos'

function GYG () {
  return (
    <>
      <Navbar />
      <Jumbotron id='gygj' fluid>
        <div>
          <h1 className='jumbotronTitle GYG'>Grooming Your Golden</h1>
          <p className='line'></p>
        </div>
      </Jumbotron>
      <div className='mainBody'>
        <GYGStart />
        <BasicGroomingTips />
        <GroomingService />
        <TestimonialsAndPhotos />
      </div>
    </>
  )
}

export default GYG

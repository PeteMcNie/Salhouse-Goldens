import React from 'react'

import Navbar from '../NavbarComp'
import GYGStart from './GYGStart'
import BasicGroomingTips from './BasicGroomingTips'
import GroomingService from './GroomingService'

function GYG () {
  return (
    <>
      <Navbar />
      <GYGStart />
      <BasicGroomingTips />
      <GroomingService />
    </>
  )
}

export default GYG

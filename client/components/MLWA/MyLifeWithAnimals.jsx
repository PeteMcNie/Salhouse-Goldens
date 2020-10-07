import React from 'react'

import NavbarComp from '../NavbarComp'
import StartingText from './StartingText'
import Lassie from './Lassie'
import HorseGreyhounds from './HorseGreyhounds'
import BMP from './BMP'
import MrSlattery from './MrSlattery'
import MunchMo from './MunchMo'
import WorstNightmare from './WorstNightmare'
import FirstGoldenRetriever from './FirstGoldenRetriever'
import Kula from './Kula'
import Thanks from './Thanks'

function MyLifeWithAnimals () {
  return (
    <>
      <NavbarComp />
      <div className='mainBodyMLWA'>
        <StartingText />
        <Lassie />
        <HorseGreyhounds />
        <BMP />
        <MrSlattery />
        <MunchMo />
        <WorstNightmare />
        <FirstGoldenRetriever />
        <Kula />
        <Thanks />
      </div>
    </>
  )
}

export default MyLifeWithAnimals

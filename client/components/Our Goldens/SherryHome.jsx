import React, { useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import NavbarComp from '../NavbarComp'
import SherryMain from './SherryMain'
import SherryLitter from './SherryLitter'
import SherryBreedShow from './SherryBreedShow'

function SherryHome () {
  const [key, setKey] = useState('shadowHome')

  return (
    <>
      <NavbarComp />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='belowNavbar'
      >
        <Tab eventKey="shadowHome" title="Sherry">
          <SherryMain />
        </Tab>
        <Tab eventKey="ShadowLitter" title="Sherry's Litter" disabled>
          <SherryLitter />
        </Tab>
        <Tab eventKey="breedShowAchievements" title="Breed Show Achievements">
          <SherryBreedShow />
        </Tab>
      </Tabs>
    </>
  )
}

export default SherryHome

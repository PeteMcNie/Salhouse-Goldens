import React, { useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import NavbarComp from '../NavbarComp'
import ShadowMain from './ShadowMain'
import ShadowLitter from './ShadowLitter'
import ShadowBreedShow from './ShadowBreedShow'

function ShadowHome () {
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
        <Tab eventKey="shadowHome" title="Shadow">
          <ShadowMain />
        </Tab>
        <Tab eventKey="shadowLitter" title="Shadow's Litter">
          <ShadowLitter />
        </Tab>
        <Tab eventKey="breedShowAchievements" title="Breed Show Achievements">
          <ShadowBreedShow />
        </Tab>
      </Tabs>
    </>
  )
}

export default ShadowHome

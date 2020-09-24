import React, { useState } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import NavbarComp from '../NavbarComp'
import SherryMain from './SherryMain'
import SherryLitter from './SherryLitter'
import SherryBreedShow from './SherryBreedShow'
import SherryObedience from './SherryObedience'

function SherryHome () {
  const [key, setKey] = useState('shadowHome')

  return (
    <>
      <NavbarComp />
      <Jumbotron id='sherryj' fluid>
        <div>
          <h1 className='jumbotronTitle sherry'>Kula</h1>
          <p className='line'></p>
        </div>
      </Jumbotron>
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
        <Tab eventKey="obedienceShowAchievements" title="Obedience Show Achievements">
          <SherryObedience />
        </Tab>
      </Tabs>
    </>
  )
}

export default SherryHome

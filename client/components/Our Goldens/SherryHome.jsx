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
  const [key, setKey] = useState('sherryHome')

  return (
    <>
      <NavbarComp />
      <Jumbotron id='sherryj' fluid>
        {/* <div>
          <h1 className='jumbotronTitle sherry'>Sherry</h1>
          <p className='line'></p>
        </div> */}
      </Jumbotron>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="sherryHome" title="Sherry">
          <SherryMain />
        </Tab>
        <Tab eventKey="sherryLitter" title="Sherry's Litter" disabled>
          <SherryLitter />
        </Tab>
        <Tab eventKey="sherryBreedShowAchievements" title="Breed Show Achievements">
          <SherryBreedShow />
        </Tab>
        <Tab eventKey="sherryObedienceShowAchievements" title="Obedience Show Achievements">
          <SherryObedience />
        </Tab>
      </Tabs>
    </>
  )
}

export default SherryHome

import React, { useState } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
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
      <Jumbotron id='shadowj' fluid>
        <div>
          <h1 className='jumbotronTitle shad'>Shadow</h1>
          <p className='line shad'></p>
        </div>
      </Jumbotron>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
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

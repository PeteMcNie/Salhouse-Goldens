import React, { useState } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import NavbarComp from '../NavbarComp'
import AutumnMain from './AutumnMain'
import AutumnLitter from './AutumnLitter'

function AutumnHome () {
  const [key, setKey] = useState('autumnHome')

  return (
    <>
      <NavbarComp />
      <Jumbotron id='autumnj' fluid>
        <div>
          <h1 className='jumbotronTitle autumn'>Autumn</h1>
          <p className='line'></p>
        </div>
      </Jumbotron>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="autumnHome" title="Autumn">
          <AutumnMain />
        </Tab>
        <Tab eventKey="autumnLitter" title="Autumn's Litter" disabled>
          <AutumnLitter />
        </Tab>
      </Tabs>
    </>
  )
}

export default AutumnHome

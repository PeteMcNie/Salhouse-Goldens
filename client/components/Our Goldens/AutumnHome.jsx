import React, { useState } from 'react'

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
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='belowNavbar'
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

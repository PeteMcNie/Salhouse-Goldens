import React, { useState } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import SirenMain from './SirenMain'
import SirenLitter from './SirenLitter'
import NavbarComp from '../NavbarComp'

function SirenHome () {
  const [key, setKey] = useState('sirenHome')

  return (
    <>
      <NavbarComp />
      <Jumbotron id='sirenj' fluid />
      <Tabs
        id="tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="sirenHome" title="Siren">
          <SirenMain />
        </Tab>
        <Tab eventKey="sirenLitter" title="Siren's Litter">
          <SirenLitter />
        </Tab>
      </Tabs>
    </>
  )
}

export default SirenHome

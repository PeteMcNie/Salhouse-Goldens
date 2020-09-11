import React, { useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import NavbarComp from '../NavbarComp'
import KulaMain from './KulaMain'
import KulasLitter from './KulasLitter'

function KulaHome () {
  const [key, setKey] = useState('kulaHome')

  return (
    <>
      <NavbarComp />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='belowNavbar'
      >
        <Tab eventKey="kulaHome" title="Kula">
          <KulaMain />
        </Tab>
        <Tab eventKey="KulaLitter" title="Kula's Litter">
          <KulasLitter />
        </Tab>
      </Tabs>
    </>

  )
}

export default KulaHome

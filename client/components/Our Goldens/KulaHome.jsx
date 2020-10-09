import React, { useState } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
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
      <Jumbotron id='kulaj' fluid>
        {/* <div>
          <h1 className='jumbotronTitle kula'>Kula</h1>
          <p className='line'></p>
        </div> */}
      </Jumbotron>
      <Tabs
        id="tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
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

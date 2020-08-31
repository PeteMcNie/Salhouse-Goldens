import React from 'react'
import { Route } from 'react-router-dom'

import NavbarComp from './NavbarComp'

const App = () => {
  return (
    <>
    <Route path='/' component={NavbarComp} />
      <h1>hello world</h1>
    </>
  )
}

export default App

import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home'

const App = () => {
  return (
    <>
      <Route path='/' component={Home} />
    </>
  )
}

export default App

import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home'
import AboutUs from './About Us/AboutUs.jsx'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/aboutus' component={AboutUs} />
    </>
  )
}

export default App

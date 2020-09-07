import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home'
import AboutUs from './About Us/AboutUs'
import MyLifeWithAnimals from './MLWA/MyLifeWithAnimals'
import Phoenix from './Our Goldens/Phoenix'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/mylifewithanimals' component={MyLifeWithAnimals} />
      <Route path='/phoenix' component={Phoenix} />
    </>
  )
}

export default App

import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home'
import AboutUs from './About Us/AboutUs'
import MyLifeWithAnimals from './MLWA/MyLifeWithAnimals'
import OurGoldens from './Our Goldens/OurGoldens'
import Phoenix from './Our Goldens/Phoenix'
import Kula from './Our Goldens/Kula'
import Shadow from './Our Goldens/Shadow'
import Sherry from './Our Goldens/Sherry'
import Autumn from './Our Goldens/Autumn'
import Tuppence from './Our Goldens/Tuppence'
import Siren from './Our Goldens/Siren'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/mylifewithanimals' component={MyLifeWithAnimals} />
      <Route path='/ourgoldens' component={OurGoldens} />
      <Route path='/phoenix' component={Phoenix} />
      <Route path='/kula' component={Kula} />
      <Route path='/shadow' component={Shadow} />
      <Route path='/sherry' component={Sherry} />
      <Route path='/autumn' component={Autumn} />
      <Route path='/tuppence' component={Tuppence} />
      <Route path='/siren' component={Siren} />
    </>
  )
}

export default App

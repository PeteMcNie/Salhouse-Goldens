import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home'
import AboutUs from './About Us/AboutUs'
import MyLifeWithAnimals from './MLWA/MyLifeWithAnimals'
import OurGoldens from './Our Goldens/OurGoldens'
import Phoenix from './Our Goldens/Phoenix'
import KulaHome from './Our Goldens/KulaHome'
import ShadowHome from './Our Goldens/ShadowHome'
import SherryHome from './Our Goldens/SherryHome'
import AutumnHome from './Our Goldens/AutumnHome'
import Tuppence from './Our Goldens/Tuppence'
import Siren from './Our Goldens/Siren'
import GYG from './GYG/GYG'
import Links from './Links/Links'
import Contact from './Contact/Contact'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/mylifewithanimals' component={MyLifeWithAnimals} />
      <Route path='/ourgoldens' component={OurGoldens} />
      <Route path='/phoenix' component={Phoenix} />
      <Route path='/kula' component={KulaHome} />
      <Route path='/shadow' component={ShadowHome} />
      <Route path='/sherry' component={SherryHome} />
      <Route path='/autumn' component={AutumnHome} />
      <Route path='/tuppence' component={Tuppence} />
      <Route path='/siren' component={Siren} />
      <Route path='/gyg' component={GYG} />
      <Route path='/links' component={Links} />
      <Route path='/contact' component={Contact} />
    </>
  )
}

export default App

import React from 'react'

import Navbar from '../NavbarComp'
import ContactBody from './ContactBody'

function Contact () {
  return (
    <>
      <Navbar />
      <div className='mainBodyMLWA'>
        <ContactBody />
      </div>
    </>
  )
}

export default Contact

import React from 'react'

import Image from 'react-bootstrap/Image'

function ContactBody () {
  return (
    <>
      <div className='belowNavbar'>
        <h2>Contact Us</h2>
        <p>Phone: +64 4 566 0561</p>
        <p>Email: cmcnie@xtra.co.nz</p>
        <p>Lower Hutt, New Zealand</p>
      </div>
      <div>
        <Image src='images/contact1.jpg' fluid />
      </div>
    </>
  )
}

export default ContactBody

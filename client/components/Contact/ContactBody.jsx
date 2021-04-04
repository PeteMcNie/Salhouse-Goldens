import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function ContactBody () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col lg={6} className='contact'>
            <h2 className='bodyTitle'>Contact</h2>
            <div className='contactInfo'>
              <p className='contactText'>Phone: +64 4 566 0561 or 0274164687</p>
              <p className='contactText'>Email: <a href='mailto:cmcnie@xtra.co.nz'>cmcnie@xtra.co.nz</a></p>
              <p className='linkslastline contactText'>Lower Hutt, New Zealand</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className='imagelastline'>
              <Image src='images/contact1.jpg' fluid roundedCircle className='linksimage'/>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ContactBody

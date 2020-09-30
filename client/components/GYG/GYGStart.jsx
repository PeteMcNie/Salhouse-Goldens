import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function GYGStart () {
  return (
    <>
      <div className='mainBody'>
        <Container id='gyg'>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Grooming Your Golden</h2>
              <p>
                Contact Carole on 04 566 0561 or email <a href='mailto:cmcnie@xtra.co.nz?subject=Enquiry regarding Golden Retriever grooming'>cmcnie@xtra.co.nz</a> if you are in the Wellington region (I&apos;m
                actually in Lower Hutt) and would like your Golden groomed.
              </p>
              <p>
                Your Golden Retriever is a beautiful creature at any time of the day or night, but when kept groomed properly they can be
                an even lovelier sight and will feel great. They definitely need some attention to their coats. A brush once or twice a week,
                taking specific care and attention around neck right by the ears, the long coat of the chest and the feathers of the back
                legs and tail. These areas are all particularly prone to getting dirt and little twigs etc in and then form knots that can be
                hard to get out if they are left a long time to embed themselves.
              </p>
            </Col>
            <Col lg={6}>
              <div>
                <Image src='images/gyg13.jpg' fluid className='litterImage'/>
              </div>
            </Col>
          </Row>
          <hr className='sectionSeparator' />
        </Container>
      </div>
    </>
  )
}

export default GYGStart

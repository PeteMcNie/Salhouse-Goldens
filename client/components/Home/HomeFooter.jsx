import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HomeFooter () {
  return (
    <div>
      <Container>
        <Row className='row'>
          <Col className='leftCol'>
            <p>
              Using images from this website:
            </p>
            <p>
              All photos on this website are copyright © by me. They are creative-commons licensed, you may use them
              under <a href='https://creativecommons.org/licenses/by-nc-nd/3.0/nz/'>these non-commercial terms</a>.
            </p>
            <p>
              If you want to use them under different terms, please contact me at
              <a href='mailto:cmcnie@xtra.co.nz?subject=Enquiry regarding using photos from your Webpage'> cmcnie@xtra.co.nz</a>
            </p>
            <a href='https://creativecommons.org/licenses/by-nc-nd/3.0/nz/'><img src='images/nocc.png' className='bottom' /></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeFooter

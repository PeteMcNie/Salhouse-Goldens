import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function MrSlattery () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col>
            <h2 className='bodyTitle'>Mr Slattery</h2>
            <p>
              While I had Pepper and Maddie and my boys were young I also got some other animals. I think my lack of having
              them when I was a child set me up for just wanting to surround myself with them when I grew up. We had some
              guinea pigs, a beautiful grey dwarf rabbit called Munch and some canaries. In particular, my first canary was
              a boy called Mr Slattery. He lived to be about 12 or more. He couldn’t really fly towards the end but we put
              perches near the floor of the cage that he could jump onto and he seemed quite happy. We also let him out of the
              cage and he used to like to potter about on the carpet and sit in the sun. Later on I got some finches too.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div>
              <Image src="images/mrslattery.jpg" fluid rounded />
              <p>Mr Slattery taking a bath</p>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <Image src="images/mrslatterysun.jpg" fluid rounded/>
              <p>Mr Slattery loves the sun!</p>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <Image src="images/phoenixandmrslattery.jpg" fluid rounded />
              <p>Phoenix would like to say &ldquo;Hello&ldquo; to Mr Slattery in person!</p>
            </div>
          </Col>
        </Row>
        <hr className='sectionSeparator' />
      </Container>
    </>
  )
}

export default MrSlattery

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function SirenLitter () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col>
              <h2 className='litterTitle'>Sirens&apos;s Litter 2006</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} className='leftCol'>
              <Image src="" fluid className='litterMainImage'/>
              <p className='litterMainText'>Siren</p>
            </Col>
            <Col md={6}>
              <Image src="" fluid className='litterMainImage'/>
              <p className='litterMainText'>Zeus (Gofetch Storm Chaser)</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                On March 26 2021, Siren gave birth to seven lovely puppies – 4 females and 3 males. The sire of this litter was the lovely
                Zeus, Gofetch Storm Chaser. Thank you to Lorraine Handley for allowing us to have a date with Zeus.
              </p>
              <p>
                We had a lot of fun with this litter, but we also had a major upheaval in our garden with drainage problems. But the puppies
                coped really well when they were outside in the daytime, learning about the noise of a digger and people wandering around the
                garden with tools, etc. They were in a more restricted area than normal for us, but they were really good. They were a lovely
                litter, gentle, kind and soft. They all went to lovely homes and are living their best lives.
              </p>
            </Col>
          </Row>

          <hr className='sectionSeparator' />

          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/siren/sirens_puppies/ball_puppy.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
            <Col lg={6}>
              <Image src="images/siren/sirens_puppies/drinking_milk.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/siren/sirens_puppies/face_to_face.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
            <Col lg={6}>
              <Image src="images/siren/sirens_puppies/grass_puppies.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/siren/sirens_puppies/jail_puppies.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
            <Col lg={6}>
              <Image src="images/siren/sirens_puppies/puppy_and_pink.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/siren/sirens_puppies/s_puppies_feeding.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
            <Col lg={6}>
              <Image src="images/siren/sirens_puppies/siren_feeding.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/siren/sirens_puppies/sleeping.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
            <Col lg={6}>
              <Image src="images/siren/sirens_puppies/two_puppies.jpg" fluid className='litterImage'/>
              <p className='litterText'>Text here?</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>

  )
}

export default SirenLitter

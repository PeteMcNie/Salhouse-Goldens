import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function KulasLitter () {
  return (
    <><div className='mainBody'>
      <Container>
        <Row className='row'>
          <Col>
            <h2 className='litterTitle'>Kula&apos;s Litter 2006</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='leftCol'>
            <Image src="images/kl1.jpg" fluid className='litterMainImage'/>
            <p className='litterMainText'>Kula</p>
          </Col>
          <Col md={6}>
            <Image src="images/kl2.jpg" fluid className='litterMainImage'/>
            <p className='litterMainText'>Jordan <a href='https://www.mistymoorgoldens.com/'>(NZ CH Santamaria The Patriot)</a></p>
          </Col>
        </Row>

        <hr className='sectionSeparator' />

        <Row>
          <Col lg={6} className='leftCol'>
            <Image src="images/kl3.jpg" fluid className='litterImage'/>
            <p className='litterText'>Kula 8 weeks pregnant (like a beached whale!).</p>
          </Col>
          <Col lg={6}>
            <Image src="images/kl4.jpg" fluid className='litterImage'/>
            <p className='litterText'>Our first ever puppy born!</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className='leftCol'>
            <Image src="images/kl5.jpg" fluid className='litterImage'/>
            <p className='litterText'>We had a lot of fun with these puppies and of course kept the lovely Shadow.</p>
          </Col>
          <Col lg={6}>
            <Image src="images/kl6.jpg" fluid className='litterImage'/>
            <p className='litterText'>Kula wonders what is moving under the blanket!</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className='leftCol'>
            <Image src="images/kl7.jpg" fluid className='litterImage'/>
            <p className='litterText'>Pileup of puppies!</p>
          </Col>
          <Col lg={6}>
            <Image src="images/kl8.jpg" fluid className='litterImage'/>
            <p className='litterText'>Puppies feeding.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className='leftCol'>
            <Image src="images/kl9.jpg" fluid className='litterImage'/>
            <p className='litterText'>Asleep under the barbecue.</p>
          </Col>
          <Col lg={6}>
            <Image src="images/kl10.jpg" fluid className='litterImage'/>
            <p className='litterText'>All on Jeff!</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className='leftCol'>
            <Image src="images/kl11.jpg" fluid className='litterImage'/>
            <p className='litterText'>Let&apos;s try out the pool.</p>
          </Col>
          <Col lg={6}>
            <Image src="images/kl12.jpg" fluid className='litterImage'/>
            <p className='litterText'>1st birthday - all except the second female here.</p>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default KulasLitter

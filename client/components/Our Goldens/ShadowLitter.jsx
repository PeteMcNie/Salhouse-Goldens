import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function ShadowLitter () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col>
              <h2 className='litterTitle'>Shadow&apos;s litter 2010</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} className='leftCol'>
              <Image src="images/sl1.jpg" fluid className='litterMainImage'/>
              <p className='litterMainText'>Shadow</p>
            </Col>
            <Col md={6}>
              <Image src="images/sl2.jpg" fluid className='litterMainImage'/>
              <p className='litterMainText'>Gambler<a href='https://www.mistymoorgoldens.com/'> (NZ CH Santamaria The Patriot)</a></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                My thanks go to Gaye who kindly allowed me to use the lovely Gambler as sire for this litter
                and also to Sandy for her invaluable help with the whelping of the litter.
              </p>
              <p>
                On 6 and 7 April 2010 Shadow had a litter of 7 beautiful puppies, 4 males and 3 females. She
                also had another female but unfortunately that was stillborn.
              </p>
            </Col>
          </Row>

          <hr className='sectionSeparator' />

          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/sl3.jpg" fluid className='litterImage'/>
              <p className='litterText'></p>
            </Col>
            <Col lg={6}>
              <Image src="images/sl4.jpg" fluid className='litterImage'/>
              <p className='litterText'></p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/sl5.jpg" fluid className='litterImage'/>
              <p className='litterText'></p>
            </Col>
            <Col lg={6}>
              <Image src="images/sl6.jpg" fluid className='litterImage'/>
              <p className='litterText'></p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/sl7.jpg" fluid className='litterImage'/>
              <p className='litterText'>1 Male - tip of tail - temporary name, Xerxes; final name Lachie</p>
            </Col>
            <Col lg={6}>
              <Image src="images/sl8.jpg" fluid className='litterImage'/>
              <p className='litterText'>2 Male - base of tail - temporary name, Spartacus; final name, Murphy</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/sl9.jpg" fluid className='litterImage'/>
              <p className='litterText'>3 Female - neck - temporary name, Trinity; final name, Kylo</p>
            </Col>
            <Col lg={6}>
              <Image src="images/sl10.jpg" fluid className='litterImage'/>
              <p className='litterText'>4 Male - middle of back - temporary name, Thumper; final name, Marco</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/sl11.jpg" fluid className='litterImage'/>
              <p className='litterText'>5 Female - base of tail - temporary name, Flotsam; final name, Sherry</p>
            </Col>
            <Col lg={6}>
              <Image src="images/sl12.jpg" fluid className='litterImage'/>
              <p className='litterText'>6 Male - neck - temporary name, Maximus; final name, Max</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src="images/sl13.jpg" fluid className='litterImage'/>
              <p className='litterText'>7 Female - tip of tail - temporary name, Tiny; final name, Amber</p>
            </Col>
            <Col lg={6}>
              <Image src="images/sl14.jpg" fluid className='litterImage'/>
              <p className='litterText'>Sleeping puppies nearly 3 weeks old.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ShadowLitter

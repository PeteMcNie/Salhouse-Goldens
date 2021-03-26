import React from 'react'

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TestimonialsAndPhotos () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col className='leftCol'>
              <h2 className='bodyTitle gygPhotoTitle'>Testimonials and Photos</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg5.jpg' fluid className='litterImage'/>
              <p className='litterText'>Missy before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gN1.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Missy after groom</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='testimonials'>
                It was so lovely meeting you and thank you so much for grooming her today! She looks so amazing thanks to you! This is
                probably the best she&apos;s ever looked after a groom so I&apos;m really thankful for your great service. I think she really
                enjoyed it also, and meeting your lovely goldens too! Thank you so much for the photos! It&apos;s evident that she really
                enjoyed being groomed by you. She looks so cute! Definitely having her groomed with you again if you would be happy to
                have her again sometime next year. I really appreciate your wonderful work. - Celina
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg7.jpg' fluid className='litterImage'/>
              <p className='litterText'>Baxter before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg8.jpg' fluid className='litterImage'/>
              <p className='litterText'>Baxter after groom</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg/gyg24.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Cody before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg/gyg23.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Cody after groom</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg11.jpg' fluid className='litterImage'/>
              <p className='litterText'>Rafa before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg12.jpg' fluid className='litterImage'/>
              <p className='litterText'>Rafa after groom</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg13.jpg' fluid className='litterImage'/>
              <p className='litterText'>Rafa front view</p>
            </Col>
            <Col lg={6}>

            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gN3.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Beaudy before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gN2.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Beaudy after groom</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg/gyg26.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Maxwell before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg/gyg25.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Maxwell after groom</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg18.jpg' fluid className='litterImage'/>
              <p className='litterText'>Jax before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg19.jpg' fluid className='litterImage'/>
              <p className='litterText'>Jax after groom</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg/gyg27.jpeg' fluid className='litterImagePort'/>
              <p className='litterText'>Charlie coat strip</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg/gyg28.jpeg' fluid className='litterImagePort'/>
              <p className='litterText'>Charlie final</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='leftCol'>
              <Image src='images/gyg/gyg29.jpeg' fluid className='litterImage'/>
              <p className='litterText'>Before feet</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg/gyg30.jpeg' fluid className='litterImage'/>
              <p className='litterText'>After feet</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TestimonialsAndPhotos

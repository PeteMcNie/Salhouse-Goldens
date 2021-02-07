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
              <Image src='images/gyg9.png' fluid className='litterImage'/>
              <p className='litterText'>Billie before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg10.png' fluid className='litterImage'/>
              <p className='litterText'>Billie after groom</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='testimonials'>
                Thank you for grooming Billie you have done a fantastic job and he looks very handsome.
                I hope he behaved himself. We will be in contact next time we want a groom. - Debbie
              </p>
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
              <Image src='images/gyg16.jpg' fluid className='litterImage'/>
              <p className='litterText'>Zach before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg17.jpg' fluid className='litterImage'/>
              <p className='litterText'>Zach after groom</p>
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
              <Image src='images/gyg20.jpg' fluid className='litterImage'/>
              <p className='litterText'>Tawnee before groom</p>
            </Col>
            <Col lg={6}>
              <Image src='images/gyg21.jpg' fluid className='litterImage'/>
              <p className='litterText'>Tawnee after groom</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TestimonialsAndPhotos

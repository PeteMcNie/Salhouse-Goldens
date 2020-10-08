import React from 'react'

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutUsImages () {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Image src="images/au1.jpg" thumbnail fluid />
            <p>Phoenix poking her tongue out.</p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Image src="images/au2.jpg" thumbnail fluid />
            <p>Kula putting Shadow&apos;s leg to the taste test!</p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Image src="images/au3.jpg" thumbnail fluid />
            <p>Shadow in her favourite &ldquo;car crash&ldquo; position!</p>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default AboutUsImages

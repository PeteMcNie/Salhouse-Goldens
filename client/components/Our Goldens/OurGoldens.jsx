import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavbarComp from '../NavbarComp'
import OurGoldensSplider from './OurGoldensSplider'

function OurGoldens () {
  return (
    <>
      <NavbarComp />
      <Jumbotron id='ourGoldensj' fluid>
        {/* <div>
          <h1 className='jumbotronTitle oourgoldens'>Our Goldens</h1>
          <p className='line'></p>
        </div> */}
      </Jumbotron>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Our Goldens</h2>
              <p>
                We have the privilege to have owned seven beautiful golden retrievers - <a href='/phoenix'>Phoenix</a> (RIP),
                <a href='/kula'> Kula</a> (RIP), <a href='/shadow'>Shadow</a>, <a href='/sherry'>Sherry</a>, <a href='/autumn'>Autumn</a>,
                <a href='/tuppence'> Tuppence</a> and <a href='/siren'>Siren</a>. They are our life and totally part of our family. I have competed in breed showing, obedience and
                agility, but am not overly driven to succeed in the ring and just do those things in order to have a bit more fun
                with my dogs.
              </p>
              <p>
                Each of our dogs has its own page with lots of photos, so do visit their pages to get a little insight into their
                personalities.
              </p>
            </Col>
            <Col lg={6}>
              <div>
                <Image src="images/rob3.jpg" fluid className='litterImage' />
              </div>
            </Col>
          </Row>

          <hr className='sectionSeparator' />

          <Row className='centerRow'>
            <Col className='centersplider'>
              <OurGoldensSplider />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurGoldens

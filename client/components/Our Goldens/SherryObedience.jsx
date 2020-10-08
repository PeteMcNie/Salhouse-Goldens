import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

function SherryObedience () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col>
              <h2 className='litterTitle'>Obedience show achievements</h2>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p className='obediencetitle'>Date</p>
            </Col>
            <Col lg={9}>
              <p className='obediencetitle'>Show Details</p>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>25 February 2012</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>Sherry competed in her first Championship obedience test in Special Beginners and achieved 2nd place on 72 points. Very proud of her.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Image src="images/so2.jpg" fluid className='obedienceimagetop' />
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>26 February 2012</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>Sherry got 2nd place with 69 points.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Image src="images/so3.jpg" fluid className='obedienceimage'/>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>10 March 2012</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>4th place - 70.5 points, Waikanae</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <p>No photo</p>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>11 March 2012</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>2nd place - 71 points, Waikanae</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <ResponsiveEmbed aspectRatio="16by9" className='obedienceimagevideo'>
                  <embed src="https://www.youtube.com/embed/QL6PinJ3p64" />
                </ResponsiveEmbed>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>8 September 2013</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>1st place - 72 points, Hawke&apos;s Bay - (won out of Special Beginners)</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Image src="images/so4.jpg" fluid className='obedienceimage'/>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>3 May 2014</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>Sherry gained her CDX title gaining 161.5 points out of 170! Wanganui</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <p>No photo</p>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>21 February 2015</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>Photo below shows Sherry winning her first Novice after nearly a year in that class. She scored 99.5 out of 100, Horowhenua Obedience, Levin</p>
                <p>One more win in Novice and then she has to go up to Test A.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Image src="images/so5.jpg" fluid className='obedienceimage' />
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={2} className='leftCol'>
              <p>8 March 2015</p>
            </Col>
            <Col lg={4}>
              <div>
                <p>Sherry winning her second Novice competition scoring 97 points. This qualifies her to compete in Test A competitions now.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Image src="images/so6.jpg" fluid className='obedienceimage'/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SherryObedience

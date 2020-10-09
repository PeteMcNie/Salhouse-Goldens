import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Thanks () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col>
            <h2 className='bodyTitle'>Thanks</h2>
            <p>
            Thanks to my sons, Nigel and Pete who helped me get this website working and gave invaluable advice along the way.
            </p>
            <p>
            Thanks also to my husband, Rob, and all three of my boys who have put up with my doggie talk and doings over
            the years. As Jeff says, &ldquo;Just thank us for being second best!&ldquo;
            </p>
            <p className='bottomElement'>
            My thanks go to all the people in the doggie world who have been so supportive of everything I have done and
            who have guided me to help me realise my dreams. In particular I would like to thank Sandy for all her support
            every day and also to Jan who allowed me to use her beautiful boy, Jordan, on Kula and who has also helped me
            to trim my dogs for the show ring and give me show advice.  And more recently to Gaye who allowed me to use
            the lovely Gambler on Shadow to get Sherry.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Thanks

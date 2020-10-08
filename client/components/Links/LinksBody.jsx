import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function LinksBody () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col lg={6} className='leftCol'>
            <h2 className='bodyTitle'>Links</h2>
            <p>Our favourite links:</p>
            <ul>
              <li><p><a href='https://www.mistymoorgoldens.com/'>Mistymoor Golden Retrievers</a> (home of NZ CH Santamaria The Patriot, Shadow&apos;s Sire)</p></li>
              <li><p><a href='https://sandlewoodgoldens.com/'>Sandlewood Golden Retrievers</a> (home of CH Sandlewood Gamble With Gold, Sherry&apos;s Sire)</p></li>
              <li><p><a href='https://www.dogsnz.org.nz/breeds/golden-retriever'>New Zealand official breed standard</a> (breed standard for golden retrievers in New Zealand)</p></li>
              <li><p><a href='https://en.wikipedia.org/wiki/Golden_Retriever'>Wikipedia Golden Retrievers</a></p></li>
              <li><p><a href='http://cgrcnz.org/'>Central Golden Retriever Club</a></p></li>
              <li><p className='linkslastline'><a href='https://keridale.com/'>Keridale Golden Retrievers</a> (another good breeder&apos;s website in New Zealand)</p></li>
            </ul>
          </Col>
          <Col lg={6}>
            <div>
              <Image src="images/link1.jpg" fluid className='linksimage'/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LinksBody

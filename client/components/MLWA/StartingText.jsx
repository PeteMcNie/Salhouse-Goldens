import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StartingText () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col className='leftCol'>
            <h2 className='bodyTitleMLWA'>My Life With Animals</h2>
            <p>
              My love of animals started when I was growing up in England. My Dad was not really receptive to having animals
              in the house. However, I presume that at some stage my Mum persuaded him that it would be good for me to have a
              furry creature as I remember I had a hamster called Jingle Bells, and a rabbit called Sandy. Dear Jingle Bells
              did a disappearing act one day – bending apart the bars of his cage and escaping. The suspicion was that he was
              aided by either my eldest brother or my Dad, but neither owned up and this will remain a mystery for all time now.
              Sandy, on the other hand, I believe, made his own escape. He was housed in a run in the garden. He had all the
              creature comforts that a bunny could want but one day (or night) he dug under the wire of the run and escaped too.
              I can remember searching the streets for Sandy and searching every cupboard and nook and cranny in the house for
              Jingle Bells, but we never saw either of them again. So I can say that my first foray into keeping animals wasn’t
              all that successful.
            </p>
          </Col>
        </Row>
        <hr className='sectionSeparator' />
      </Container>

    </>
  )
}

export default StartingText

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function GroomingService () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col className='leftCol'>
              <h2 className='bodyTitle gygTitle' >Grooming Service</h2>
              <p>
                I provide a grooming service for Golden Retrievers. The groom includes two shampoo washesand a conditioning wash,
                blow dry, and then trimming of feet, tail, ears, neck, underside if needed and stripping out coat if there is a lot
                of undercoat. I do not shave Golden Retrievers. They have a double coat for a reason, and partly it&apos;s an air
                conditioning unit. The best way to relieve a Golden that you think is feeling the heat is to get the undercoat removed.
                If your dog is shaved, the sun and heat has more access to the body of the dog but you haven&apos;t actually stripped out any
                of the undercoat. All that has been done is to make the thick coat less long instead of actually thinning out the coat
                which will work much better.  If shaved, the undercoat will grow back first and not provide the protection that the coarser
                top-coat does. The dog will feel hotter and the undercoat will get wet when swimming and take a long time to dry which can
                cause skin issues. Most dogs feel the heat in the summer anyway, but with a correct groom there will be the correct
                protection for your dog without ruining the coat.
              </p>
              <p>
                I am not a professionally trained groomer, but I have had years of grooming Goldens for the show ring and love grooming
                this breed.
              </p>
              <p>
                Contact Carole on 04 566 0561 or email <a href='mailto:cmcnie@xtra.co.nz?subject=Enquiry regarding Golden Retriever grooming'>cmcnie@xtra.co.nz</a> if you are in the Wellington region (I&apos;m
                actually in Lower Hutt) and would like your Golden groomed.
              </p>
            </Col>
          </Row>
          <hr className='sectionSeparator' id='t&p'/>
        </Container>
      </div>
    </>
  )
}

export default GroomingService

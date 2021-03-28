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
                I provide a grooming service for Golden Retrievers. A full groom includes a trim of your Golden&apos;s neck, ears, feet and
                tail and sometimes the length underneath the body if it&apos;s too long. I also remove some of the undercoat and any loose
                fur and knots. I do not shave Golden Retrievers. They have a double coat for a reason, and partly it&apos;s an air
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
            </Col>
          </Row>
          <hr className='sectionSeparator' id='t&p'/>
        </Container>
      </div>
    </>
  )
}

export default GroomingService

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutUsBody () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col>
            <h2 className='bodyTitle'>What we are about</h2>
            <p>
              I am an animal lover and in particular I love my dogs. I dabbled in agility with my first Golden Retriever, Phoenix, when
              she was young. After I purchased Kula, I decided to breed a litter with her and have had a litter with each of my dogs
              since then. I compete in breed showing quite a bit now with the dogs I have bred.
            </p>
            <p>
              Golden Retrievers are a very loving, friendly type of dog that it is easy to have fun with. I do enjoy going away to shows
              and the social life with that and having a very occasional litter if I want a puppy. I have picked dogs that I think have
              lovely natures and also look very nice. All the goldens are checked for general health, tested for hip, elbow, eyes and DNA
              tested. Although there can be no guarantees for the health of a puppy, the best endeavour is made to produce healthy family dogs.
              You will see from some of the lovely photos on this website, we spend a lot of time walking our dogs. We like to explore different
              walks near to home or far away and are lucky enough to have access to many walking tracks.
            </p>
          </Col>
        </Row>
        <hr className='sectionSeparator' id='salhouse'/>
        <div>
          <Row className='row'>
            <Col>
              <h2 className='bodyTitle'>Where &apos;Salhouse&apos; comes from</h2>
              <p>
                When I was a child we used to go for boating holidays on the Norfolk Broads in Norfolk, England. These were happy days and
                there was one Broad called Salhouse Broad that I can remember we had great fun at. It was a beautiful Broad and we moored
                there for the night and got up to all sorts of mischief, jumping off the boat into the water, playing on the shore - cricket,
                football, climbing trees etc. Anyway, when I was wanting to get a name for my kennel I decided I wanted a name that my Dad
                (who has since passed away) would recognise and something that meant happy times with him to me. I went through a lot of
                names and in fact could have picked any of them, but in the end I decided on Salhouse which will forever remind me of my Dad
                and my happy holidays on the Broads.
              </p>
              <p>
                The litter of puppies that Kula had in 2006 all were given pedigree names of cruisers that were on the Norfolk Broads with the
                word &ldquo;Sun&ldquo; in them. Hence, Salhouse Sunchaser, Sundancer, Sunburst etc.  We have continued on with this tradition with Shadow&apos;s
                litter naming them Golden Light at Salhouse, Prince of Light at Salhouse, etc.
              </p>
              <p><a href='https://www.salhousebroad.org.uk/'>https://www.salhousebroad.org.uk/</a></p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default AboutUsBody

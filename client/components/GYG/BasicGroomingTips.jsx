import React from 'react'

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BasicGroomingTips () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle gygTitle'>Basic Grooming Tips</h2>
              <p>
                It&apos;s good to learn how to clean their ears out, or at least look in their ears regularly as they can get build
                up of gluggy wax and ear infections. The inside of the ear flap should be pink but not red and hot. If it is then
                it&apos;s possible your Golden has a little yeast infection deeper in the ear and this needs veterinary attention. Sometimes
                they may shake their heads a lot and/or scratch their ear. This again could be the result of an uncomfy feeling in the
                ear that needs attention. Always good to look for these things. If you are confident then you can get ear wipes from the
                pet shop and clean the ears out yourself. Put your finger with the wipe on into the ear and clean around the beginning
                of the ear canal. If it comes up with a lot of brown or black wax, use a clean part of the wipe and keep going until
                you&apos;ve got it cleaned out. Sometimes they can get a lot of ear wax but not actually have an infection. It&apos;s just good to
                keep them clean in these instances.
              </p>
              <p>
                If you find that your Golden&apos;s coat gets too thick with lots of undercoat that you can&apos;t get out and he/she seems
                to be moulting all the time, it can be useful to learn how to strip their coat out yourself. You can use a dog rake as below.
                The rake is an easy implement to use.  Make sure you comb the rake through the neck and the feathers of the front and back
                legs as well as the body of your Golden. You can also use a slicker brush (pictured below) which will get undercoat out and
                can be easier to brush through the feathers of the legs, especially if there are some small knots. Make sure if you are
                pulling on a knot, hold the fur with your other hand halfway down the length to the skin to prevent it from pulling. If
                knots are too big, cut them out gently, being careful to make sure your Golden is still and not likely to move at this time.
              </p>
              <p>
                Nails are another thing that need attention. Walking on pavements doesn&apos;t provide enough trimming for most Goldens&apos;
                nails. Over time they grow longer and longer until they start to touch the ground and turn the toes slightly to one side. You
                can imagine that if you have your toe slightly pushed to the side all the time there will be an ache that gradually becomes
                more uncomfortable and then there is a reluctance to continue to walk much. If the nails are kept trimmed then the bones of
                the toe can just sit in their normal position and your Golden won&apos;t even notice them.
              </p>
            </Col>
            <Col lg={6}>
              <div>
                <Image src='images/gyg2.jpg' className='litterImage' />
                <p className='litterText'>Rake</p>
              </div>
              <div>
                <Image src='images/gyg3.jpg' className='litterImage'/>
                <p className='litterText'>Slicker brush</p>
              </div>
            </Col>
          </Row>
          <hr className='sectionSeparator' id='groomingService' />
        </Container>
      </div>
    </>
  )
}

export default BasicGroomingTips

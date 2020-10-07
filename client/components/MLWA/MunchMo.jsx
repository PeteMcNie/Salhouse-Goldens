import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function MunchMo () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col lg={6} className='leftCol'>
            <h2 className='bodyTitle'>Munch</h2>
            <p>
              Munch, the rabbit, lasted for a long time too. She was 10 when she died, which I gather is quite a good age.
              However, when she was 5 she became ill with blood in her urine. The vet prescribed antibiotics but this didn’t
              clear it up. So she said that it could possibly be crystals on the bladder. To operate on this would cost about
              $150 and there was no guarantee that she would survive because rabbits are not very good under anaesthetic and
              tend to die. In those days that was a lot of money for us. However, I loved that rabbit and didn’t want her to
              suffer and so we decided to go for the operation and we would find the money somehow.
            </p>
            <p>
              It was worth it. I got a phone call from the vet to say that Munch had come through the operation and that the
              problem was not crystals on the bladder, but an infection in the uterus. When she had opened Munch up she could
              see that the uterus was a ball of pus. She basically speyed her, taking away everything that she could including
              the ovaries. She said that if she hadn’t got it all out and the infection continued then we would lose Munch
              because she couldn’t cut anything more out. Apparently this infection can be caused by cats. The vet had asked
              whether we had a cat and I said yes. Munch and Maddie used to touch noses through the cage and its possible that
              that was the cause of the infection. We used to let Munch out into the garden most days when we were there. Maddie
              would take off because Munch would like to chase her and bite her heels. So although they seemed to have a friendly
              attachment when Munch was in her cage, it was a different story when she was let out.
            </p>
          </Col>
          <Col lg={6}>
            <div>
              <Image src="images/munch.jpg" fluid />
            </div>
          </Col>
        </Row>
        <Row className='row'>
          <Col lg={6} className='leftCol'>
            <p>
              The good news was that that operation was much simpler for the vet to carry out and it only cost $90. So that was a
              bonus. And on top of that, Munch made a full recovery and as I said before, lived to be ten years old. That was the
              most worthwhile $90 I have ever spent.
            </p>
            <p>
              So we had a few years there where we had an array of animals. As the kids grew up I started to work a bit more
              and although only part-time, I didn’t replace the caged animals as they were a bit time consuming to look after.
              We also used to go back to England at least every couple of years and it was hard to get someone to look after
              those animals. Dogs and cats are fine as they can go to kennels and catteries. However, we were very lucky with
              one of our neighbours who loved animals. Maddie used to stay at home when we went away and our neighbour, Margaret,
              used to come and feed her and play with her and she also did Munch and the guinea pigs too. Pepper went into
              kennels.
            </p>
          </Col>
          <Col lg={6}>
            <div>
              <Image src="images/munchinvestigatesgarden.jpg" fluid />
            </div>
          </Col>
        </Row>
        <hr className='sectionSeparator' />
        <Row className='row'>
          <Col lg={6} className='leftCol'>
            <h2 className='bodyTitle'>Mo</h2>
            <p>
              At this stage we also got another lovely little kitten that we called Mo. I have to mention her here because she was
              so beautiful but unfortunately this story is too short as before she was one year old she was hit by a car outside
              our house and died before we could get to her. We have never forgotten her though.
            </p>
          </Col>
          <Col lg={6}>
            <div>
              <Image src="images/mo.jpg" fluid />
            </div>
          </Col>
        </Row>
        <hr className='sectionSeparator' />
      </Container>
    </>
  )
}

export default MunchMo

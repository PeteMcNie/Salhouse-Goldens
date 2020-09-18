import React from 'react'

import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

import NavbarComp from '../NavbarComp'

function Phoenix () {
  return (
    <>
      <NavbarComp />
      <Jumbotron id='phoenixj' fluid>
        <h1 className='jumbotronTitle'>Phoenix</h1>
      </Jumbotron>
      <Container>
        <Row><Col></Col></Row>
        <Row>
          <Col>
            <h2>Phoenix</h2>
            <p>Sire: Braeview the Kingmaker</p>
            <p>Dam: Honey of Frandale</p>
            <p>10 January 2002 - 14 September 2016</p>
          </Col>
          <Col>
            <Splide>
              <SplideSlide>
                <Image src="images/phoenix2.jpg" fluid />
              </SplideSlide>
              <SplideSlide>
                <Image src="images/phoenix3.jpg" fluid />
              </SplideSlide>
            </Splide>

            <p>Puppy Phoenix used to be a doorstop!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Phoenix was my first golden and is a beautiful pet. I have dabbled in agility and a tiny bit of obedience with her but
              really she is mainly a pet who lives with us and enjoys herself, mostly. She does have one or two phobias, e.g. she
              doesn&apos;t like thunder and tends to be a bit claustrophobic. But other than that, she is a lovely pet. She is very gentle
              and light on her feet and loves nothing more than to have a tug of war with whoever might be around to play, be it
              human or dog!
            </p>
          </Col>
          <Col>
            <Image src="images/phoenix3.jpg" fluid />
            <p>We are not amused at bath time!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              About three years ago she was diagnosed with cataracts forming in her eyes. Then a year ago we discovered that she also
              had retinal degeneration. She is 8 years old now and is partially blind. We may decide to have the cataracts operated
              on some time this year, but there is no cure for the retinal degeneration which will eventually make her totally blind.
              So it will be interesting to see how she gets on over the next couple of years. At the moment, even though her eyesight
              is generally poor, when we go for walks in the bush, even at night, she is far better finding her way along the path
              than I am. I who have to have a torch and fall off the path if I am not careful. Dogs obviously work on other senses
              than eyesight to guide them. We will have to help her though and it will be a challenge but one that we will face together.
              Phoenix was spayed when she was young so we will not be passing this particular problem on to others.
            </p>
            <p>
              To find out more about how Phoenix came into our lives, go to the <a href='/mylifewithanimals'>My Life with Animals</a> page.
            </p>
          </Col>
          <Col>
            <Image src="images/phoenix4.jpg" fluid />
            <p>We do, however, love watching fish!</p>
            <Image src="images/phoenix5.jpg" fluid />
            <p>And playing tug of war with anyone - even Shadow!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Phoenix finally passed away on 14 September 2016. That was a very sad day. No, I can&apos;t just say that... that was a
              devastating day. We did it all in the best way we could for her and for that I am forever thankful. However, it was
              still too soon. I wanted to hold her forever and keep her, but for her sake it was kindest to let her go. She took a
              piece of our hearts with her and we will never forget her. Our lasting message for our beautiful Phoenix was &ldquo;Thank you
              for sharing your life with us.&ldquo; I miss you so very much my beautiful girl! xx
            </p>
          </Col>
        </Row>
      </Container>

      <hr />
      <div>
        <p>Photos:</p>

        <Image src="images/phoenix6.jpg" fluid />
        <Image src="images/phoenix7.jpg" fluid />
        <p>And we love opening Christmas presents!</p>
        <Image src="images/phoenix8.jpg" fluid />
        <p>Phoenix can also do the serious stuff too - 1st prize in elementary agility!</p>
        <Image src="images/phoenix9.jpg" fluid />
        <p>Jumping through the tyre.</p>
        <Image src="images/phoenix10.jpg" fluid />
        <p>Phoenix posing.</p>
        <Image src="images/phoenix11.jpg" fluid />
        <p>Phoenix meets a friend.</p>
        <Image src="images/phoenix12.jpg" fluid />
        <p>Phoenix at The Pinnacles!</p>
        <Image src="images/phoenix13.jpg" fluid />
        <p>Lady muck, posing again!</p>
      </div>
    </>
  )
}

export default Phoenix

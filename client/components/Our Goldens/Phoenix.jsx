import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavbarComp from '../NavbarComp'
import PhoenixSplider from './PhoenixSplider'

function Phoenix () {
  return (
    <>
      <NavbarComp />
      <Jumbotron id='phoenixj' fluid>
        {/* <div>
          <h1 className='jumbotronTitle'>Phoenix</h1>
          <p className='line phoenix'></p>
        </div> */}
      </Jumbotron>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Phoenix</h2>
              <p>Sire: Braeview the Kingmaker</p>
              <p>Dam: Honey of Frandale</p>
              <p>10 January 2002 - 14 September 2016</p>
              <p>
                Phoenix was my first golden and was a beautiful pet. However, I purchased her in ignorance of the importance of looking
                into the genetics and finding a breeder who did all the necessary health checks. As you will see from her story here,
                her eyesight was something that bugged her for a lot of her life. I wouldn&apos;t have been without this beautiful dog and
                I loved her to bits, but it was very sad to see her struggle with something that if the breeder had been responsible,
                she would never have bred two litters from the same parents as there was always going to be a problem with some of the
                puppies.
              </p>
              <p>
                In her younger years, I dabbled in agility and a tiny bit of obedience with Phoenix and we had a lot of fun. But
                really she was mainly a pet/family member who lived with us in our house and enjoyed herself, mostly. She did have
                one or two phobias, e.g. thunder and claustrophobia.
              </p>
              <p>
                Phoenix was never a confident swimmer, but she enjoyed a paddle and an occasional little swim. She loved rolling
                in the grass, especially fresh cut grass. And she had one BIG word, “Whooooooo”, which she used on special occasions
                when a friend came round or she wanted to voice her excitement at something. And tugging, she was the best at that,
                growling when we teased her by touching her front paws. That made her tug even harder - she never let go.
              </p>
              <p>
                She was also a pretty good Christmas pressie unwrapper. One year, she got to the pressies under the tree on Christmas
                Eve when I wasn&apos;t looking and opened up all the ones that had food in them. She really enjoyed the chocolate raisins,
                doggie treats and Jaffa Cakes!
              </p>
              <p>
                She was also the best auntie for the litters of puppies that Kula and Shadow had, letting the puppies jump all over
                her and playing with them for hours on end.
              </p>
              <p>
                When she was about four years old, Phoenix was diagnosed with cataracts forming in her eyes. We had them operated
                on a few years later, but she never got full sight properly again. And after that bad news, we discovered she also
                had retinal degeneration. There is no fix for that, and she would gradually go blind. However, dogs are amazing
                creatures and she pottered about happily on our walks and around the home using more of her other senses like hearing
                and smell. She used to amaze me how well she got around in the dark as well when I would be fumbling around even with my good eyesight.
              </p>
              <p>
                Phoenix finally passed away on 14 September 2016. That was a very sad day. No, I can&apos;t just say that... that was a devastating day.
                It was only because of her failing eyesight and the fact she was not doing well mentally at this time. It taught me a big lesson to
                look not just at the physical wellbeing of a dog, but also the mental wellbeing. But it was still too soon. I wanted to hold her
                forever and keep her, but for her sake it was kindest to let her go. She took a piece of our hearts with her and we will never
                forget her. Our lasting message for our beautiful Phoenix was “Thank you for sharing your life with us.“ I miss you so very
                much my beautiful girl! xx
              </p>
              <p>
                To find out more about how Phoenix came into our lives, go to the <a href='/mylifewithanimals'>My Life with Animals</a> page.
              </p>
            </Col>
            <Col lg={6}>
              <PhoenixSplider />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Phoenix

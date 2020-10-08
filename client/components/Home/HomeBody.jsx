import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HomeBody () {
  return (
    <>
      <Container>
        <Row className='row'>
          <Col className='leftCol'>
            <h2 className='bodyTitle'>Welcome to Salhouse Golden Retrievers</h2>
            <p>
              I am a dog lover who fell in love with this beautiful breed when I was a child in England.
              If you would like to read the story of the animals in my life please visit the <a href='/mylifewithanimals'>My Life with Animals</a> page.
            </p>
            <p>
              The golden retrievers in the above photograph are <a href='/tuppence'>Tuppence</a>, <a href='/shadow'>Shadow</a>,
              <a href='/kula'> Kula</a>, <a href='/sherry'>Sherry</a> and <a href='/autumn'>Autumn</a>, with <a href='/phoenix'>Phoenix</a> laying
              down in front. Unfortunately our dear sweet Phoenix passed over the Rainbow Bridge in September 2016 at the ripe
              old age of 14 years, 8 months. However, she is still very much in our hearts and minds and it is very hard to think
              about the fact that she is no longer with us. My website will still tell the story of Phoenix because she was the
              most beautiful first golden for me to own and was the reason I wanted to have more of them. I can&apos;t thank her enough
              for the lessons she taught me and the loyalty only a dog can give even when the human is less than perfect.
            </p>
            <p>
              Kula was born in 2003 and is a really loving dog who is my only real retriever at the moment (due either to the other
              four&apos;s obstinance or my bad training). She loves nothing more than to swim in the river or sea fetching as many sticks
              as I can throw for her. In 2007, Kula had a beautiful litter of puppies and we kept one female who we named Shadow. She
              is a real character and is such fun to be with. She is so enthusiastic about her people and yet she has the loveliest
              nature. Shadow had a litter of 7 puppies in April 2010 and we have kept one of those, Sherry. We added an item to the
              News page each day from the day the puppies were born to the time they left us. There are loads of photos and videos of
              these puppies and some stories of them growing up. Go to the News page to see these stories and more. Sherry gave birth
              to two female puppies on 16 June 2015 - Autumn and Tuppence. Only having two in the litter made it impossible for us to
              part with one, so, although we had only wanted to keep one, we found ourselves with the two naughties! And then on from
              that episode, Autumn had a litter of seven puppies in March 2019, of which we kept one who we called Siren.
            </p>
            <p>
              If you want to find out more about each of these beautiful dogs, please go to their page to learn more.
            </p>
            <p>
              Shadow, Sherry and Autumn are breed champions. Sherry did compete in championship obedience competitions up to Test A level
              and has gained the CDX title. However, when Autumn and Tuppence came along it was too much to continue training Sherry and
              the puppies and so she is retired from the obedience ring. Tuppence is a very smart dog and at the present time is in
              training and hopefully one day I will get her into the obedience ring. Go to their individual pages to learn more about them.
            </p>
            <p>
              Goldens are wonderful pets - they are loyal, friendly and good with children . I hope you like mine and get your own one day!
            </p>
            <p>
              This website has lots of lovely photos of goldens and some other animals that I have owned, I hope you enjoy looking round it.
              Click on each photo if you want to see it enlarged.
            </p>
          </Col>
        </Row>
        <hr className='sectionSeparator' />
      </Container>
    </>
  )
}

export default HomeBody

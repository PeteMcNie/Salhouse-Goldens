import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import NavbarComp from '../NavbarComp'
import TuppenceSplider from './TuppenceSplider'

function Tuppence () {
  return (
    <>
      <NavbarComp />
      <Jumbotron id='tuppencej' fluid />
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Tuppence</h2>
              <h3>Tuppenny Nudger at Salhouse (Tuppence)</h3>
              <p>Sire: Sandlewood Bowl-Me-Over</p>
              <p>Dam: CH Golden Light at Salhouse CDX</p>
              <p>16 June 2015 - present</p>
              <p>
                Tuppence is the smaller of the two sisters. She is a beautiful, happy family dog. She has been an avid supporter
                at shows to her sister, mum and grandma whenever they show.
              </p>
              <p>
                Tuppence is the smartest dog I have ever owned, and in fact, I had to learn a different way of teaching her as she is a
                thinking dog. She is not particularly a cuddler, but that is because if you go to cuddle her, you can see her thinking,
                what should I do now, does she want me to do something, or some such thing. She has got heaps of enthusiasm and picks up
                new tricks really easily. Her biggest drawback is the ability of her trainer, me! In February 2017 I took her to a
                trick workshop one Saturday. The other dogs that went had been trained at the facility previously. The only training
                Tuppence had done was the training that I have done with her throughout her life. It is extensive training but doing
                it on your own makes it quite interesting as you&apos;re never quite sure how well you&apos;re doing. Anyway, we had to achieve
                15 points doing up to 15 tricks to gain a certificate and a ribbon at this workshop. Tuppence flew through the tricks
                and passed. That&apos;s how smart this little dog is.
              </p>
              <p>
                Tuppence is another one, like her sister, who throws herself into everything with gusto. She can swim, but she much
                prefers to stand at the edge of the water and catch shells that we flick to her. If she is going along the river
                walk, she will stand in the water, but when we pass the point that she is at and it&apos;s obvious we&apos;re not going to
                throw anything for her to catch, she comes out and races flat tack ahead of us to wait again.
              </p>
              <p>
                This little dog has taught me much. I made a mistake with her when she was young. She would race around at full
                tilt and get the zoomies on and race up our steps in the garden and back down again. I tried to stop her by
                watching her and keeping her near me, but often when I was hanging out the washing or had got distracted, she
                had taken off before I could stop her. Consequently, she has elbow dysplasia. She had them operated on when she
                was young and we had to make a decision about what to do with her life as the recommendation was to keep her on
                a lead, keep her weight down and regulate her exercise.
              </p>
              <p>
                This little dog is a free spirit. She hates the lead, although will walk on it, but it&apos;s not her preferred form
                of exercise. I decided that we would let her live a fun life, albeit perhaps a shorter one, with the freedom to
                run like the wind whenever she wants to.
              </p>
            </Col>
            <Col lg={6}>
              <TuppenceSplider />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='tableDiv'>
                <Table bordered responsive="sm">
                  <thead>
                    <tr>
                      <th colSpan='3' className='tableHead'>Pedigree of Tuppenny Nudger at Salhouse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='subHeading'>Parents</td>
                      <td className='subHeading'>Grandparents</td>
                      <td className='subHeading'>Great Grandparents</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Sire: Sandlewood Bowl-Me-Over</td>
                      <td rowSpan='2' className='grandparents'>NZ CH & Aust Grand CH Karparla Wicket Keeper (Imp-Aust)</td>
                      <td className='greatGrandparents'>Grand CH Tulzean Autumn Tango</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>Xanthos Are You Talking to Me (Imp UK)</td>
                    </tr>
                    <tr>
                      <td rowSpan='2' className='grandparents'>Seacove CH Kavandale Angeleyes</td>
                      <td className='greatGrandparents'>Dream Max Grandmother&apos;s Prospect (Imp-SWE) to Aust</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>CH Hawkwood Iduna</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Dam: CH Golden Light at Salhouse DDX</td>
                      <td rowSpan='2' className='grandparents'>CH Sandlewood Gamble-With-Gold</td>
                      <td className='greatGrandparents'>Goldfleece Go For Gold At Sandlewood (Imp-Aust)</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>CH Sandlewood Charlies-Angel</td>
                    </tr>
                    <tr>
                      <td rowSpan='2' className='grandparents'>CH Salhouse Sunchaser</td>
                      <td className='greatGrandparents'>NZ CH Santamaria The Patriot (Imp-Aust)</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>Sanastasia Sth&apos;n Star Chara</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Tuppence

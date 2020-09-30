import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import AutumnSplider from './AutumnSplider'

function AutumnMain () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Autumn</h2>
              <h3>CH Autumn Light at Salhouse (Autumn)</h3>
              <p>Sire: CH Sandlewood Bowl-Me-Over</p>
              <p>Dam: CH Golden Light at Salhouse CDX</p>
              <p>Whelped: 16 June 2015</p>
              <p>Hips: 6:6  Elbows: 0:0 Clear eye cert: 9 Jan 2019</p>
              <p>
                At the time of writing this Autumn is just 20 months old. She has already achieved Champion status in the show ring
                at the age of 14 months. Autumn is a clown and goes by lots of other names including Doofus, Nut Job, Goof Ball and
                Awesome! She is a full on dog with heaps of enthusiasm and wants to be in on absolutely everything that is going on.
                She gets very upset when I train her sister, Tuppence, and not her and also if I get the hose out but have shut the
                dogs indoors. She loves water. She is a very powerful swimmer and swims along the beach and river while I am walking.
                If she comes out of the water it is with a shower (or more like a downpour) of water flying off her in all directions
                as she runs as fast as she can to catch up or go ahead. She doesn&apos;t shake herself off until she has run quite a way
                and comes to a stop. Then it is only a brief stop before racing back into the water again where she seems to be the
                most happy.
              </p>
              <p>
                Autumn has become a really good retriever. She loves to retrieve balls from the river or sea, but also races around
                on land to get the ball. She is full on energy when she is out and about. However, at home, she is laid back and calm,
                except she is a guard dog when someone comes to the door or is over at the park opposite. She likes to bark and let
                us know they are there.
              </p>
              <p>
                In March 2019, Autumn had a litter of seven beautiful puppies. Six puppies found themselves lovely homes to go to,
                and one naughty one stayed with us here at Salhouse. Her name is Siren and she has her own page on this website.
              </p>
            </Col>
            <Col lg={6}>
              <AutumnSplider />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='tableDiv'>
                <Table bordered responsive="sm">
                  <thead>
                    <tr>
                      <th colSpan='3' className='tableHead'>Pedigree of Autumn Light at Salhouse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='subHeading'>Parents</td>
                      <td className='subHeading'>Grandparents</td>
                      <td className='subHeading'>Great Grandparents</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Sire: CH Sandlewood Bowl-Me-Over</td>
                      <td rowSpan='2' className='grandparents'>NZ CH & Aust Grand CH Karparla Wicket Keeper (Imp-Aust)</td>
                      <td className='greatGrandparents'>Grand CH Tulzean Autumn Tango</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>Xanthos Are You Talking to Me (Imp UK)</td>
                    </tr>
                    <tr>
                      <td rowSpan='2' className='grandparents'>CH Kavandale Angeleyes</td>
                      <td className='greatGrandparents'>Dream Max Grandmother&apos;s Prospect (Imp-SWE) to Aust</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>CH Hawkwood Iduna</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Dam: CH Golden Light at Salhouse CDX</td>
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

export default AutumnMain

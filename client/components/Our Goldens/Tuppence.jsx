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
      <Jumbotron id='tuppencej' fluid>
        {/* <div>
          <h1 className='jumbotronTitle tuppence'>Tuppence</h1>
          <p className='line'></p>
        </div> */}
      </Jumbotron>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Tuppence</h2>
              <h3>Tuppenny Nudger at Salhouse (Tuppence)</h3>
              <p>Sire: Sandlewood Bowl-Me-Over</p>
              <p>Dam: CH Golden Light at Salhouse CDX</p>
              <p>Whelped: 16 June 2015</p>
              <p>
                At the time of writing this Tuppence is just 20 months old. She is not a show dog but a beautiful, happy family dog.
                She is a supporter at shows to her sister, mum and grandma who still occasionally shows at 11 years of age. Tuppence
                is the smartest dog I have ever owned. She has got heaps of enthusiasm and picks up new tricks really easily. Her
                biggest drawback is the ability of her trainer, me! In February 2017 I took her to a trick workshop one Saturday.
                The other dogs that went had been trained at the facility previously. The only training Tuppence had done was the
                training that I have done with her throughout her life. It is extensive training but doing in on your own makes it
                quite interesting as you&apos;re never quite sure how well you&apos;re doing. Anyway, we had to achieve 15 points doing up to
                15 tricks to gain a certificate and a ribbon at this workshop. Tuppence flew through the tricks. That&apos;s how smart
                this little dog is. She has the most beautiful smile and is such an enthusiastic puppy.
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

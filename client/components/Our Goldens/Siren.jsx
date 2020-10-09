import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import SirenSplider from './SirenSplider'
import NavbarComp from '../NavbarComp'

function Siren () {
  return (
    <>
      <NavbarComp />
      <Jumbotron id='sirenj' fluid>
        {/* <div>
          <h1 className='jumbotronTitle'>Siren</h1>
          <p className='line siren'></p>
        </div> */}
      </Jumbotron>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Siren</h2>
              <h3>Salhouse Siren of Hearts (Siren)</h3>
              <p>Sire: CH Speyside Bon Chance CGC B</p>
              <p>Dam: CH Autumn Light at Salhouse</p>
              <p>Whelped: 26 March 2019</p>
              <p>
                Meet the beautiful Siren, who also has the nickname Naughty Pants. She came into our lives in March 2019 being the
                second puppy born to Autumn. Right from the start I did not want this puppy. She screamed for the first two days of
                her life, hence the name, and she is the wrong colour for me. I prefer the more golden ones. But throughout the eight
                weeks that we had the litter at home starting their lives, Siren kept on standing out by either doing something or
                glowing or standing out from the crowd. She was a bit of a loner. In the last couple of weeks when we had the puppies,
                when we called them to us, they would all come rushing over... all except one, Siren. She would just sit back and watch,
                not wanting to be in the melee of the other puppies.
              </p>
              <p>
                Siren has had a good start to her show career, being lightly shown in her first year. She has achieved a couple of
                group wins, and in her last show before the Covid-19 lockdown, she achieved a Best Puppy In Show award. Absolutely
                brilliant!
              </p>
            </Col>
            <Col lg={6}>
              <SirenSplider />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='tableDiv'>
                <Table bordered responsive="sm">
                  <thead>
                    <tr>
                      <th colSpan='3' className='tableHead'>Pedigree of Salhouse Siren of Hearts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='subHeading'>Parents</td>
                      <td className='subHeading'>Grandparents</td>
                      <td className='subHeading'>Great Grandparents</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Sire: CH Speyside Bon Chance</td>
                      <td rowSpan='2' className='grandparents'>CH Speyside Double Scotch</td>
                      <td className='greatGrandparents'>NZ & AUST CH Dykinta Grand Slam (Imp-Aust)</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>CH Speyside Under Cover Lover</td>
                    </tr>
                    <tr>
                      <td rowSpan='2' className='grandparents'>Larena Its Meant To Be (Imp UK)</td>
                      <td className='greatGrandparents'>Larena Harlequin</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>Islavale Cassie of the Spey via Larena</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Dam: CH Autumn Light at Salhouse</td>
                      <td rowSpan='2' className='grandparents'>CH Sandlewood Bowl-Me-Over</td>
                      <td className='greatGrandparents'>NZ CH & Aust Grand CH Karparla Wicket Keeper (Imp-Aust)</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>CH Kavandale Angeleyes</td>
                    </tr>
                    <tr>
                      <td rowSpan='2' className='grandparents'>CH Golden Light at Salhouse CDX</td>
                      <td className='greatGrandparents'>CH Sandlewood Gamble-With-Gold</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>CH Salhouse Sunchaser</td>
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

export default Siren

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

function SherryBreedShow () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col>
              <h2 className='litterTitle'>Breed Show Achievements</h2>
              <p>This page will document Sherry&apos;s show achievements - CH Golden Light at Salhouse.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='tableDiv last'>
                <Table bordered responsive="sm">
                  <thead>
                    <tr>
                      <th colSpan='3' className='tableHead'>Challenge Certificates Awarded</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='subHeading'>Date</td>
                      <td className='subHeading'>Show</td>
                      <td className='subHeading'>Judge</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>29 January 2011</td>
                      <td className='tabledata'>Nelson District Kennel Association</td>
                      <td className='tabledata'>C Butler (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>30 January 2011</td>
                      <td className='tabledata'>Nelson District Kennel Association</td>
                      <td className='tabledata'>L Butler (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>5 November 2011</td>
                      <td className='tabledata'>Southland Kennel Association</td>
                      <td className='tabledata'>Justine Blyth (Tasmania)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>6 November 2011</td>
                      <td className='tabledata'>Otago-Southland Gundog Society</td>
                      <td className='tabledata'>J Ellem (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>1 April 2012</td>
                      <td className='tabledata'>Napier Kennel Centre</td>
                      <td className='tabledata'></td>
                    </tr>
                    <tr>
                      <td className='tabledata'>16 February 2013</td>
                      <td className='tabledata'>Horowhenua Kennel Association</td>
                      <td className='tabledata'>Honey Glendinning (Canada)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>13 July 2013</td>
                      <td className='tabledata'>Otago Kennel Association</td>
                      <td className='tabledata'>Lynette Brown (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>29 March 2014</td>
                      <td className='tabledata'>Wairoa Kennel Association</td>
                      <td className='tabledata'>Max Martin (ACT)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>30 March 2014</td>
                      <td className='tabledata'>Napier Kennel Centre</td>
                      <td className='tabledata'>Lena Stalhandske (NSW)</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col>
              <div className='showImage'>
                <Image src="images/sherryShowAchievements.jpg" fluid className='centerimage'/>
                <p>Sherry wins Puppy of Group at Horowhenua Kennel Society show 13 Feburary 2011.</p>
                <Image src="images/sherry14.jpg" fluid className='centerimage'/>
                <p className='bottomtext'>Sherry with her Baby Puppy in Show awards from Auckland in August 2010.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SherryBreedShow

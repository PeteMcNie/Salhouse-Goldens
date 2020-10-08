import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

function ShadowBreedShow () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col>
              <h2 className='litterTitle'>Breed Show Achievements</h2>
              <p>This page will document Shadow&apos;s achievements - CH Salhouse Sunchaser.</p>
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
                      <td className='tabledata'>11 December 2010</td>
                      <td className='tabledata'>East Coast Ladies Kennel Association</td>
                      <td className='tabledata'>C Stuart (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>29 January 2011</td>
                      <td className='tabledata'>Tasman Districts Gundog Society</td>
                      <td className='tabledata'>B Balaam (Queensland)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>15 October 2011</td>
                      <td className='tabledata'>Ruahine Kennel Association</td>
                      <td className='tabledata'>S McMahon (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>29 October 2011</td>
                      <td className='tabledata'>West Coast Kennel Association</td>
                      <td className='tabledata'>Sue Gray (Tasmania)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>14 July 2013</td>
                      <td className='tabledata'>Otago Kennel Association</td>
                      <td className='tabledata'>Lyn Brand (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>16 November 2013</td>
                      <td className='tabledata'>Wairarapa Kennel Association</td>
                      <td className='tabledata'>Valma Morrow (NSW)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>15 March 2014</td>
                      <td className='tabledata'>Wanganui Kennel Society</td>
                      <td className='tabledata'>J Camac (VIC)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>15 March 2014</td>
                      <td className='tabledata'>Wanganui & District Gundog Society</td>
                      <td className='tabledata'>L Parekowhai (NZ)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>16 March 2014</td>
                      <td className='tabledata'>Wanganui Kennel Society</td>
                      <td className='tabledata'>E Blake-Watts (NZ)</td>
                    </tr>
                    <tr>
                      <td className='tabledata'>30 March 2014</td>
                      <td className='tabledata'>Napier Kennel Centre</td>
                      <td className='tabledata'>Susan Tringham (QLD)</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col>
              <div className='showImage'>
                <Image src="images/shadow3.jpg" fluid className='centerimage'/>
                <p>Shadow won her first CC at East Coast Ladies Kennel Association in Hawke&apos;s Bay, 11 December 2010.</p>
              </div>
            </Col>
          </Row>
          <Row className='row'>
            <Col>
              <div>
                <ResponsiveEmbed aspectRatio="16by9" >
                  <embed src="https://www.youtube.com/embed/ghk6ci2rf0w" />
                </ResponsiveEmbed>
                <p className='bottomtext'>
                    There are no photos of Shadow&apos;s next CC win, which was at the Tasman District Open Gundog show on 29 January
                    2011.  However, below is a short video of Shadow in the ring for a show on the same day (Nelson District Kennel
                    Assocation), at which she got Reserve Bitch CC.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ShadowBreedShow

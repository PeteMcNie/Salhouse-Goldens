import React from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

function ShadowBreedShow () {
  return (
    <>
      <div>
        <h2>Show achievements</h2>
        <p>This page will document Shadow&apos;s achievements - CH Salhouse Sunchaser.</p>
      </div>
      <div>
        <Table bordered size='sm' responsive="sm">
          <thead>
            <tr>
              <th colSpan='3'>Challenge Certificates Awarded</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date</td>
              <td>Show</td>
              <td>Judge</td>
            </tr>
            <tr>
              <td>29 January 2011</td>
              <td>Nelson District Kennel Association</td>
              <td>C Butler (NSW)</td>
            </tr>
            <tr>
              <td>30 January 2011</td>
              <td>Nelson District Kennel Association</td>
              <td>L Butler (NSW)</td>
            </tr>
            <tr>
              <td>5 November 2011</td>
              <td>Southland Kennel Association</td>
              <td>Justine Blyth (Tasmania)</td>
            </tr>
            <tr>
              <td>6 November 2011</td>
              <td>Otago-Southland Gundog Society</td>
              <td>J Ellem (NSW)</td>
            </tr>
            <tr>
              <td>1 April 2012</td>
              <td>Napier Kennel Centre</td>
              <td></td>
            </tr>
            <tr>
              <td>16 February 2013</td>
              <td>Horowhenua Kennel Association</td>
              <td>Honey Glendinning (Canada)</td>
            </tr>
            <tr>
              <td>13 July 2013</td>
              <td>Otago Kennel Association</td>
              <td>Lynette Brown (NSW)</td>
            </tr>
            <tr>
              <td>29 March 2014</td>
              <td>Wairoa Kennel Association</td>
              <td>Max Martin (ACT)</td>
            </tr>
            <tr>
              <td>30 March 2014</td>
              <td>Napier Kennel Centre</td>
              <td>Lena Stalhandske (NSW)</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr />
      <div>
        <Image src="images/shadow3.jpg" fluid />
        <p>Shadow won her first CC at East Coast Ladies Kennel Association in Hawke&apos;s Bay, 11 December 2010.</p>
        <p>
            There are no photos of Shadow&apos;s next CC win, which was at the Tasman District Open Gundog show on 29 January
            2011.  However, below is a short video of Shadow in the ring for a show on the same day (Nelson District Kennel
            Assocation), at which she got Reserve Bitch CC.
        </p>
      </div>
    </>
  )
}

export default ShadowBreedShow

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
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
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

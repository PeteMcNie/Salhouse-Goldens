import React from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

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
              <td>11 December 2010</td>
              <td>East Coast Ladies Kennel Association</td>
              <td>C Stuart (NSW)</td>
            </tr>
            <tr>
              <td>29 January 2011</td>
              <td>Tasman Districts Gundog Society</td>
              <td>B Balaam (Queensland)</td>
            </tr>
            <tr>
              <td>15 October 2011</td>
              <td>Ruahine Kennel Association</td>
              <td>S McMahon (NSW)</td>
            </tr>
            <tr>
              <td>29 October 2011</td>
              <td>West Coast Kennel Association</td>
              <td>Sue Gray (Tasmania)</td>
            </tr>
            <tr>
              <td>14 July 2013</td>
              <td>Otago Kennel Association</td>
              <td>Lyn Brand (NSW)</td>
            </tr>
            <tr>
              <td>16 November 2013</td>
              <td>Wairarapa Kennel Association</td>
              <td>Valma Morrow (NSW)</td>
            </tr>
            <tr>
              <td>15 March 2014</td>
              <td>Wanganui Kennel Society</td>
              <td>J Camac (VIC)</td>
            </tr>
            <tr>
              <td>15 March 2014</td>
              <td>Wanganui & District Gundog Society</td>
              <td>L Parekowhai (NZ)</td>
            </tr>
            <tr>
              <td>16 March 2014</td>
              <td>Wanganui Kennel Society</td>
              <td>E Blake-Watts (NZ)</td>
            </tr>
            <tr>
              <td>30 March 2014</td>
              <td>Napier Kennel Centre</td>
              <td>Susan Tringham (QLD)</td>
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
      <div>
        <ResponsiveEmbed aspectRatio="16by9">
          <embed src="https://www.youtube.com/embed/ghk6ci2rf0w" />
        </ResponsiveEmbed>
      </div>
    </>
  )
}

export default ShadowBreedShow

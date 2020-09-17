import React from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

function SherryObedience () {
  return (
    <>
      <div>
        <h2>Obedience show achievements</h2>
      </div>
      <div>
        <div>
          <Table borderless size='sm' responsive="sm">
            <thead>
              <tr>
                <th colSpan='2'>Obedience show achievements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Date</td>
                <td>Show Details</td>
              </tr>
              <tr>
                <td>25 February 2012</td>
                <td>
                  <p>Sherry competed in her first Championship obedience test in Special Beginners and achieved 2nd place on 72 points. Very proud of her.</p>
                  <Image src="images/so1.jpg" fluid />
                  <Image src="images/so2.jpg" fluid />
                </td>
              </tr>
              <tr>
                <td>26 February 2012</td>
                <td>
                  <p>Sherry got 2nd place with 69 points.</p>
                  <Image src="images/so3.jpg" fluid />
                </td>
              </tr>
              <tr>
                <td>10 March 2012</td>
                <td>4th place - 70.5 points, Waikanae</td>
              </tr>
              <tr>
                <td>11 March 2012</td>
                <td>
                  <p>2nd place - 71 points, Waikanae</p>
                  <div>
                    <ResponsiveEmbed aspectRatio="16by9">
                      <embed src="https://www.youtube.com/embed/QL6PinJ3p64" />
                    </ResponsiveEmbed>
                  </div>
                </td>
              </tr>
              <tr>
                <td>8 September 2013</td>
                <td>
                  <p>1st place - 72 points, Hawke&apos;s Bay - (won out of Special Beginners)</p>
                  <Image src="images/so4.jpg" fluid />
                </td>
              </tr>
              <tr>
                <td>3 May 2014</td>
                <td>Sherry gained her CDX title gaining 161.5 points out of 170! Wanganui</td>
              </tr>
              <tr>
                <td>21 February 2015</td>
                <td>
                  <p>Photo below shows Sherry winning her first Novice after nearly a year in that class. She scored 99.5 out of 100, Horowhenua Obedience, Levin</p>
                  <p>One more win in Novice and then she has to go up to Test A.</p>
                  <Image src="images/so5.jpg" fluid />
                </td>
              </tr>
              <tr>
                <td>21 February 2015</td>
                <td>
                  <p>Photo below shows Sherry winning her second Novice competition scoring 97 points, Kapiti Obedience, Waikanae </p>
                  <p>This qualifies her to compete in Test A competitions now.</p>
                  <Image src="images/so6.jpg" fluid />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default SherryObedience

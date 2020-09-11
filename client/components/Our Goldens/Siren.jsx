import React from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

import NavbarComp from '../NavbarComp'

function Siren () {
  return (
    <>
      <NavbarComp />
      <div className='belowNavbar'>
        <h2>Siren</h2>
      </div>
      <div>
        <h3>Salhouse Siren of Hearts (Siren)</h3>
        <p>Sire: CH Speyside Bon Chance CGC B</p>
        <p>Dam: CH Autumn Light at Salhouse</p>
        <p>Whelped: 26 March 2019</p>
        <div>
          <Image src="images/siren1.jpg" fluid />
        </div>
      </div>
      <div>
        <h4>Achievements:</h4>
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
      </div>
      <div>
        <Table bordered size='sm' responsive="sm">
          <thead>
            <tr>
              <th colSpan='3'>Pedigree of Salhouse Siren of Hearts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parents</td>
              <td>Grandparents</td>
              <td>Great Grandparents</td>
            </tr>
            <tr>
              <td rowSpan='4'>Sire: CH Speyside Bon Chance</td>
              <td rowSpan='2'>CH Speyside Double Scotch</td>
              <td>NZ & AUST CH Dykinta Grand Slam (Imp-Aust)</td>
            </tr>
            <tr>
              <td>CH Speyside Under Cover Lover</td>
            </tr>
            <tr>
              <td rowSpan='2'>Larena Its Meant To Be (Imp UK)</td>
              <td>Larena Harlequin</td>
            </tr>
            <tr>
              <td>Islavale Cassie of the Spey via Larena</td>
            </tr>
            <tr>
              <td rowSpan='4'>Dam: CH Autumn Light at Salhouse</td>
              <td rowSpan='2'>CH Sandlewood Bowl-Me-Over</td>
              <td>NZ CH & Aust Grand CH Karparla Wicket Keeper (Imp-Aust)</td>
            </tr>
            <tr>
              <td>CH Kavandale Angeleyes</td>
            </tr>
            <tr>
              <td rowSpan='2'>CH Golden Light at Salhouse CDX</td>
              <td>CH Sandlewood Gamble-With-Gold</td>
            </tr>
            <tr>
              <td>CH Salhouse Sunchaser</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr />
      <div>
        <p>Photos:</p>
        <Image src="images/siren2.jpg" fluid />
        <p>Siren wins Best Puppy In Show!</p>
      </div>
    </>
  )
}

export default Siren

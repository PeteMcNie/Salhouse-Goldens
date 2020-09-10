import React from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

import NavbarComp from '../NavbarComp'

function Tuppence () {
  return (
    <>
      <NavbarComp />
      <div className='belowNavbar'>
        <h2>Tuppence</h2>
      </div>
      <div>
        <h3>Tuppenny Nudger at Salhouse (Tuppence)</h3>
        <p>Sire: Sandlewood Bowl-Me-Over</p>
        <p>Dam: CH Golden Light at Salhouse CDX</p>
        <p>Whelped: 16 June 2015</p>
        <div>
          <Image src="images/tuppence1.jpg" fluid />
        </div>
      </div>
      <div>
        <h4>Achievements:</h4>
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
      </div>
      <div>
        <Table bordered size='sm' responsive="sm">
          <thead>
            <tr>
              <th colSpan='3'>Pedigree of Tuppenny Nudger at Salhouse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parents</td>
              <td>Grandparents</td>
              <td>Great Grandparents</td>
            </tr>
            <tr>
              <td rowSpan='4'>Sire: Sandlewood Bowl-Me-Over</td>
              <td rowSpan='2'>NZ CH & Aust Grand CH Karparla Wicket Keeper (Imp-Aust)</td>
              <td>Grand CH Tulzean Autumn Tango</td>
            </tr>
            <tr>
              <td>Xanthos Are You Talking to Me (Imp UK)</td>
            </tr>
            <tr>
              <td rowSpan='2'>Seacove CH Kavandale Angeleyes</td>
              <td>Dream Max Grandmother&apos;s Prospect (Imp-SWE) to Aust</td>
            </tr>
            <tr>
              <td>CH Hawkwood Iduna</td>
            </tr>
            <tr>
              <td rowSpan='4'>Dam: CH Golden Light at Salhouse DDX</td>
              <td rowSpan='2'>CH Sandlewood Gamble-With-Gold</td>
              <td>Goldfleece Go For Gold At Sandlewood (Imp-Aust)</td>
            </tr>
            <tr>
              <td>CH Sandlewood Charlies-Angel</td>
            </tr>
            <tr>
              <td rowSpan='2'>CH Salhouse Sunchaser</td>
              <td>NZ CH Santamaria The Patriot (Imp-Aust)</td>
            </tr>
            <tr>
              <td>Sanastasia Sth&apos;n Star Chara</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr />
      <div>
        <p>Photos:</p>
        <Image src="images/tuppence2.jpg" fluid />
        <p>Tuppence enjoys chewing things.</p>
        <Image src="images/tuppence3.jpg" fluid />
        <p>It was windy at the top of the hill. Tuppence (right) with her sister Autumn.</p>
        <Image src="images/tuppence4.jpg" fluid />
        <p>Sitting and waiting for the next command.</p>
        <Image src="images/tuppence5.jpg" fluid />
        <p>It must be Christmas!</p>
        <Image src="images/tuppence6.jpg" fluid />
        <p>Such a cutie Tuppence.</p>
        <Image src="images/tuppence7.jpg" fluid />
        <p>Puppy Tuppence in the beanbag with a piece of paper - little things amuse her.</p>
        <Image src="images/tuppence8.jpg" fluid />
        <p>Little Tuppence with her big sister, Autumn.</p>
        <Image src="images/tuppence9.jpg" fluid />
        <p>The two girls, Tuppence on the right.</p>
      </div>
    </>
  )
}

export default Tuppence

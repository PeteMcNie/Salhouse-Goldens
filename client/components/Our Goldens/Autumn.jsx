import React from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

import NavbarComp from '../NavbarComp'

function Autumn () {
  return (
    <>
      <NavbarComp />
      <div className='belowNavbar'>
        <h2>Autumn</h2>
      </div>
      <div>
        <h3>CH Autumn Light at Salhouse (Autumn)</h3>
        <p>Sire: CH Sandlewood Bowl-Me-Over</p>
        <p>Dam: CH Golden Light at Salhouse CDX</p>
        <p>Whelped: 16 June 2015</p>
        <p>Hips: 6:6  Elbows: 0:0 Clear eye cert: 9 Jan 2019</p>
        <div>
          <Image src="images/autumn1.jpg" fluid />
        </div>
      </div>
      <div>
        <h4>Achievements:</h4>
        <p>
            At the time of writing this Autumn is just 20 months old. She has already achieved Champion status in the show ring
            at the age of 14 months. Autumn is a clown and goes by lots of other names including Doofus, Nut Job, Goof Ball and
            Awesome! She is a full on dog with heaps of enthusiasm and wants to be in on absolutely everything that is going on.
            She gets very upset when I train her sister, Tuppence, and not her and also if I get the hose out but have shut the
            dogs indoors. She loves water. She is a very powerful swimmer and swims along the beach and river while I am walking.
            If she comes out of the water it is with a shower (or more like a downpour) of water flying off her in all directions
            as she runs as fast as she can to catch up or go ahead. She doesn&apos;t shake herself off until she has run quite a way
            and comes to a stop. Then it is only a brief stop before racing back into the water again where she seems to be the
            most happy.
        </p>
        <p>
            Autumn has become a really good retriever. She loves to retrieve balls from the river or sea, but also races around
            on land to get the ball. She is full on energy when she is out and about. However, at home, she is laid back and calm,
            except she is a guard dog when someone comes to the door or is over at the park opposite. She likes to bark and let
            us know they are there.
        </p>
        <p>
            In March 2019, Autumn had a litter of seven beautiful puppies. Six puppies found themselves lovely homes to go to,
            and one naughty one stayed with us here at Salhouse. Her name is Siren and she has her own page on this website.
        </p>
      </div>
      <div>
        <Table bordered size='sm' responsive="sm">
          <thead>
            <tr>
              <th colSpan='3'>Pedigree of Autumn Light at Salhouse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parents</td>
              <td>Grandparents</td>
              <td>Great Grandparents</td>
            </tr>
            <tr>
              <td rowSpan='4'>Sire: CH Sandlewood Bowl-Me-Over</td>
              <td rowSpan='2'>NZ CH & Aust Grand CH Karparla Wicket Keeper (Imp-Aust)</td>
              <td>Grand CH Tulzean Autumn Tango</td>
            </tr>
            <tr>
              <td>Xanthos Are You Talking to Me (Imp UK)</td>
            </tr>
            <tr>
              <td rowSpan='2'>CH Kavandale Angeleyes</td>
              <td>Dream Max Grandmother&apos;s Prospect (Imp-SWE) to Aust</td>
            </tr>
            <tr>
              <td>CH Hawkwood Iduna</td>
            </tr>
            <tr>
              <td rowSpan='4'>Dam: CH Golden Light at Salhouse CDX</td>
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
        <Image src="images/autumn2.jpg" fluid />
        <p>Autumn and her March 2019 puppies at eight weeks of age</p>
        <Image src="images/autumn3.jpg" fluid />
        <p>Autumn with puppies aged one day</p>
        <Image src="images/autumn4.jpg" fluid />
        <p>Another ribbon for Autumn - Junior of Group</p>
        <Image src="images/autumn5.jpg" fluid />
        <p>Ribbon for Autumn</p>
        <Image src="images/autumn6.jpg" fluid />
        <p>Autumn in her element in the mud!</p>
        <Image src="images/autumn7.jpg" fluid />
        <p>Another challenge certificate for Autumn</p>
        <Image src="images/autumn8.jpg" fluid />
        <p>Trying to hide in the grasses with her ribbons - in the South Island.</p>
        <Image src="images/autumn9.jpg" fluid />
        <p>Autumn on the right at Nelson.</p>
        <Image src="images/autumn10.jpg" fluid />
        <p>Pretty Autumn</p>
        <Image src="images/autumn11.jpg" fluid />
        <p>Autumn and Tuppence - Autumn definitely a tad bigger!</p>
        <Image src="images/autumn12.jpg" fluid />
        <p>Autumn (left) and Tuppence</p>
      </div>
    </>
  )
}

export default Autumn

import React, { useState } from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import NavbarComp from '../NavbarComp'

function KulaHome () {
  const [key, setKey] = useState('kulaHome')

  return (
    <>
      <NavbarComp />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='belowNavbar'
      >
        <Tab eventKey="kulaHome" title="Kula">
          <div>
            <h2>Kula</h2>
          </div>
          <div>
            <h3>Sanastasia Sth&apos;n Star Chara (Kula)</h3>
            <p>Sire: CH Seacove Southern Cross</p>
            <p>Dam: Sanastasia Treasured Teah</p>
            <p>5 June 2003 to 21 October 2019</p>
            <p>Hips: 7:8  Elbows: B:B  Eyes: Clear Eye Certificate 20/5/12</p>
            <div>
              <Image src="images/kula1.jpg" fluid />
            </div>
          </div>
          <div>
            <h4>Achievements:</h4>
            <p>
            Kula&apos;s greatest achievement was to have a lovely litter of puppies in 2006. She had a difficult pregnancy - for me
            anyway, as almost from the moment she got pregnant she wouldn&apos;t eat anything that had the word &ldquo;petfood&ldquo; on it. I can
            only guess that she had morning sickness throughout this pregnancy and it was a real challenge to find things for her
            to eat. If I found that she would eat fresh fish one day, I would buy in lots of it only to find that after about three
            days, she no longer wanted to eat that. So we would go on to something else - steak, sausages cooked on the barbecue,
            chicken, leftover food from our meals, eggs, cheese etc - only to find that in each occasion, after one or two days
            she would no longer eat that food. And its not as if we could go back to the same food a week or two later. It seemed
            that once she had eat a type of food it was then marked as &ldquo;never to touch again while I am pregnant&ldquo;. She drove me
            almost to despair when, at the end of her pregnancy she stopped eating totally for three days. I couldn&apos;t get her
            tempted at all and we watched the puppies seeming to get larger and Kula to get smaller. When she finally had the litter
            they were very healthy puppies and Kula, who was absolutely skin and bone by then, started to eat immediately, initially
            with half a pot of honey while she was in labour and then eating everything possible from then onwards. What a relief!
            </p>
            <p>
            Kula is my only dog to have clicked with the retrieve &ldquo;thing&ldquo;. She caught on at an early age that if she
            brought back the stick or the ball to my feet, she would have the fun of another chase - an achievement that sadly
            kula and Shadow seem to have missed out on. Kula is now going to try to do a bit of obedience. I think she has
            potential but we probably should have started a few years ago. However, she is pretty clever at picking things up and
            we can have some fun along the way.
            </p>
            <p>
            To find out more about how Kula came into our lives, go to the My Life with Animals page.
            </p>
            <p>
            Kula&apos;s Litter 2006.
            </p>
          </div>
          <div>
            <Table bordered size='sm' responsive="sm">
              <thead>
                <tr>
                  <th colSpan='3'>Pedigree of Sanastasia Sth&apos;n Star Chara</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Parents</td>
                  <td>Grandparents</td>
                  <td>Great Grandparents</td>
                </tr>
                <tr>
                  <td rowSpan='4'>Sire: CH Seacove Southern Cross</td>
                  <td rowSpan='2'>CH Glentreve Frozen-Asset</td>
                  <td>Eng. CH Paudell Easter Plantagenet at Kerrien (UK)</td>
                </tr>
                <tr>
                  <td>CH McIlroy Interlude</td>
                </tr>
                <tr>
                  <td rowSpan='2'>Seacove Bireme</td>
                  <td>GR & Aust. CH Caldicot Swift</td>
                </tr>
                <tr>
                  <td>Goldriver Amber-Sunrise QC CDX</td>
                </tr>
                <tr>
                  <td rowSpan='4'>Dam: Sanastasia Treasured Teah CDX</td>
                  <td rowSpan='2'>OB GR CH Speyside Fidgety Feet CDX</td>
                  <td>GR CH Graveleigh Soaring High QC CDX</td>
                </tr>
                <tr>
                  <td>Speyside Shades of Gold CDX</td>
                </tr>
                <tr>
                  <td rowSpan='2'>Sanastasia Special Lady CDX</td>
                  <td>Sanastasia Gold Falkor</td>
                </tr>
                <tr>
                  <td>Speyside Silver Lining CDX</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <hr />
          <div>
            <p>Photos:</p>
            <Image src="images/kula2.jpg" fluid />
            <p>Kula likes to snooze in the bean bag!</p>
            <Image src="images/kula3.jpg" fluid />
            <p>Kula posing.</p>
            <Image src="images/kula4.jpg" fluid />
            <p>Posing again, but upside down this time!</p>
            <Image src="images/kula5.jpg" fluid />
            <p>Kula after a swim at Lake Taupo.</p>
            <Image src="images/kula6.jpg" fluid />
            <p>Such a hot day, the only thing for it was to swim up the river.</p>
            <Image src="images/kula7.jpg" fluid />
            <p>Kula (right) and Shadow enjoy time in the sun.</p>
            <Image src="images/kula8.jpg" fluid />
            <p>Kula ready for a walk!</p>
            <Image src="images/kula9.jpg" fluid />
            <p>Kula&apos;s Mum - Teah.</p>
          </div>
        </Tab>
        <Tab eventKey="KulaLitter" title="Kula's Litter">
          <h1>Working yo</h1>
        </Tab>
      </Tabs>
    </>

  )
}

export default KulaHome

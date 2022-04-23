import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import KulaSplider from './KulaSplider'

function KulaMain () {
  return (
    <>
      <div className='mainBody'>
        <Container>
          <Row className='row'>
            <Col lg={6} className='leftCol'>
              <h2 className='bodyTitle'>Kula</h2>
              <h3>Sanastasia Sth&apos;n Star Chara (Kula)</h3>
              <p>Sire: CH Seacove Southern Cross</p>
              <p>Dam: Sanastasia Treasured Teah</p>
              <p>5 June 2003 - 21 October 2019</p>
              <p>
                Kula came into our lives when Phoenix was 18 months old. I consider this to be the perfect time to get a buddy for
                a solo dog because the older dog has got over the ‘naughty’ stage and can help with training the new puppy.
              </p>
              <p>
                Kula was a lovely buddy for Phoenix. She was a very gentle dog and tried always to do the right thing. She learnt
                to swim early on, clearly loving the water. I remember the day when we were down the river throwing sticks in for
                her and it was like she suddenly realised that if she brought a stick out, we would throw it back in again and
                she would get to have another swim. So, she has always been the best retriever for bringing a stick back to my
                feet so I don&apos;t have to walk a way to pick it up and throw again. I am forever grateful to her for that.
              </p>
              <p>
                One of Kula&apos;s greatest achievements was to have a lovely litter of puppies in 2006. She had a difficult
                pregnancy - for me anyway - as almost from the moment she got pregnant she wouldn&apos;t eat anything that had
                the word “petfood“ on it. I can only guess that she had morning sickness throughout this pregnancy, and it
                was a real challenge to find things for her to eat. If I found that she would eat fresh fish one day, I
                would buy in lots of it only to find that after about three days, she no longer wanted to eat that. So
                we would go on to something else - steak, sausages cooked on the barbecue, chicken, leftover food from
                our meals, eggs, cheese etc - only to find that on each occasion, after one or two days she would no
                longer eat that food. And it&apos;s not as if we could go back to the same food a week or two later. It seemed
                that once she had eaten a type of food, it was then marked as “never to touch again while I am pregnant“.
                She drove me almost to despair when, at the end of her pregnancy, she stopped eating totally for three days.
                I couldn&apos;t get her tempted at all and we watched the puppies seeming to get larger and Kula to get smaller.
                When she finally had the litter they were very healthy puppies and Kula, who was absolutely skin and bone
                by then, started to eat immediately, initially with half a pot of honey while she was in labour and then
                eating everything possible from then onwards. What a relief!
              </p>
              <p>
                Kula became a beautiful older golden, living to 16 years 4 months. She spent the last couple of years of
                her life pottering along behind us on walks, seeming to still enjoy them, although she had a few health
                problems in the last few months. A regal old lady who is very much missed, but we are forever indebted
                to her for the joy she gave us throughout her life.
              </p>
              <p>
                To find out more about how Kula came into our lives, go to the <a href='/mylifewithanimals'>My Life with Animals</a> page.
              </p>
            </Col>
            <Col lg={6}>
              <KulaSplider />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='tableDiv'>
                <Table bordered responsive="sm">
                  <thead>
                    <tr>
                      <th colSpan='3' className='tableHead'>Pedigree of Sanastasia Sth&apos;n Star Chara</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='subHeading'>Parents</td>
                      <td className='subHeading'>Grandparents</td>
                      <td className='subHeading'>Great Grandparents</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Sire: CH Seacove Southern Cross</td>
                      <td rowSpan='2' className='grandparents'>CH Glentreve Frozen-Asset</td>
                      <td className='greatGrandparents'>Eng. CH Paudell Easter Plantagenet at Kerrien (UK)</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>CH McIlroy Interlude</td>
                    </tr>
                    <tr>
                      <td rowSpan='2' className='grandparents'>Seacove Bireme</td>
                      <td className='greatGrandparents'>GR & Aust. CH Caldicot Swift</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>Goldriver Amber-Sunrise QC CDX</td>
                    </tr>
                    <tr>
                      <td rowSpan='4' className='parents'>Dam: Sanastasia Treasured Teah CDX</td>
                      <td rowSpan='2' className='grandparents'>OB GR CH Speyside Fidgety Feet CDX</td>
                      <td className='greatGrandparents'>GR CH Graveleigh Soaring High QC CDX</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>Speyside Shades of Gold CDX</td>
                    </tr>
                    <tr>
                      <td rowSpan='2' className='grandparents'>Sanastasia Special Lady CDX</td>
                      <td className='greatGrandparents'>Sanastasia Gold Falkor</td>
                    </tr>
                    <tr>
                      <td className='greatGrandparents'>Speyside Silver Lining CDX</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default KulaMain

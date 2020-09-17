import React from 'react'

import Image from 'react-bootstrap/Image'

import NavbarComp from '../NavbarComp'

function OurGoldens () {
  return (
    <>
      <NavbarComp />
      <div className='belowNavbar'>
        <h2>Our Goldens</h2>
      </div>
      <div>
        <p>
            We have the privilege to have owned six beautiful golden retrievers - Phoenix (RIP), Kula, Shadow, Sherry, Autumn
            and Tuppence. They are our life and totally part of our family. I have competed in breed showing, obedience and
            agility, but am not overly driven to succeed in the ring and just do those things in order to have a bit more fun
            with my dogs.
        </p>
        <p>
            Each of our dogs has its own page with lots of photos, so do visit their pages to get a little insight into their
            personalities.
        </p>
        <hr />
        <p>
            Below are a few photos of the girls together and with relatives:
        </p>
        <div>
          <Image src="images/rob3.jpg" fluid />
          <Image src="images/3dogs.jpg" fluid />
          <p>Enjoying the bush!</p>
        </div>
        <div>
          <Image src="images/christmasSitting.jpg" fluid />
          <Image src="images/christmasTwoSittingOneLaying.jpg" fluid />
          <p>Christmas dogs!</p>
        </div>
        <div>
          <Image src="images/wolfpack.jpg" fluid />
          <Image src="images/fishTank.jpg" fluid />
          <p>Fun with relatives.</p>
        </div>

      </div>
    </>
  )
}

export default OurGoldens

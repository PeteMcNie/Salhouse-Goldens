import React from 'react'

import Image from 'react-bootstrap/Image'

function LinksBody () {
  return (
    <>
      <div className='belowNavbar'>
        <h2>Links</h2>
        <p>Our favourite links:</p>
        <p><a href='https://www.mistymoorgoldens.com/'>Mistymoor Golden Retrievers</a>(home of NZ CH Santamaria The Patriot, Shadow&apos;s Sire)</p>
        <p><a href='https://sandlewoodgoldens.com/'>Sandlewood Golden Retrievers</a>(home of CH Sandlewood Gamble With Gold, Sherry&apos;s Sire)</p>
        <p><a href='https://www.dogsnz.org.nz/breeds/golden-retriever'>New Zealand official breed standard</a>(breed standard for golden retrievers in New Zealand)</p>
        <p><a href='https://en.wikipedia.org/wiki/Golden_Retriever'>Wikipedia Golden Retrievers</a></p>
        <p><a href='http://cgrcnz.org/'>Central Golden Retriever Club</a></p>
        <p><a href='https://keridale.com/'>Keridale Golden Retrievers</a>(another good breeder&apos;s website in New Zealand)</p>
      </div>
      <div>
        <Image src="images/link1.jpg" fluid />
      </div>
    </>
  )
}

export default LinksBody

import React from 'react'

import Image from 'react-bootstrap/Image'

function MrSlattery () {
  return (
    <>
      <div>
        <h3>Mr Slattery</h3>
        <p>
            While I had Pepper and Maddie and my boys were young I also got some other animals. I think my lack of having
            them when I was a child set me up for just wanting to surround myself with them when I grew up. We had some
            guinea pigs, a beautiful grey dwarf rabbit called Munch and some canaries. In particular, my first canary was
            a boy called Mr Slattery. He lived to be about 12 or more. He couldn’t really fly towards the end but we put
            perches near the floor of the cage that he could jump onto and he seemed quite happy. We also let him out of the
            cage and he used to like to potter about on the carpet and sit in the sun. Later on I got some finches too.
        </p>
      </div>
      <div>
        <Image src="images/mrslattery.jpg" fluid />
        <p>Mr Slattery taking a bath</p>
      </div>
      <div>
        <Image src="images/mrslatterysun.jpg" fluid />
        <p>Mr Slattery loves the sun!</p>
      </div>
      <div>
        <Image src="images/phoenixandmrslattery.jpg" fluid />
        <p>Phoenix would like to say &ldquo;Hello&ldquo; to Mr Slattery in person!</p>
      </div>
      <hr />
    </>
  )
}

export default MrSlattery

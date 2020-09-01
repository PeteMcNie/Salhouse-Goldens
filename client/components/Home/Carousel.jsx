import React, { useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel () {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100;"
          src="images/lassie.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label, do you want this?</h3>
          <p>Do you want to add further comments below the label?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/maddie.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label, do you want this?</h3>
          <p>Do you want to add further comments below the label?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/munch.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label, do you want this?</h3>
          <p>Do you want to add further comments below the label?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/11.jpg"
          alt="Forth slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label, do you want this?</h3>
          <p>Do you want to add further comments below the label?</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel

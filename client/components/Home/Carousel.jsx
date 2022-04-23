import React, { useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel () {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel className='belowNavbar' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/dogs-on-log.jpg"
          alt="Dogs on log"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/evening-log.jpg"
          alt="Evening dogs on log"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/habour-dogs.jpg"
          alt="Dogs on hill with habour behind"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/puppy-feeding.jpg"
          alt="Dog laying on side while puppies feed"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/reflection.jpeg"
          alt="Dogs on beach with reflections of dogs"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/show-dogs.jpg"
          alt="Dogs at show"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/hoverdog.jpeg"
          alt="Dog at full run with mouth open and tongue out"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel

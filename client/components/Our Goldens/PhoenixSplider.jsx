import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

class PhoenixSplider extends React.Component {
  constructor (props) {
    super(props)

    this.primaryRef = React.createRef()
    this.secondaryRef = React.createRef()
  }

  componentDidMount () {
    // Set the sync target right after the component is mounted.
    this.primaryRef.current.sync(this.secondaryRef.current.splide)
  }

  render () {
    const primaryOptions = {
      type: 'loop',
      //   width: 800,
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      pagination: false,
      // fixedHeight: '30rem',
      fixedWidth: '30rem'
    }

    const secondaryOptions = {
      type: 'slide',
      rewind: true,
      width: 800,
      gap: '1rem',
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: 'center',
      isNavigation: true,
      updateOnMove: true
    }

    return (
      <div>
        <Splide options={ primaryOptions } ref={ this.primaryRef }>
          <SplideSlide>
            <Image src="images/phoenix2.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix3.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix4.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix5.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix6.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix7.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix8.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix9.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix10.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix11.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix12.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix13.jpg" fluid />
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef }>
          <SplideSlide>
            <Image src="images/phoenix2.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix3.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix4.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix5.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix5.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix6.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix7.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix8.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix9.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix10.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix11.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix12.jpg" fluid />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix13.jpg" fluid />
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default PhoenixSplider

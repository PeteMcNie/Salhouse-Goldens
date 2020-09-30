import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

class AutumnSplider extends React.Component {
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
      width: 800,
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      pagination: false,
      arrows: false
    }

    const secondaryOptions = {
      type: 'slide',
      rewind: true,
      width: 800,
      gap: '1rem',
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 80,
      cover: true,
      focus: 'center',
      isNavigation: true,
      updateOnMove: true,
      arrows: false
    }

    return (
      <>
        <div className='splideContainer'>
          <Splide options={ primaryOptions } ref={ this.primaryRef }>
            <SplideSlide>
              <Image src="images/autumn3.jpg" className='splideImage'/>
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn4.jpg" className='splideImage'/>
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn5.jpg" className='splideImage'/>
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn6.jpg" className='splideImage'/>
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn8.jpg" className='splideImage'/>
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn9.jpg" className='splideImage'/>
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn11.jpg" className='splideImage'/>
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn12.jpg" className='splideImage'/>
            </SplideSlide>
          </Splide>

          <Splide options={ secondaryOptions } ref={ this.secondaryRef } className='splideNav'>
            <SplideSlide>
              <Image src="images/autumn3.jpg" />
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn4.jpg" />
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn5.jpg" />
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn6.jpg" />
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn8.jpg" />
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn9.jpg" />
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn11.jpg" />
            </SplideSlide>
            <SplideSlide>
              <Image src="images/autumn12.jpg" />
            </SplideSlide>
          </Splide>
        </div>
      </>
    )
  }
}

export default AutumnSplider

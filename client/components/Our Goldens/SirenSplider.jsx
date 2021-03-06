import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

class SirenSplider extends React.Component {
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
      <div className='splideContainer'>
        <Splide options={ primaryOptions } ref={ this.primaryRef }>
          <SplideSlide>
            <Image src="images/siren2.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new1.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new2.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new3.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new5.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new6.jpg" className='splideImage'/>
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef } className='splideNav'>
          <SplideSlide>
            <Image src="images/siren2.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new1.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new2.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new3.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new5.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/new6.jpg"/>
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default SirenSplider

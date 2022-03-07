import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

class TuppenceSplider extends React.Component {
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
            <Image src="images/tuppence/tN1.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN2.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN3.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN4.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN5.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN6.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN7.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN8.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN9.jpeg" className='splideImage'/>
          </SplideSlide>
          {/* Original photos below */}
          <SplideSlide>
            <Image src="images/tuppence2.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence3.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence4.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence7.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence8.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence9.jpg" className='splideImage'/>
          </SplideSlide>
        </Splide>
        <Splide options={ secondaryOptions } ref={ this.secondaryRef } className='splideNav'>
          <SplideSlide>
            <Image src="images/tuppence/tN1.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN2.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN3.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN4.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN5.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN6.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN7.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN8.jpeg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence/tN9.jpeg" className='splideImage'/>
          </SplideSlide>
          {/* Original photos below */}
          <SplideSlide>
            <Image src="images/tuppence2.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence3.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence4.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence7.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence8.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/tuppence9.jpg"/>
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default TuppenceSplider

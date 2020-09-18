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
      fixedWidth: 120,
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
            <Image src="images/phoenix3.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix4.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix5.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix6.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix7.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix8.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix9.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix10.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix11.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix12.jpg" className='splideImage'/>
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef }>
          <SplideSlide>
            <Image src="images/phoenix3.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix4.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix5.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix6.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix7.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix8.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix9.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix10.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix11.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/phoenix12.jpg" />
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default PhoenixSplider

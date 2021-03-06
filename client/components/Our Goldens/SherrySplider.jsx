import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

class SherrySplider extends React.Component {
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
            <Image src="images/sherry2.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry3.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry4.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry5.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry6.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry7.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry8.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry9.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry10.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry11.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry12.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry13.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry14.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry15.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry16.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry17.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry18.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry19.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry20.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry21.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry22.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry23.jpg" className='splideImage'/>
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef } className='splideNav'>
          <SplideSlide>
            <Image src="images/sherry2.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry3.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry4.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry5.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry6.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry7.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry8.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry9.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry10.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry11.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry12.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry13.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry14.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry15.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry16.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry17.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry18.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry19.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry20.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry21.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry22.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry23.jpg" />
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default SherrySplider

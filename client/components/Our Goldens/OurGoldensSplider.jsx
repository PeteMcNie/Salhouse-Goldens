import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

class OurGoldensSplider extends React.Component {
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
      <div className='splideContainerOG'>
        <Splide options={ primaryOptions } ref={ this.primaryRef }>
          <SplideSlide>
            <Image src="images/our-goldens/field.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/forest-dogs.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/jumping-for-stick.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/run.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/sea.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/sherry-forest.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/sun-through-trees.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/tup-and-aut-forest.jpg" className='splideImage OG'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/water-dog.jpg" className='splideImage OG'/>
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef } id='centerSplideTrack'>
          <SplideSlide>
            <Image src="images/our-goldens/field.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/forest-dogs.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/jumping-for-stick.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/run.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/sea.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/sherry-forest.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/sun-through-trees.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/tup-and-aut-forest.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/our-goldens/water-dog.jpg"/>
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default OurGoldensSplider

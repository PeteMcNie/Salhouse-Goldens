import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

class KulaSplider extends React.Component {
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
      arrows: true
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
      arrows: true
    }

    return (
      <div className='splideContainer'>
        <Splide options={ primaryOptions } ref={ this.primaryRef }>
          <SplideSlide>
            <Image src="images/shadow/puppy.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/puppy2.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/haig-shadow.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-toy.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/water.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-present.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/bean-bag.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/at-show.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/looking.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/on-stairs.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-toy.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-present.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/upside_down.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/laying.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/wet.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/sandy.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/scenic.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/pretty.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-ribbon.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/stacked.jpg" className='splideImage'/>
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef } className='splideNav'>
          <SplideSlide>
            <Image src="images/shadow/puppy.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/puppy2.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/haig-shadow.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-toy.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/water.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-present.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/bean-bag.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/at-show.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/looking.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/on-stairs.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-toy.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-present.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/upside_down.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/laying.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/wet.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/sandy.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/scenic.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/pretty.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/with-ribbon.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/shadow/stacked.jpg" />
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default KulaSplider

import React from 'react'

import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

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
            <Image src="images/kula/water-kula.jpg" className='splideImage' thumbnail />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/walking-kula.jpg" className='splideImage' thumbnail/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/flower-kula.jpg" className='splideImage' thumbnail/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/kula-by-fire.jpg" className='splideImage' thumbnail/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/kula-by-fence.jpg" className='splideImage' thumbnail/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/kula-with-puppies.jpg" className='splideImage' thumbnail/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/bean-bag.jpg" className='splideImage' thumbnail/>
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef } className='splideNav'>
          <SplideSlide>
            <Image src="images/kula/water-kula.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/walking-kula.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/flower-kula.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/kula-by-fire.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/kula-by-fence.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/kula-with-puppies.jpg"/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/kula/bean-bag.jpg"/>
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default KulaSplider

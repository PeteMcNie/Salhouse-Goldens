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
            <Image src="images/sherry/sherry2.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry3.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry4.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry5.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry6.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry7.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry8.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry9.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry10.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry11.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry12.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry13.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry14.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry15.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry16.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry17.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry18.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry19.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry20.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry21.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry22.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry23.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/beach.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/looking.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/bean_bag.jpg" className='splideImage'/>
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/winning.jpg" className='splideImage'/>
          </SplideSlide>
        </Splide>

        <Splide options={ secondaryOptions } ref={ this.secondaryRef } className='splideNav'>
          <SplideSlide>
            <Image src="images/sherry/sherry2.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry3.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry4.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry5.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry6.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry7.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry8.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry9.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry10.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry11.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry12.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry13.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry14.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry15.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry16.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry17.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry18.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry19.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry20.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry21.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry22.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/sherry23.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/beach.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/looking.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/bean_bag.jpg" />
          </SplideSlide>
          <SplideSlide>
            <Image src="images/sherry/winning.jpg" />
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}

export default SherrySplider

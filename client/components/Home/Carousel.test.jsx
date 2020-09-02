import React from 'react'
import { render } from '@testing-library/react'

import Carousel from './Carousel'

test('Carousel component to match snapshot', () => {
  const { container } = render(<Carousel />)
  expect(container).toMatchSnapshot()
})

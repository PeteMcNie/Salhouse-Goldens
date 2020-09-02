import React from 'react'
import { render } from '@testing-library/react'

import AboutUs from './AboutUs'

test('AboutUs component to match snapshot', () => {
  const { container } = render(<AboutUs />)
  expect(container).toMatchSnapshot()
})

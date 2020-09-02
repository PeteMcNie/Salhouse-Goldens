import React from 'react'
import { render } from '@testing-library/react'

import AboutUsBody from './AboutUsBody'

test('AboutUs component to match snapshot', () => {
  const { container } = render(<AboutUsBody />)
  expect(container).toMatchSnapshot()
})

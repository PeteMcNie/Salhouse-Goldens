import React from 'react'
import { render } from '@testing-library/react'

import HomeFooter from './Home'

test('HomeFooter component to match snapshot', () => {
  const { container } = render(<HomeFooter />)
  expect(container).toMatchSnapshot()
})

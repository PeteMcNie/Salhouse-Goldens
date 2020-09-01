import React from 'react'
import { render } from '@testing-library/react'

import Home from './Home'

test('Home component to match snapshot', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

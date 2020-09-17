import React from 'react'
import { render } from '@testing-library/react'

import Links from './Links'

test('Links component matches snapshot', () => {
  const { container } = render(<Links />)
  expect(container).toMatchSnapshot()
})

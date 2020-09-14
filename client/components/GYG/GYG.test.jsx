import React from 'react'
import { render } from '@testing-library/react'

import GYG from './GYG'

test('GYG component matches snapshot', () => {
  const { container } = render(<GYG />)
  expect(container).toMatchSnapshot()
})

import React from 'react'
import { render } from '@testing-library/react'

import Tuppence from './Tuppence'

test('Tuppence component matches snapshot', () => {
  const { container } = render(<Tuppence />)
  expect(container).toMatchSnapshot()
})

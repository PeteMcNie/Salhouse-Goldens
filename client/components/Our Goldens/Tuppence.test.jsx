import React from 'react'
import { render } from '@testing-library/react'

import Tuppence from './Tuppence'

xtest('Tuppence component matches snapshot', () => {
  const { container } = render(<Tuppence />)
  expect(container).toMatchSnapshot()
})

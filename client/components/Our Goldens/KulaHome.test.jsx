import React from 'react'
import { render } from '@testing-library/react'

import Kula from './Kula'

test('Kula component matches snapshot', () => {
  const { container } = render(<Kula />)
  expect(container).toMatchSnapshot()
})

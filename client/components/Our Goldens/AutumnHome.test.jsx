import React from 'react'
import { render } from '@testing-library/react'

import Autumn from './AutumnHome'

test('Autumn component matches snapshot', () => {
  const { container } = render(<Autumn />)
  expect(container).toMatchSnapshot()
})

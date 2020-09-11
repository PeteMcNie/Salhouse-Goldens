import React from 'react'
import { render } from '@testing-library/react'

import Siren from './Siren'

test('Siren component matches snapshot', () => {
  const { container } = render(<Siren />)
  expect(container).toMatchSnapshot()
})

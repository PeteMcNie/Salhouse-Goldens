import React from 'react'
import { render } from '@testing-library/react'

import Phoenix from './Phoenix'

test('Phoenix component matches snapshot', () => {
  const { container } = render(<Phoenix />)
  expect(container).toMatchSnapshot()
})

import React from 'react'
import { render } from '@testing-library/react'

import SherryLitter from './SherryLitter'

test('Sherry component matches snapshot', () => {
  const { container } = render(<SherryLitter />)
  expect(container).toMatchSnapshot()
})

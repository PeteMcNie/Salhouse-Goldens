import React from 'react'
import { render } from '@testing-library/react'

import ShadowLitter from './ShadowLitter'

test('Shadown component matches snapshot', () => {
  const { container } = render(<ShadowLitter />)
  expect(container).toMatchSnapshot()
})

import React from 'react'
import { render } from '@testing-library/react'

import KulasLitter from './KulasLitter'

test('KulasLitter component matches snapshot', () => {
  const { container } = render(<KulasLitter />)
  expect(container).toMatchSnapshot()
})

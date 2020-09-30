import React from 'react'
import { render } from '@testing-library/react'

import AutumnLitter from './AutumnLitter'

test('AutumnLitter component matches snapshot', () => {
  const { container } = render(<AutumnLitter />)
  expect(container).toMatchSnapshot()
})

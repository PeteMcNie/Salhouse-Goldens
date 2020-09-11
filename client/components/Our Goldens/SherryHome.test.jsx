import React from 'react'
import { render } from '@testing-library/react'

import Sherry from './SherryHome'

test('Sherry component matches snapshot', () => {
  const { container } = render(<Sherry />)
  expect(container).toMatchSnapshot()
})

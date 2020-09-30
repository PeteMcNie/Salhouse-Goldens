import React from 'react'
import { render } from '@testing-library/react'

import Siren from './Siren'

xtest('Siren component matches snapshot', () => {
  const { container } = render(<Siren />)
  expect(container).toMatchSnapshot()
})

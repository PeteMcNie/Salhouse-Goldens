import React from 'react'
import { render } from '@testing-library/react'

import OurGoldens from './OurGoldens'

xtest('OurGoldens component to match snapshot', () => {
  const { container } = render(<OurGoldens />)
  expect(container).toMatchSnapshot()
})

import React from 'react'
import { render } from '@testing-library/react'

import OurGoldens from './OurGoldens'

test('OurGoldens component to match snapshot', () => {
  const { container } = render(<OurGoldens />)
  expect(container).toMatchSnapshot()
})

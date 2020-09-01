import React from 'react'
import { render } from '@testing-library/react'

import HomeBody from './Home'

test('HomeBody component to match snapshot', () => {
  const { container } = render(<HomeBody />)
  expect(container).toMatchSnapshot()
})

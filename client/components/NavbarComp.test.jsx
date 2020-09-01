import React from 'react'
import { render } from '@testing-library/react'

import NavbarComp from './NavbarComp'

test('Navbar component to match snapshot', () => {
  const { container } = render(<NavbarComp />)
  expect(container).toMatchSnapshot()
})

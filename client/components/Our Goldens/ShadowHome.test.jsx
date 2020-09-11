import React from 'react'
import { render } from '@testing-library/react'

import Shadow from './ShadowHome'

test('Shadown component matches snapshot', () => {
  const { container } = render(<Shadow />)
  expect(container).toMatchSnapshot()
})

import React from 'react'
import { render } from '@testing-library/react'

import Shadow from './ShadowHome'

xtest('Shadown component matches snapshot', () => {
  const { container } = render(<Shadow />)
  expect(container).toMatchSnapshot()
})

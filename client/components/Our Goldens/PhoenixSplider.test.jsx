import React from 'react'
import { render } from '@testing-library/react'

import PhoenixSplider from './PhoenixSplider'

xtest('PhoenixSplider component to match snapshot', () => {
  const { container } = render(<PhoenixSplider />)
  expect(container).toMatchSnapshot()
})

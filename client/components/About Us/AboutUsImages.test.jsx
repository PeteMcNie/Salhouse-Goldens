import React from 'react'
import { render } from '@testing-library/react'

import AboutUsImages from './AboutUsImages'

test('AboutUs component to match snapshot', () => {
  const { container } = render(<AboutUsImages />)
  expect(container).toMatchSnapshot()
})

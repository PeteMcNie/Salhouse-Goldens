import React from 'react'
import { render } from '@testing-library/react'

import MyLifeWithAnimals from './MyLifeWithAnimals'

test('MyLifeWithAnimals component to match snapshot', () => {
  const { container } = render(<MyLifeWithAnimals />)
  expect(container).toMatchSnapshot()
})

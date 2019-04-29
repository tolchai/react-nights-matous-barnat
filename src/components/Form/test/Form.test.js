import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import { Form } from '../index'

// This is just an example how to test components
describe('[components] Form', () => {
  it('should render correctly', () => {
    const renderer = render(<Form>My Form</Form>)
    expect(renderer.container).toMatchSnapshot()
  })
})

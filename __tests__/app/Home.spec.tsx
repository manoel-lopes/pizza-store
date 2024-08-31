import { render } from '@testing-library/react'

import { Home } from '@/pages/Home'

describe('Home page', () => {
  it('should render Home page', () => {
    const { container, getByText } = render(<Home />)

    const element = getByText(/Hello World/i)

    expect(container.firstChild).toHaveClass('flex min-h-screen bg-gray-100')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('text-3xl font-bold text-gray-900')
  })
})

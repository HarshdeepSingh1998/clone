import { render, screen } from '@testing-library/react'
import Home from '../../pages/index' // Update the import path as needed
import '@testing-library/jest-dom' // Import this line explicitly

test('renders the Home component', () => {
  render(<Home />)

  // You can add specific test assertions based on what you want to test
  const header = screen.getByText('Templates')
  expect(header).toBeTruthy() // Use this assertion with type assertion

  // Add more test assertions for other elements if needed
})

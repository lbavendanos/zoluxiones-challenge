import { render, screen } from '@testing-library/react'
import HomeForm from './HomeForm'

describe('HomeForm component', () => {
  it('render info', () => {
    render(<HomeForm />)

    const title = screen.getByText('Déjanos tus datos')

    expect(title).toBeInTheDocument()
  })
})

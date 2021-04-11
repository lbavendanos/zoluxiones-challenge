import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar component', () => {
  it('render logo', () => {
    render(<Navbar />, { wrapper: MemoryRouter })

    const logo = screen.getByAltText('rimac')

    expect(logo).toBeInTheDocument()
  })

  it('render suggestions', () => {
    render(<Navbar />, { wrapper: MemoryRouter })

    const suggestion = screen.getByText('¿Tienes alguna duda?')
    const called = screen.getByText('Llámanos')
    const phone = screen.getByText('(01) 411 6001')

    expect(suggestion).toBeInTheDocument()
    expect(called).toBeInTheDocument()
    expect(phone).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home page', () => {
  it('render info', () => {
    render(<Home />)

    const advice = screen.getByText('¡NUEVO!')
    const title = screen.getByText('Seguro Vehicular')
    const subTitle = screen.getByText('Tracking')
    const description = screen.getByText(
      'Cuentanos donde le haras seguimiento a tu seguro'
    )
    const footer = screen.getByText('© 2020 RIMAC Seguros y Reaseguros.')

    expect(advice).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})

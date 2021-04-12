import { store } from '@/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import HomeForm from './HomeForm'

describe('HomeForm component', () => {
  it('render info', () => {
    render(
      <Provider store={store}>
        <HomeForm />
      </Provider>
    )

    const title = screen.getByText('Déjanos tus datos')

    expect(title).toBeInTheDocument()
  })
})

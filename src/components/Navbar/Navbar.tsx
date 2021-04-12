import { Link, useLocation } from 'react-router-dom'
import logo from '@/assets/images/logo.svg'
import phone from '@/assets/images/phone.svg'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header
      className={`top-0 z-40 w-full ${
        isHome ? 'absolute border-0' : 'border-b border-c-gray-60'
      }`}
    >
      <div className="container mx-auto flex flex-wrap px-5 xl:px-16 py-5 flex-row justify-between items-center bg-transparent">
        <Link to="/" className="">
          <img className="object-fill w-full" src={logo} alt="rimac" />
        </Link>
        <ul className="flex">
          <li className="hidden md:block">
            <span className="text-c-gray-200 font-thin">
              ¿Tienes alguna duda?
            </span>
          </li>
          <li className="flex ml-4">
            <span>
              <img className="object-fill w-full" src={phone} alt="phone" />
            </span>
            <div className="text-c-acian-100 ml-2">
              <span className="md:hidden">Llámanos</span>
              <span className="hidden md:block">(01) 411 6001</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo.svg'
import phone from '@/assets/images/phone.svg'

export default function Navbar() {
  return (
    <header className="absolute top-0 z-40 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between items-center bg-transparent">
        <Link to="/" className="">
          <img className="object-fill w-full" src={logo} alt="rimac" />
        </Link>
        <ul className="">
          <li className="flex">
            <span>
              <img className="object-fill w-full" src={phone} alt="phone" />
            </span>
            <span className="text-c-acian-100 ml-2">Llámanos</span>
          </li>
        </ul>
      </div>
    </header>
  )
}

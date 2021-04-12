import { selectUser } from '@/store/user/user'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Register() {
  const user = useSelector(selectUser)
  const history = useHistory()

  useEffect(() => {
    if (!user.name) {
      history.push('/')
    }
  }, [user, history])

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 xl:w-1/4 md:min-h-screen md:bg-c-gray-50"></div>
      <div className="w-full md:w-3/5 xl:w-3/4 md:min-h-screen px-5 py-10">
        <div className="flex flex-col mx-auto h-full md:w-10/12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-c-gray-300 mb-2">
            ¡Hola, <span className="text-c-red-100">{user.name}!</span>
          </h1>
          <h3 className="text-base text-c-gray-200">
            Completa los datos de tu auto
          </h3>
        </div>
      </div>
    </div>
  )
}

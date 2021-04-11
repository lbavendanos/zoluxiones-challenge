import HomeForm from './components/HomeForm/HomeForm'
import girlsm from '@/assets/images/girl-sm.svg'
import girllg from '@/assets/images/girl-lg.svg'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 xl:w-5/12 md:min-h-screen pt-16 bg-c-gray-50 md:bg-hero-pattern bg-no-repeat bg-center bg-cover">
        <div className="relative flex flex-col px-5 py-10 h-full">
          <div className="absolute md:relative md:flex md:justify-center top-8 right-0">
            <img className="h-64 md:hidden" src={girlsm} alt="girl" />
            <img className="h-72 hidden md:block" src={girllg} alt="girl" />
          </div>
          <div className="flex flex-col md:items-center md:my-20 ">
            <div>
              <h6 className="text-sm md:text-base font-bold mb-2 text-c-gray-300">
                ¡NUEVO!
              </h6>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 text-c-gray-300">
                Seguro Vehicular <br />
                <span className="text-c-red-100">Tracking</span>
              </h1>
              <p className="text-base text-c-gray-200 mb-6">
                Cuentanos donde le haras <br className="md:hidden" />
                seguimiento a tu <br className="hidden md:block" /> seguro
              </p>
            </div>
          </div>
          <div className="hidden mt-auto md:flex md:justify-center">
            <h6 className="text-c-gray-150">
              © 2020 RIMAC Seguros y Reaseguros.
            </h6>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-7/12 md:min-h-screen px-5 py-10">
        <div className="flex flex-col justify-center mx-auto h-full md:w-11/12 lg:w-2/3 xl:w-5/12">
          <HomeForm />
        </div>
      </div>
    </div>
  )
}

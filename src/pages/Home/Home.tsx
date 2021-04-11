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
          <form className="">
            <h1 className="text-3xl text-c-gray-300 mb-5">Déjanos tus datos</h1>

            <div className="mb-4 flex">
              <select name="" id="" className="form-control-l w-1/3">
                <option value="">DNI</option>
              </select>
              <input
                type="text"
                className="form-control-r flex-grow"
                placeholder="Nro. de doc"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control w-full"
                placeholder="Celular"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control w-full"
                placeholder="Placa"
              />
            </div>
            <div className="mb-8">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm md:text-md font-light text-c-gray-200 ml-3">
                  Acepto la&nbsp;
                  <a href="/" className="underline">
                    Política de Protecciòn de Datos <br /> Personales
                  </a>
                  y los
                  <a href="/" className="underline">
                    Términos y Condiciones.
                  </a>
                </span>
              </label>
            </div>
            <div className="">
              <button
                type="submit"
                className="btn btn-red w-full flex justify-center items-center px-5 py-4"
              >
                COTÍZALO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

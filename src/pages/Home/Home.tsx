import girlsm from '@/assets/images/girl-sm.svg'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="w-full pt-16 bg-c-gray-50">
        <div className="relative flex flex-col px-5 py-10">
          <div className="absolute top-8 right-0">
            <img className="h-64" src={girlsm} alt="girl" />
          </div>
          <div>
            <h6 className="text-sm font-bold mb-2 text-c-gray-300">¡NUEVO!</h6>
            <h1 className="text-3xl mb-2 text-c-gray-300">
              Seguro Vehicular <br />
              <span className="text-c-red-100">Tracking</span>
            </h1>
            <p className="text-base text-c-gray-200 mb-6">
              Cuentanos donde le haras <br />
              seguimiento a tu seguro
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full px-5 py-10">
        <form>
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
              <span className="text-sm font-light text-c-gray-200 ml-3">
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
  )
}

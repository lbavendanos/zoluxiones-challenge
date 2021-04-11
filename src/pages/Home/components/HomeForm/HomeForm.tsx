export default function HomeForm() {
  return (
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
  )
}

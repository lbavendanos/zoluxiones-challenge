import { useForm } from 'react-hook-form'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import { addUser, User } from '@/store/user/user'
import { useDispatch } from 'react-redux'
import { fetchPerson } from '@/api/person/person'
import { useHistory } from 'react-router-dom'

export default function HomeForm() {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>()

  const onSubmit = async (form: User) => {
    const person = await fetchPerson()
    const user: User = {
      ...form,
      name: person?.name.first,
      gender: person?.gender,
    }

    dispatch(addUser(user))

    history.push('/register')
  }

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl text-c-gray-300 mb-5">Déjanos tus datos</h1>

      <div className="mb-4">
        <div className="flex">
          <select
            className="form-control-l w-1/3"
            {...register('documentType', { required: true })}
          >
            <option value="DNI">DNI</option>
          </select>
          <input
            type="text"
            className="form-control-r flex-grow"
            placeholder="Nro. de doc"
            {...register('documentNumber', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^((?!(0))[0-9]{8})$/,
                message: 'Este campo debe ser numérico y de 8 de longitud',
              },
            })}
          />
        </div>
        <ErrorMessage errors={errors} name="documentNumber" />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control w-full"
          placeholder="Celular"
          {...register('phone', {
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^((?!(0))[0-9]{9})$/,
              message: 'Este campo debe ser numérico y de 9 de longitud',
            },
          })}
        />
        <ErrorMessage errors={errors} name="phone" />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control w-full"
          placeholder="Placa"
          {...register('placa', {
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^[A-Za-z0-9]{6}$/,
              message: 'Este campo debe ser alfanumérico y de 6 de longitud',
            },
          })}
        />
        <ErrorMessage errors={errors} name="placa" />
      </div>
      <div className="mb-8">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            defaultChecked={true}
            {...register('term', {
              required: 'Debe aceptar los Terminos y Condiciones',
            })}
          />
          <span className="flex-grow text-sm md:text-md font-light text-c-gray-200 ml-3">
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
        <ErrorMessage errors={errors} name="term" />
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

import { useEffect, useState } from 'react'
import axios from '@/utils/axios'

export interface Response {
  tipo: string
  mensaje: string
  titulo: string
  data: Data
}

export interface Data {
  tercero: Person
  error: Error
  codigoResp: string
  mensajeResp: string
}

export interface Error {
  codigo: string
  mensajedev: null
  mensajeux: string
}

export interface Person {
  direccion: string
  nomCompleto: string
  indCrearTercero: string
  estadoCivil: string
  tipoPersona: string
  telefono: string
  apellidoPaterno: string
  sexo: string
  indRequiereDireccion: string
  paisNacimiento: string
  nombres: string
  stsTercero: string
  tipoDocumento: string
  apellidoMaterno: string
  numDocumento: string
  fecNacimiento: string
  correo: string
}

export function usePerson() {
  const [person, setPerson] = useState<Person>()
  const [error, setError] = useState(null)

  const fetchPerson = async () => {
    try {
      const url = '/dummy/obtenerdatospersona'
      const { data } = await axios.post<Response>(url)

      setPerson(data.data.tercero)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    fetchPerson()
  }, [])

  return { person, error, fetchPerson }
}

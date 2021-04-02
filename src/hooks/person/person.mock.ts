import { Person, Response } from './person'

export const mockPerson: Person = {
  direccion: 'PRUEBA PRUEBA',
  nomCompleto: 'JUAN MIGUEL SANCHEZ DIAZ',
  indCrearTercero: 'N',
  estadoCivil: 'Z',
  tipoPersona: 'N',
  telefono: '',
  apellidoPaterno: 'SANCHEZ',
  sexo: 'M',
  indRequiereDireccion: 'N',
  paisNacimiento: '80',
  nombres: 'JUAN MIGUEL',
  stsTercero: '0',
  tipoDocumento: '2',
  apellidoMaterno: 'DIAZ',
  numDocumento: '25809150',
  fecNacimiento: '11/05/1972',
  correo: '',
}

export const mockResponse: Response = {
  tipo: 'success',
  mensaje: 'Datos guardados con éxito',
  titulo: 'Guardo Correctamente',
  data: {
    tercero: mockPerson,
    error: {
      codigo: '201009',
      mensajedev: null,
      mensajeux: 'La búsqueda de tercero fue exitoso',
    },
    codigoResp: '1',
    mensajeResp: 'OK',
  },
}

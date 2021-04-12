import { mockPerson, mockResponse } from './person.mock'
import axios, { AxiosResponse } from 'axios'
import { fetchPerson } from './person'

const mockedAxios = axios as jest.Mocked<typeof axios>

export function getAxiosResponse<T>(data: T): AxiosResponse<T> {
  return {
    data,
    status: 200,
    statusText: 'Ok',
    headers: {},
    config: {},
  }
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Person api', () => {
  it('call fetchPerson', async () => {
    const axiosResponse = getAxiosResponse(mockResponse)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const person = await fetchPerson()

    expect(person).toStrictEqual(mockPerson)
  })
})

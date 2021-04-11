import { act, renderHook } from '@testing-library/react-hooks'
import { usePerson } from './person'
import { mockPerson, mockResponse } from './person.mock'
import axios, { AxiosError, AxiosResponse } from 'axios'

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

export function getAxiosError(): AxiosError {
  return {
    config: {},
    isAxiosError: true,
    message: 'Not found resource',
    name: 'AxiosError',
    toJSON: () => ({}),
    code: '404',
  }
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Person hooks', () => {
  it('call usePerson', async () => {
    const axiosResponse = getAxiosResponse(mockResponse)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const { result } = renderHook(() => usePerson())

    await act(async () => {})

    expect(result.current.person).toStrictEqual(mockPerson)
  })

  it('call usePerson hook to get error', async () => {
    const axiosError = getAxiosError()

    mockedAxios.get.mockRejectedValueOnce(axiosError)

    const { result } = renderHook(() => usePerson())

    await act(async () => {})

    expect(result.current.error).toStrictEqual(axiosError)
  })
})

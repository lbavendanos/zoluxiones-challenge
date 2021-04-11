import { ErrorMessage as BaseErrorMessage } from '@hookform/error-message'
import { DeepMap, FieldError } from 'react-hook-form'

interface Props {
  errors: DeepMap<any, FieldError>
  name: string
}

export default function ErrorMessage({ errors, name }: Props) {
  return (
    <BaseErrorMessage
      errors={errors}
      name={name}
      as={<span className="text-c-red-100 text-sm" />}
    />
  )
}

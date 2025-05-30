import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Text: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  const isOneColumn = width ? width < 51 : true

  const colSpan = isOneColumn ? 'col-span-1' : 'col-span-2'

  return (
    <Width className={colSpan}>
      <Input
        className={`border-secondary w-full`}
        placeholder={label + (required ? ' *' : '')}
        defaultValue={defaultValue}
        id={name}
        type="text"
        {...register(name, { required })}
      />
      {errors[name] && <Error />}
    </Width>
  )
}

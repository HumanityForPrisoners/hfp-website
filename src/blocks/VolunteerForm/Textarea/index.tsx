import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 3, width }) => {
  const isOneColumn = width ? width < 51 : true

  const colSpan = isOneColumn ? 'col-span-1' : 'col-span-2'
  return (
    <Width className={colSpan}>
      <TextAreaComponent
        defaultValue={defaultValue}
        id={name}
        placeholder={label + (required ? ' *' : '')}
        rows={rows}
        {...register(name, { required: required })}
        className="border-secondary w-full min-h-48"
      />

      {errors[name] && <Error />}
    </Width>
  )
}

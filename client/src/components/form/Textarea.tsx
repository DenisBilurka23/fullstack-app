import type {TextareaHTMLAttributes} from 'react'
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

export type TextareaProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>
  error?: FieldError
  label?: string
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>

const Textarea = <TFieldValues extends FieldValues>({
  name,
  register,
  rules,
  error,
  label,
  className = '',
  ...props
}: TextareaProps<TFieldValues>) => {
  const describedBy = error ? `${String(name)}-error` : undefined
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={String(name)} className="mb-1 block text-sm text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={String(name)}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={[
          'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none h-32 resize-none',
          className,
        ].join(' ')}
        {...register(name, rules)}
        {...props}
      />
      {error && (
        <p id={describedBy} className="text-red-500 text-sm mt-1">
          {error.message || 'Field has an error'}
        </p>
      )}
    </div>
  )
}

export default Textarea

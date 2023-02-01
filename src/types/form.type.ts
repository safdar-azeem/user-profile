export type InputType = 'text' | 'email' | 'password' | 'number' | 'date' | 'textarea'

export interface Form {
   name: string
   placeholder: string
   label?: string
   type?: InputType
   required?: boolean
   value: string
   validation?: (value: string) => string
   cols?: string
}

import type { Form } from '../types/form.type'

export const registrationJSON: Form[] = [
   {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Please enter your First Name',
      type: 'text',
      value: '',
      required: true,
      validation(value: string) {
         if (!value) {
            return 'First Name is required'
         }
         if (value.length < 3) {
            return 'Name must be at least 3 characters'
         }
         return ''
      },
   },
   {
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Please enter your Last Name',
      type: 'text',
      value: '',
      required: true,
      validation(value: string) {
         if (!value) {
            return 'Last Name is required'
         }
         if (value.length < 3) {
            return 'Name must be at least 3 characters'
         }
         return ''
      },
   },
   {
      name: 'email',
      placeholder: 'Please enter your Email',
      label: 'Email',
      type: 'email',
      value: '',
      required: true,
      validation(value: string) {
         if (!value) {
            return 'Email is required'
         }
         if (!value.includes('@')) {
            return 'Email must be valid'
         }
         return ''
      },
   },
   {
      name: 'password',
      placeholder: 'Create a Password',
      label: 'Password',
      type: 'password',
      value: '',
      required: true,
      validation(value: string) {
         if (!value) {
            return 'Password is required'
         }
         if (value.length < 6) {
            return 'Password must be at least 6 characters'
         }
         return ''
      },
   },
]

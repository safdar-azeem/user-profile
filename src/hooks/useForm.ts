import type { Form } from '@/types/form.type'
import { reactive } from 'vue'

const useForm = (formState: Form[]) => {
   const initialState: any = {}
   formState.forEach((item: Form) => {
      initialState[item.name] = {
         value: item.value || '',
         error: '',
      }
   })
   const state = reactive({
      ...initialState,
   })

   const handleChange = (e: Event) => {
      console.log(e)
      const { name, value } = e.target as HTMLInputElement
      state[name].value = value
      state[name].error = ''
   }

   const doValidation = () => {
      let isValid = true
      formState.forEach((item: Form) => {
         if (item.validation) {
            const error = item.validation(state[item.name].value)
            if (error) {
               isValid = false
               state[item.name].error = error
            }
         }
      })
      return isValid
   }

   const updateForm = (data: any) => {
      Object.keys(data).forEach((key) => {
         const value = data[key]
         const isExist = formState.find((item) => item.name === key)
         if (isExist) {
            state[key].value = value
         }
      })
   }

   return {
      state,
      handleChange,
      doValidation,
      updateForm,
   }
}

export default useForm

<script lang="ts">
import RegistrationForm from '@/components/profile/Form.vue'
import LoginHeader from '@/components/profile/Header.vue'
import UploadImage from '@/components/profile/UploadImage.vue'
import Draggable from '@/components/reusable/Draggable.vue'
import useForm from '@/hooks/useForm'
import useImage from '@/hooks/useImage'
import { registrationJSON } from '@/json/registration.json'
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import { useToast } from 'vue-toastification'

export default defineComponent({
   name: 'Profile',
   components: {
      RegistrationForm,
      UploadImage,
      LoginHeader,
      Draggable,
   },
   setup() {
      const toast = useToast()
      const store = useStore()
      const { image, readAbleImage, handleImage, cancelImage } = useImage()
      const { state: formState, handleChange, doValidation } = useForm(registrationJSON)

      const handleSubmit = async (e: Event) => {
         e.preventDefault()
         if (doValidation()) {
            await store.dispatch('saveUser', {
               ...formState,
               image: readAbleImage.value,
            })
            toast.success('User Registered Successfully')
         }
      }

      return {
         formState,
         handleChange,
         handleSubmit,
         registrationJSON,
         image,
         readAbleImage,
         handleImage,
         cancelImage,
         isLoading: computed(() => store.state.user.loading),
      }
   },
})
</script>

<template>
   <LoginHeader />
   <section class="flex md:grid-cols-2 gap-10 md:14 lg:gap-20 w-full flex-col-reverse md:flex-row">
      <Draggable>
         <template v-slot:1>
            <RegistrationForm
               class="flex-1"
               @handleSubmit="handleSubmit"
               @handleChange="handleChange"
               :isLoading="isLoading"
               :state="formState"
               :isDisabled="!readAbleImage || !formState || isLoading" />
         </template>
         <template v-slot:2>
            <UploadImage
               class="flex-1"
               @handleImage="handleImage"
               @cancelImage="cancelImage"
               :readAbleImage="readAbleImage" />
         </template>
      </Draggable>
   </section>
</template>

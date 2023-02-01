<script lang="ts">
import { defineComponent } from 'vue'
import { registrationJSON } from '../../json/registration.json'
import Button from '../reusable/Button.vue'
import Input from '../reusable/Input.vue'

export default defineComponent({
   name: 'Form',
   components: {
      Input,
      Button,
   },
   emits: ['handleSubmit', 'handleChange'],
   props: {
      state: {
         type: Object,
         required: true,
      },
      isLoading: {
         type: Boolean,
         required: true,
      },
      isDisabled: {
         type: Boolean,
         required: true,
      },
   },
   setup() {
      return {
         registrationJSON,
      }
   },
})
</script>

<template>
   <form class="flex flex-col gap-y-6" @submit="$emit('handleSubmit', $event)">
      <Input
         v-for="item in registrationJSON"
         :key="item.name"
         :label="item.label"
         :placeholder="item.placeholder"
         :name="item.name"
         :value="state[item.name].value"
         :required="item.required"
         @onChange="$emit('handleChange', $event)"
         :error="state[item.name].error"
         :type="item.type" />
      <Button text="Save" type="submit" :isLoading="isLoading" :disabled="isDisabled" />
   </form>
</template>

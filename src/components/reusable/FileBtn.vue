<script lang="ts">
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'
import Input from './Input.vue'

export default defineComponent({
   name: 'FileBtn',
   components: {
      Icon,
      Input,
   },
   props: {
      icon: {
         type: String,
         default: 'ph:image-fill',
      },
   },
   emits: ['handleImage'],
})
</script>

<template>
   <label class="btn rounded-full md:rounded-md bg-gray-400" for="upload-image">
      <Icon :icon="icon" class="icon text-fs-4" />
      <span class="hidden md:flex"> Browse Image </span>
   </label>
   <input id="upload-image" type="file" @change="$emit('handleImage', $event)" class="hidden" />
</template>

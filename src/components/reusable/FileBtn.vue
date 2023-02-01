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
   <label class="btn btn-icon rounded-full bg-gray-400 lg" for="upload-image">
      <span>
         <Icon :icon="icon" class="icon text-fs-8" />
      </span>
   </label>
   <input id="upload-image" type="file" @change="$emit('handleImage', $event)" class="hidden" />
</template>

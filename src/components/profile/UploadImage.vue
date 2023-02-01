<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../reusable/Button.vue'
import FileBtn from '../reusable/FileBtn.vue'

export default defineComponent({
   name: 'UploadImage',
   components: {
      FileBtn,
      Button,
   },
   emits: ['handleImage', 'cancelImage'],
   props: {
      readAbleImage: {
         type: String,
         required: true,
      },
   },
})
</script>

<template>
   <div
      class="bg-gray-200 relative self-start rounded-full h-[130px] w-[130px] md:w-full md:h-full md:max-h-[470px] md:rounded-md grid place-items-center">
      <FileBtn v-if="!readAbleImage" @handleImage="$emit('handleImage', $event)" />
      <Button
         v-if="readAbleImage"
         icon="charm:cross"
         class="absolute bottom-0 md:top-3 right-1"
         @click="$emit('cancelImage', $event)"
         buttonClass="sm md:lg bg-[#1b1b1d57]"
         radius="rounded-full" />
      <img
         style="pointer-events: none"
         v-if="readAbleImage"
         :src="readAbleImage"
         class="w-full h-full rounded-full md:aspect-square object-contain overflow-auto md:rounded-md" />
   </div>
</template>

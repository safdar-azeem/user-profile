<script lang="ts">
import useDragAndDrop from '@/hooks/dragAndDrop'
import { defineComponent } from 'vue'

export default defineComponent({
   name: 'Draggable',
   setup() {
      const { handleDrag, handleDragOver, handleDrop } = useDragAndDrop()
      return {
         handleDrag,
         handleDragOver,
         handleDrop,
      }
   },
})
</script>

<template>
   <template v-for="(slot, index) in $slots" :key="index">
      <div
         class="flex-1"
         :id="`${index}`"
         @dragstart="handleDrag"
         @dragover="handleDragOver"
         @drop="handleDrop"
         draggable="true"
         data-draggable>
         <slot :name="index" />
      </div>
   </template>
</template>

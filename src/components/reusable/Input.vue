<script lang="ts">
import type { InputType } from '@/types/form.type'
import { defineComponent, ref } from 'vue'

export default defineComponent({
   name: 'Input',
   emits: ['onChange'],
   props: {
      value: String,
      error: String,
      label: String,
      name: String,
      placeholder: String,
      disabled: Boolean,
      required: Boolean,
      className: String,
      type: {
         type: String as () => InputType,
         default: 'text',
      },
   },

   setup(props, { emit }) {
      const isFocus = ref(false)
      const onFocus = () => (isFocus.value = true)
      const onBlur = () => (isFocus.value = false)

      return {
         isFocus,
         onFocus,
         onBlur,
      }
   },
})
</script>

<template>
   <section>
      <label v-if="label" :for="name" class="label"> {{ label }} <span v-if="required">*</span> </label>
      <div
         class="input-group"
         :class="{
            focus: isFocus,
            error: error,
         }">
         <div class="slot">
            <slot></slot>
         </div>
         <input
            ref="input"
            class="input"
            :name="name"
            :id="name"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            @focus="onFocus"
            :class="className"
            @blur="onBlur"
            :value="value"
            @input="$emit('onChange', $event)" />
         <div class="slot">
            <slot name="right"></slot>
         </div>
      </div>
      <p v-if="error" class="text-danger mt-2 -text-fs-1">
         {{ error }}
      </p>
   </section>
</template>

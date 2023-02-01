<script lang="ts">
import { defineComponent } from 'vue'
import Profile from '@/pages/Profile.vue'
export default defineComponent({
   name: 'App',
   components: {
      Profile,
   },
   setup() {},
})
</script>

<template>
   <div class="p-10 max-w-[950px] w-full min-h-screen mx-auto flex flex-col justify-center">
      <Profile />
   </div>
</template>

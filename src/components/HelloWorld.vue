<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>  
<div class="bg-yellow-500 p-4">
  <h1 class="text-4xl font-bold">Welcome to my Vue 3 project with Tailwind CSS!</h1>
  <p class="text-lg mt-16 space-y-4">Let's explore the power of Tailwind CSS in Vue 3.</p>
</div>
</template>


<script setup>
import Input from './components/Input.vue'
</script>

<template>
  <form class="wrapper">
    <Input label="Name" name="name" :isRequired="true" errorMessage="Test message" />
    <Input label="Email" name="email" :isRequired="true" />
    <Input label="Subject" name="subject" />
  </form>
</template>

<style scoped>
.wrapper {
  width: 50vw;
  margin: 0 auto;
  display: grid;
  gap: 16px;
}

@media (max-width: 1024px) {
  .wrapper {
    width: 100%;
  }
}
</style>

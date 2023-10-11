<script setup>
import Input from './components/Input.vue'
import Button from './components/Button.vue'
</script>

<template>
  <form class="wrapper">
    <Input :isRequired="true" label="Name" name="name" errorMessage="Test message" />
    <Input :isRequired="true" label="Email" name="email" />
    <Input label="Subject" name="subject" />
    <Input :isRequired="true" :isMultiline="true" label="Message" name="message" />
    <Button text="Submit" />
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

<script setup>
defineProps({
  isDisabled: {
    type: Boolean
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button :disabled="isDisabled" type="submit" class="button" :text="text">{{ text }}</button>
</template>

<style scoped>
.button {
  width: 100%;
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  color: var(--white);
  background-color: var(--secondary);
  transition: 0.5s all;
}

.button:hover {
  opacity: 0.6;
}

.button:disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>

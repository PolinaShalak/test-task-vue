<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <HelloWorld msg="You did it!" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .wrapper {
    display: flex;
  }
}
</style>
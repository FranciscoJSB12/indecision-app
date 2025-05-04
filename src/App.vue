<template>
  <h1>Mi primera app</h1>
  <hr />
  <MyCounter :value="1" />
</template>

<script setup lang="ts">
import MyCounter from './components/MyCounter.vue';

</script>

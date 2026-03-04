<script setup lang="ts">
import { ref } from 'vue'
import { useFileDialog } from '@vueuse/core';

defineProps({
  msg: String,
})

const count = ref(0);
function changeFile(e:any) {
  console.log(e.target.files[0].text());
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <v-file-input label="File input" variant="outlined" accept=".log" show-size @change="changeFile"></v-file-input>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

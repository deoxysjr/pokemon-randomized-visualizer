<script setup lang="ts">
import { ref } from 'vue'
import { useFileDialog } from '@vueuse/core';
import { convertToJson } from '../parsers/baseParser'

defineProps({
  msg: String,
})

async function changeFile(e:any) {
  const fileText = await e.target.files[0].text();
  // console.log(fileText);
  convertToJson(fileText);
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <v-file-input label="File input" variant="outlined" accept=".log" show-size @change="changeFile"></v-file-input>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

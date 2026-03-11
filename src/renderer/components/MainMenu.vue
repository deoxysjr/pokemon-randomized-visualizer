<script setup lang="ts">
import { ref } from 'vue';
import { ParserContext } from '../typings/section';
import LoadFile from './LoadFile.vue';

defineProps({
    pokeData: Object,
})

let logFileLoaded = ref(false);
let pokeData: ParserContext | undefined = undefined;
function fileLoaded(data:ParserContext) {
    pokeData = data;
    // logFileLoaded = !logFileLoaded;
    console.log(pokeData);
}
</script>

<template>

    <button @click="logFileLoaded = !logFileLoaded">toggle</button>
    <p v-if="logFileLoaded">{{ pokeData }}</p>
    <LoadFile v-else msg="Load file" @log-file-loaded="fileLoaded" />

</template>
<style>
</style>
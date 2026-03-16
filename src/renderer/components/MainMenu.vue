<script setup lang="ts">

import { ref } from "vue"
import { ParserContext } from '../typings/section';
import LoadFile from './LoadFile.vue';
import PokeDex from "./pokeDex.vue";

let pokeData = ref<ParserContext>();
function fileLoaded(data:ParserContext) {
    pokeData.value = data;
    console.log(data);
}
</script>

<template>

    <PokeDex v-if="pokeData" :poke-list="pokeData.pokemon"></PokeDex>
    <LoadFile v-else msg="Load file" @log-file-loaded="fileLoaded" />
    <!-- <p v-if="pokeData">{{ pokeData.pokemon }}</p> -->

</template>

<style>
</style>
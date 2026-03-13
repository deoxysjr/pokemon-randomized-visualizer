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

    <LoadFile msg="Load file" @log-file-loaded="fileLoaded" />
    <PokeDex v-if="pokeData" :poke-list="pokeData.pokemon"></PokeDex>
    <!-- <p v-if="pokeData">{{ pokeData.pokemon }}</p> -->

</template>

<style>
</style>
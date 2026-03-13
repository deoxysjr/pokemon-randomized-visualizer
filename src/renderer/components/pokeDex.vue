<script setup lang="ts">
import { ref } from 'vue';
import {  PokemonMap } from '../typings/section';
import PokemonCard from './PokemonCard.vue';

defineProps<{
    pokeList: PokemonMap,
}>()

const page = ref(1)

</script>

<template>

    <v-data-iterator :items="Object.values(pokeList)" :page="page" :items-per-page="18">
        <template v-slot:default="{ items }">
            <v-row v-if="pokeList">
                <v-col cols="6" sm="3" md="2" v-for="pokemon in items">
                    <PokemonCard :pokemon="pokemon.raw"></PokemonCard>
                </v-col>
            </v-row>
        </template>
        <template v-slot:footer="{ pageCount }">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </template>
    </v-data-iterator>

</template>

<style>
</style>
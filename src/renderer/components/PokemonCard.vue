<script setup lang="ts">
import { ref } from 'vue';
import type { Pokemon } from '../models/Pokemon';
import PokemonDialog from './PokemonDialog.vue';

defineProps<{
    pokemon: Pokemon
}>()

const expand = ref(false)

</script>

<template>
    <v-card>
        <v-card-title>{{ pokemon.number }}</v-card-title>
        <v-card-subtitle>{{ pokemon.name }}</v-card-subtitle>
        <PokemonDialog :pokemon="pokemon"></PokemonDialog>
    </v-card>
</template>

<style>
</style>
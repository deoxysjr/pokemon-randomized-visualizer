<script setup lang="ts">
import { Pokemon } from '../models/Pokemon';

defineProps<{
    pokemon: Pokemon
}>()

</script>

<template>

    <!-- <div>
        <v-icon class="me-1" icon="mdi-heart"></v-icon>
        <span></span>
    </div> -->
    <v-divider></v-divider>
    <v-btn>
        Show stats
        <v-dialog activator="parent" max-width="440">
            <template v-slot:default="{ isActive }">
                <v-card>
                    <v-card-title>{{ pokemon.number }}: {{ pokemon.name }}</v-card-title>
                    <v-row>
                        <v-col cols="12">
                            <div class="d-flex justify-center ga-2">
                                <v-chip v-for="type in pokemon.types" :class="[`type-${type.toLowerCase()}`]" size="small">{{ type }}</v-chip>
                            </div>
                        </v-col>
                        <v-col cols="9">
                            <p>Hp</p>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <template v-slot:actions>
                        <v-btn class="ml-auto" text="Close" @click="isActive.value = false"></v-btn>
                    </template>
                </v-card>
            </template>
        </v-dialog>
    </v-btn>

</template>

<style>

.type-normal { background-color: #b4b4b4; }
.type-fighting { background-color: #973b06; }
.type-flying { background-color: #1ca1fa; }
.type-poison { background-color: #6e12ac; }
.type-ground { background-color: #a88440; }
.type-rock { background-color: #c5a55f; }
.type-bug { background-color: #7a990c; }
.type-ghost { background-color: #6252ac; }
.type-steel { background-color: #447275; }
.type-fire { background-color: #ff2600; }
.type-water { background-color: #1b90d3; }
.type-grass { background-color: #3ead3a; }
.type-electric { background-color: #f3d737; color: black; }
.type-psychic { background-color: #bf36c4; }
.type-ice { background-color: #67d1f1; color: black; }
.type-dragon { background-color: #331b88; }
.type-dark { background-color: #582c1a; }
.type-fairy { background-color: #d571d8; }
</style>
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
        Target Activator
        <v-dialog activator="parent" max-width="440">
            <template v-slot:default="{ isActive }">
                <v-card prepend-icon="mdi-bullseye-arrow" text="Pass any valid querySelector to the activator prop to bind the dialog to the target element." title="Target Activator">
                    
                    <template v-slot:actions>
                        <v-btn class="ml-auto" text="Close" @click="isActive.value = false"></v-btn>
                    </template>
                </v-card>
            </template>
        </v-dialog>
    </v-btn>


</template>

<style>
</style>
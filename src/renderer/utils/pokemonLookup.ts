import { Pokemon } from "../models/pokemon";
import { PokemonMap } from "../typings/section";

export function getPokemonByName(data: PokemonMap, name: string): Pokemon | undefined {
    return Object.values(data).find(p => p.name === name)
}
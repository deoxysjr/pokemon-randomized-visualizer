import { Evolution } from "../models/Evolution"
import { Pokemon } from "../models/Pokemon"
import { PokemonMap, SectionParser } from "../typings/pokemon"
import { getPokemonByName } from "../utils/pokemonLookup"

export const timedEvolutionParser: SectionParser = {
    /**
     * Section name '--name--'
     */
    section: "Removing Timed-Based Evolutions",

    /**
     * Parser function
     * @param text Section text
     * @param data List of pokemon
     */
    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        
        for (const line of lines) {
            const match = line.match(/(.+?)\s*->\s(.+?)\s+(.+)/)
            if (!match) continue
            const [, from, to, condition] = match

            const pokemon = getPokemonByName(data, from.trim())
            if (!pokemon) continue

            const evo: Evolution = {
                to: to.trim(),
                method: parseMethod(condition),
                details: condition,
                source: "Removing Timed-Based Evolutions"
            }
            addOrUpdateEvolution(pokemon, evo)
        }
    }
}

function parseMethod(text: string) {
    const lower = text.toLowerCase()
    if (lower.includes("level")) return "level"
    if (lower.includes("holding")) return "hold_item"
    if (lower.includes("using")) return "use_item"
    if (lower.includes("with")) return "party_condition"
    return "other"
}

function addOrUpdateEvolution(pokemon: Pokemon, evo: Evolution) {
    const existing = pokemon.evolutions.find(e => e.to === evo.to)

    if (existing) {
        Object.assign(existing, evo)
    } else {
        pokemon.evolutions.push(evo)
    }
}
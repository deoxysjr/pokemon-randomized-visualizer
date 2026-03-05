import { Evolution } from "../models/Evolution"
import { PokemonMap, SectionParser } from "../typings/pokemon"
import { getPokemonByName } from "../utils/pokemonLookup"

export const impossibleEvolutionParser: SectionParser = {
    section: "Removing Impossible Evolutions",

    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        
        for (const line of lines) {
            const match = line.match(/^(.+?)\s*->\s*(.+?)\s+(.*)$/)
            if (!match) continue

            const [, from, to, condition] = match

            const pokemon = getPokemonByName(data, from.trim())
            if (!pokemon) continue

            const evo: Evolution = {
                to: to.trim(),
                method: parseMethod(condition),
                details: condition,
                source: "Removing Impossible Evolutions"
            }
            pokemon.evolutions.push(evo)
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
import { PokemonMap, SectionParser } from "../typings/pokemon"
import { getPokemonByName } from "../utils/pokemonLookup"

export const randomizedEvolutionParser: SectionParser = {
    /**
     * Section name '--name--'
     */
    section: "Randomized Evolutions",

    /**
     * Parser function
     * @param text Section text
     * @param data List of pokemon
     */
    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        for (const line of lines) {
            if (!line.includes("->")) continue

            const [fromRaw, toRaw] = line.split("->")
            const from = fromRaw.trim()
            const targets = parseEvolutionTargets(toRaw)

            const pokemon = getPokemonByName(data, from)
            if (!pokemon) continue

            for (const target of targets) {
                pokemon.evolutions.push({
                    to: target,
                    method: "level",
                    source: "Randomized Evolutions"
                })
            }
        }
    }
}

function parseEvolutionTargets(text: string): string[] {
    return text.replace(/\band\b/g, ",").split(",").map(v => v.trim()).filter(Boolean)
}
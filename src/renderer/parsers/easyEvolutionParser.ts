import { Evolution } from "../models/Evolution"
import { PokemonMap, SectionParser } from "../typings/pokemon"
import { getPokemonByName } from "../utils/pokemonLookup"

export const easyEvolutionParser: SectionParser = {
    section: "Making Evolutions Easier",

    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        
        for (const line of lines) {
            const easyMatch = line.match(/^(.+?)\s+now evolves into\s+(.+?)\s+at minimum level\s+(\d+)/)

            if (!easyMatch) continue

            const from = easyMatch[1].trim()
            const to = easyMatch[2].trim()
            const level = Number(easyMatch[3])
            const pokemon = getPokemonByName(data, from)
            if (!pokemon) continue
    
            pokemon.evolutions = []
            const evo: Evolution = {
                to,
                method: "level",
                level,
                source: "Making Evolutions Easier"
            }
            pokemon.evolutions.push(evo)
        }
    }
}
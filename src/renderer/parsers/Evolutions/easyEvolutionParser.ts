import { Evolution } from "../../models/Evolution"
import { Pokemon } from "../../models/pokemon"
import { ParserContext, SectionParser } from "../../typings/section"
import { getPokemonByName } from "../../utils/pokemonLookup"

export const easyEvolutionParser: SectionParser = {
    section: "Making Evolutions Easier",

    parse(text: string, data: ParserContext) {
        const lines = text.split("\n")
        
        for (const line of lines) {
            const easyMatch = line.match(/^(.+?)\s+now evolves into\s+(.+?)\s+at minimum level\s+(\d+)/)

            if (!easyMatch) continue

            const from = easyMatch[1].trim()
            const to = easyMatch[2].trim()
            const level = Number(easyMatch[3])
            const pokemon = getPokemonByName(data.pokemon, from)
            if (!pokemon) continue

            const evo: Evolution = {
                to,
                method: "level",
                level,
                source: "Making Evolutions Easier"
            }
            addOrUpdateEvolution(pokemon, evo)
        }
    }
}

function addOrUpdateEvolution(pokemon: Pokemon, evo: Evolution) {
    const existing = pokemon.evolutions.find(e => e.to === evo.to)

    if (existing) {
        Object.assign(existing, evo)
    } else {
        pokemon.evolutions.push(evo)
    }
}
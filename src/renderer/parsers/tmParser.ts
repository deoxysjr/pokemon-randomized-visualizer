import { PokemonMap, SectionParser } from "../typings/section"
import { TM } from "../models/TM"
import { getPokemonByName } from "../utils/pokemonLookup"

export const tmParser: SectionParser = {

    section: "TM Compatibility",

    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        for (const line of lines) {
            const match = line.match(/(\d+)\s+(.+?)\s+\|(.*)/)
            if(line.includes('Bulbasaur')) {
                // console.log(pokemon)
                console.log(match)
            }
            if (!match) continue

            const pokemon = getPokemonByName(data, match[2])
            const tmSection = match[3]
            
            if (!pokemon) continue
            const tmMatches = tmSection.match(/TM(\d+)\s+([^|]+)/g)
            
            if (!tmMatches) continue
            // pokemon.tmCompatibility = []
    
            for (const entry of tmMatches) {
                const tmMatch = entry.match(/TM(\d+)\s+(.+)/)
                if (!tmMatch) continue
    
                const tm: TM = {
                    tm: parseInt(tmMatch[1]),
                    move: tmMatch[2].trim()
                }
    
                pokemon.tmCompatibility.push(tm)
            }
        }
    }
} 
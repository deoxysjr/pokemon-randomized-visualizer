import { PokemonMap, SectionParser } from "../typings/pokemon"
import { TM } from "../models/TM"

export const tmParser: SectionParser = {

    section: "TM Compatibility",

    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        for (const line of lines) {
            const match = line.match(/^(\d+)\s+(.+?)\s+\|(.*)$/)
            if (!match) continue
    
            const number = parseInt(match[1])
            const tmSection = match[3]
            const pokemon = data[number]
    
            if (!pokemon) continue
            const tmMatches = tmSection.match(/TM(\d+)\s+([^|]+)/g)
    
            if (!tmMatches) continue
            pokemon.tmCompatibility = []
    
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
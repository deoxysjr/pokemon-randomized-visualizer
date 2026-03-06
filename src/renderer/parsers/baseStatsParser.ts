import { Pokemon } from "../models/Pokemon"
import { PokemonMap, SectionParser } from "../typings/pokemon"

export const baseStatParser: SectionParser = {
    /**
     * Section name '--name--'
     */
    section: "Pokemon Base Stats & Types",

    /**
     * Parser function
     * @param text Section text
     * @param data List of pokemon
     */
    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        
        for (const line of lines) {
            if (!/^\s*\d+\|/.test(line)) continue
        
            const parts = line.split("|").map(p => p.trim())
            const number = parseInt(parts[0])
            const pokemon: Pokemon = {
                number,
                name: parts[1],
                types: parts[2].split("/"),
        
                stats: {
                    hp: Number(parts[3]),
                    attack: Number(parts[4]),
                    defense: Number(parts[5]),
                    spAttack: Number(parts[6]),
                    spDefense: Number(parts[7]),
                    speed: Number(parts[8])
                },
        
                abilities: [parts[9], parts[10], parts[11]].filter(a => a && a !== "—"),
        
                moves: {
                    learnedOnEvolution: [],
                    levelUp: [],
                    eggMoves: []
                },
                
                items: [],
                evolutions: [],
                evolvesFrom: null,
                evolutionChains: [],
                tmCompatibility: []
            }
        
            data[number] = pokemon
        }
    }
}

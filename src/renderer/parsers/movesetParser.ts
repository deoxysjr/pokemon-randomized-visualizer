import { PokemonMap, SectionParser } from "../typings/pokemon"

export const movesetParser: SectionParser = {
    section: "Pokemon Movesets",

    parse(text: string, data: PokemonMap) {
        const lines = text.split("\n")
        let currentPokemon = null
        
        for (let line of lines) {
            line = line.trim()
            const header = line.match(/^(\d+)\s+(.+?)\s*->/)
        
            if (header) {
                const number = parseInt(header[1])
                currentPokemon = data[number]
                continue
            }
            if (!currentPokemon) continue
        
            const evoMove = line.match(/^Learned upon evolution:\s*(.+)/)
            if (evoMove) {
                currentPokemon.moves.learnedOnEvolution.push(evoMove[1].trim())
                continue
            }
        
            const levelMove = line.match(/^Level\s+(\d+)\s*:\s*(.+)/)
            if (levelMove) {
                currentPokemon.moves.levelUp.push({
                    level: Number(levelMove[1]),
                    move: levelMove[2].trim()
                })
                continue
            }
        
            const eggMove = line.match(/^-+\s*(.+)/)
            if (eggMove) {
                currentPokemon.moves.eggMoves.push(eggMove[1].trim())
            }
        }
    }
}
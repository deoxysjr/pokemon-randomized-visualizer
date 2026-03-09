import { Move } from "../models/Moves"
import { ParserContext, SectionParser } from "../typings/section"

export const movesParser: SectionParser = {
    /**
     * Section name '--name--'
     */
    section: "Move Data",

    /**
     * Parser function
     * @param text Section text
     * @param data List of pokemon
     */
    parse(text: string, data: ParserContext) {
        const lines = text.split("\n")

        for (const line of lines) {
            if (!/^\s*\d+\|/.test(line)) continue
        
            const parts = line.split("|").map(p => p.trim())
            const number = parseInt(parts[0])
            const move: Move = {
                id: number,
                name: parts[1],
                type: parts[2],
                power: parseInt(parts[3]),
                accuracy: parseInt(parts[4]),
                pp: parseInt(parts[5]),
                category: parts[6]
            }
        
            data.moves[number] = move
        }
    }
}
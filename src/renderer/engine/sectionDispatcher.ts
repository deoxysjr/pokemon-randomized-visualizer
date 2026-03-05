import { PokemonMap } from "../typings/pokemon"
import { getParser } from "./sectionRegistry"

export function dispatchSections(text: string, data: PokemonMap) {
    const parts = text.split(/--(.+?)--/g)
    for (let i = 1; i < parts.length; i += 2) {
        const sectionName = parts[i].trim()
        const sectionText = parts[i + 1]
        const parser = getParser(sectionName)

        if (!parser) continue

        parser.parse(sectionText, data)
    }
}
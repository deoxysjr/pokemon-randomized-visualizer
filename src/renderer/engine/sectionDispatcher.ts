import { ParserContext } from "../typings/section"
import { getParser, getRegisteredParsers } from "./sectionRegistry"

export function dispatchSections(text: string, data: ParserContext) {
    const parts = text.split(/--(.+?)--/g)

    const sections = new Map<string, string>()

    // collect sections first
    for (let i = 1; i < parts.length; i += 2) {
        const name = parts[i].trim()
        const body = parts[i + 1]
        sections.set(name, body)
    }

    // iterate parsers in registration order
    for (const parser of getRegisteredParsers()) {
        const sectionText = sections.get(parser.section)
        if (!sectionText) continue

        console.log(`Parsing: ${parser.section}`)
        parser.parse(sectionText, data)
    }
}
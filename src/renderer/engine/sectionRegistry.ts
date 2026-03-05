import { SectionParser } from "../typings/pokemon"

const registry: SectionParser[] = []

export function registerParser(parser: SectionParser) {
    registry.push(parser)
}

export function getParser(section: string) {
    return registry.find(p => section.includes(p.section))
}
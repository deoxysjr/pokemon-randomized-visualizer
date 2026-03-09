import { SectionParser } from "../typings/section"

const registry: SectionParser[] = []

export function registerParser(parser: SectionParser) {
    registry.push(parser)
}

export function getParser(section: string) {
    return registry.find(p => section.includes(p.section))
}

export function getRegisteredParsers() {
    return registry;
}
import { Pokemon } from "../models/Pokemon";

export type PokemonMap = Record<number, Pokemon>

export interface SectionParser {
    section: string
    parse(sectionText: string, data: PokemonMap): void
}
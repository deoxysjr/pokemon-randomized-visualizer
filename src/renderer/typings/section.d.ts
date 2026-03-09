import { EncounterSet } from "../models/Encounter"
import { Move } from "../models/Moves"
import { Pokemon } from "../models/Pokemon"

export type PokemonMap = Record<number, Pokemon>

export type MoveMap = Record<number, Move>

export type EncounterSetMap = Record<number, EncounterSet>

export type ParserContext = {
    pokemon: PokemonMap
    moves: MoveMap
    encounterSets: EncounterSetMap
}

export interface SectionParser {
    section: string
    parse(sectionText: string, data: ParserContext): void
}
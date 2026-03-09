import { Move } from "../models/Moves"
import { Pokemon } from "../models/Pokemon"

export type PokemonMap = Record<number, Pokemon>

export type MoveMap = Record<number, Move>

export interface SectionParser {
    section: string
    parse(sectionText: string, data: PokemonMap): void
}
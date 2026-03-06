import { Stats } from "./Stats"
import { Evolution } from "./Evolution"
import { Moveset } from "./Moves"
import { TM } from "./TM"

export interface Pokemon {
    number: number
    name: string
    types: string[]

    stats: Stats
    abilities: string[]
    items: string[]

    moves: Moveset

    evolutions: Evolution[]
    evolvesFrom?: string | null
    evolutionChains: Array<string[]>

    tmCompatibility: TM[]
}
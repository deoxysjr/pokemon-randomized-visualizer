import { Stats } from "./Stats"

export interface SOS {
    pokemon: string
    level: string
    stats: Stats
}

export interface Encounter {
    pokemon: string
    level: string
    stats: Stats
    sos: SOS[]
}

export interface EncounterSet {
    id: number
    location:string
    table:number
    rate:number
    encounters: Encounter[]
}
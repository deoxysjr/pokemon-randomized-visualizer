export interface LevelMove {
    level: number
    move: string
}

export interface Moveset {
    learnedOnEvolution: string[]
    levelUp: LevelMove[]
    eggMoves: string[]
}

export interface Move {
    id: number
    name: string
    type?: string
    power?:number
    accuracy?:number
    pp?:number
    category?: 'SPECIAL'|'PHYSICAL'|'STATUS'
}
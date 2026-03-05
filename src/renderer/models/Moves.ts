export interface LevelMove {
    level: number
    move: string
}

export interface Moveset {
    learnedOnEvolution: string[]
    levelUp: LevelMove[]
    eggMoves: string[]
}
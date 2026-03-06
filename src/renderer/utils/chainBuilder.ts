import { PokemonMap } from "../typings/pokemon"

export function buildEvolutionChains(data: PokemonMap) {
    const nameMap: Record<string, any> = {}

    for (const p of Object.values(data)) {
        nameMap[p.name] = p
        p.evolvesFrom = null
    }

    // build reverse links
    for (const p of Object.values(data)) {
        for (const evo of p.evolutions) {
            const target = nameMap[evo.to]
            if (!target) continue

            if (!target.evolvesFrom) {
                target.evolvesFrom = []
            }

            target.evolvesFrom.push(p.name)
        }
    }

    function getRoot(p: any): any {
        if (!p.evolvesFrom?.length) return p
        return getRoot(nameMap[p.evolvesFrom[0]])
    }

    function buildChains(current: any, path: string[]): string[][] {
        const newPath = [...path, current.name]

        if (!current.evolutions.length) {
            return [newPath]
        }

        let chains: string[][] = []

        for (const evo of current.evolutions) {
        const next = nameMap[evo.to]
        if (!next) continue

            chains.push(...buildChains(next, newPath))
        }

        return chains
    }

    for (const p of Object.values(data)) {
        const root = getRoot(p)
        const chains = buildChains(root, [])

        p.evolutionChains = chains
    }
}
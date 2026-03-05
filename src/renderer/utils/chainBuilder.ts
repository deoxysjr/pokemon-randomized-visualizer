import { PokemonMap } from "../typings/pokemon"

export function buildEvolutionChains(data: PokemonMap) {
    const nameMap: Record<string, any> = {}
    Object.values(data).forEach(p => {
        nameMap[p.name] = p
    })

    Object.values(data).forEach(p => {
        for (const evo of p.evolutions) {
            const target = nameMap[evo.to]
            if (target) {
                target.evolvesFrom = p.name
            }
        }
    })

    Object.values(data).forEach(p => {
        let root = p
        while (root.evolvesFrom && nameMap[root.evolvesFrom]) {
            root = nameMap[root.evolvesFrom]
        }

        const chain: string[] = []
        let current = root
        while (current) {
            chain.push(current.name)
            const next = current.evolutions[0]?.to
            if (!next) break
            current = nameMap[next]
        }

        p.evolutionChain = chain
    })
}
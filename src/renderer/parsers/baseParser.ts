import { registerParser } from "../engine/sectionRegistry"
import { dispatchSections } from "../engine/sectionDispatcher"
import { buildEvolutionChains } from "../utils/chainBuilder"
import { MoveMap, PokemonMap } from "../typings/section"

// Parsers
import { baseStatParser } from "./baseStatsParser"
import { tmParser } from "./tmParser"
import { movesetParser } from "./movesetParser"
import { randomizedEvolutionParser } from "./randomizedEvolutionParser"
import { impossibleEvolutionParser } from "./impossibleEvolutionParser"
import { easyEvolutionParser } from "./easyEvolutionParser"
import { timedEvolutionParser } from "./timedEvolutionParser"

registerParser(baseStatParser)
registerParser(tmParser)
registerParser(movesetParser)
registerParser(randomizedEvolutionParser)
registerParser(impossibleEvolutionParser)
registerParser(easyEvolutionParser)
registerParser(timedEvolutionParser)

export function convertToJson(log:string) {
    const pokemonData: PokemonMap = {}
    const moveData: MoveMap = {}

    dispatchSections(log, pokemonData)

    buildEvolutionChains(pokemonData)

    const result = Object.values(pokemonData)
    console.log(result);
}
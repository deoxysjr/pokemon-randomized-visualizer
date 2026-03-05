import { registerParser } from "../engine/sectionRegistry"
import { dispatchSections } from "../engine/sectionDispatcher"
import { buildEvolutionChains } from "../utils/chainBuilder"
import { parseBaseStats } from "./baseStatsParser"

// Parsers
import { tmParser } from "./tmParser"
import { movesetParser } from "./movesetParser"
import { randomizedEvolutionParser } from "./randomizedEvolutionParser"
import { impossibleEvolutionParser } from "./impossibleEvolutionParser"
import { easyEvolutionParser } from "./easyEvolutionParser"
import { timedEvolutionParser } from "./timedEvolutionParser"

// registerParser(tmParser)
// registerParser(movesetParser)
registerParser(randomizedEvolutionParser)
// registerParser(impossibleEvolutionParser)
// registerParser(easyEvolutionParser)
// registerParser(timedEvolutionParser)

export function convertToJson(log:string) {
    const pokemonData = parseBaseStats(log)

    dispatchSections(log, pokemonData)

    // buildEvolutionChains(pokemonData)

    const result = Object.values(pokemonData)
    console.log(result[132]);
}
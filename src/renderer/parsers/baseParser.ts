import { registerParser } from "../engine/sectionRegistry"
import { dispatchSections } from "../engine/sectionDispatcher"
import { buildEvolutionChains } from "../utils/chainBuilder"
import { ParserContext } from "../typings/section"

// Parsers
import { movesParser } from "./movesParser"
import { baseStatParser } from "./baseStatsParser"
import { tmParser } from "./tmParser"
import { movesetParser } from "./movesetParser"
import { randomizedEvolutionParser } from "./Evolutions/randomizedEvolutionParser"
import { impossibleEvolutionParser } from "./Evolutions/impossibleEvolutionParser"
import { easyEvolutionParser } from "./Evolutions/easyEvolutionParser"
import { timedEvolutionParser } from "./Evolutions/timedEvolutionParser"
import { encounterParser } from "./encounterParser"

// Move registers
registerParser(movesParser)

// Pokemon registers
registerParser(baseStatParser)
registerParser(tmParser)
registerParser(movesetParser)
registerParser(randomizedEvolutionParser)
registerParser(impossibleEvolutionParser)
registerParser(easyEvolutionParser)
registerParser(timedEvolutionParser)

// Wild encounters
registerParser(encounterParser)

export function convertToJson(log:string) {
    const dataMaps: ParserContext = {
        pokemon: {},
        moves: {},
        encounterSets: {}
    }

    dispatchSections(log, dataMaps)

    buildEvolutionChains(dataMaps.pokemon)

    const result = Object.values(dataMaps)
    console.log(result);
    return result;
}
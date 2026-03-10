import { Encounter, EncounterSet } from "../models/Encounter"
import { ParserContext, SectionParser } from "../typings/section"

export const encounterParser: SectionParser = {
    /**
     * Section name '--name--'
     */
    section: "Wild Pokemon",

    /**
     * Parser function
     * @param text Section text
     * @param data List of pokemon
     */
    parse(text: string, data: ParserContext) {
        const lines = text.split("\n")
        let currentSet: EncounterSet | null = null
        let currentEncounter: Encounter | null = null

        for (const line of lines) {
            const header = line.match(/^Set #(\d+) - (.+), Table (\d+) \(rate=(\d+)\)/)

            if (header) {
                const id = parseInt(header[1])
                currentSet = {
                    id: id,
                    location: header[2],
                    table: parseInt(header[3]),
                    rate: parseInt(header[4]),
                    encounters: []
                }

                data.encounterSets[id] = currentSet
                currentEncounter = null
                continue
            }

            if (!currentSet) continue

            const mon = line.match(/^(?:SOS:\s*)?(.+?)\s+Lv[s]?\s*([\d\-]+)\s+HP\s+(\d+)\s+ATK\s+(\d+)\s+DEF\s+(\d+)\s+SPATK\s+(\d+)\s+SPDEF\s+(\d+)\s+SPEED\s+(\d+)/)
            if (!mon) continue

            const entry = {
                pokemon: mon[1].trim(),
                level: mon[2],
                stats: {
                    hp: parseInt(mon[3]),
                    attack: parseInt(mon[4]),
                    defense: parseInt(mon[5]),
                    spAttack: parseInt(mon[6]),
                    spDefense: parseInt(mon[7]),
                    speed: parseInt(mon[8])
                }
            }

            const isSOS = line.trimStart().startsWith("SOS:")

            if (isSOS) {
                if (currentEncounter) {
                    entry.pokemon = entry.pokemon.replace('SOS: ', '')
                    currentEncounter.sos.push(entry)
                }
            } else {
                currentEncounter = {
                    ...entry,
                    sos: []
                }
                currentSet.encounters.push(currentEncounter)
            }
        }
    }
}
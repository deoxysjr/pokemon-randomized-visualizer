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

        const headerRegex = /^Set #(\d+) - (.+), Table (\d+) \(rate=(\d+)\)/

        const monRegex = /^(?:SOS:\s*)?(.+?)\s+Lv[s]?\s*([\d\-]+)\s+HP\s+(\d+)\s+ATK\s+(\d+)\s+DEF\s+(\d+)\s+SPATK\s+(\d+)\s+SPDEF\s+(\d+)\s+SPEED\s+(\d+)/

        let currentSet: EncounterSet | null = null
        let currentEncounter: Encounter | null = null

        for (const rawLine of text.split("\n")) {

            const line = rawLine.trimEnd()

            if (!line.trim()) continue

            // ---- new set ----
            const header = line.match(headerRegex)

            if (header) {
                currentSet = {
                    id: Number(header[1]),
                    location: header[2],
                    table: Number(header[3]),
                    rate: Number(header[4]),
                    encounters: []
                }

                sets.push(currentSet)
                currentEncounter = null
                continue
            }

            if (!currentSet) continue

            const mon = line.match(monRegex)
            if (!mon) continue

            const entry = {
                pokemon: mon[1].trim(),
                level: mon[2],
                stats: {
                    hp: Number(mon[3]),
                    atk: Number(mon[4]),
                    def: Number(mon[5]),
                    spAttack: Number(mon[6]),
                    spDefense: Number(mon[7]),
                    speed: Number(mon[8])
                }
            }

            const isSOS = line.trimStart().startsWith("SOS:")

            if (isSOS) {

            if (currentEncounter) {
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

        return sets
    }
}
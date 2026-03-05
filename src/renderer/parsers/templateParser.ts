import { PokemonMap, SectionParser } from "../typings/pokemon"

export const Parser: SectionParser = {
    /**
     * Section name '--name--'
     */
    section: "",

    /**
     * Parser function
     * @param text Section text
     * @param data List of pokemon
     */
    parse(text: string, data: PokemonMap) {}
}
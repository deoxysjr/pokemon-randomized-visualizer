import { Move } from "../models/Moves";
import { MoveMap } from "../typings/section";

export function getMoveByName(data: MoveMap, move:string): Move | undefined {
    return Object.values(data).find(m => m.name === move)
}
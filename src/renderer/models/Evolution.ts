export interface Evolution {
    to: string
    method: "level" | "hold_item" | "use_item" | "party_condition" | "other"

    level?: number
    item?: string
    details?: string
    source?: string
}
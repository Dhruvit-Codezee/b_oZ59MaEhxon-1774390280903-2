import { SolutionCardGridClient } from "./solution-card-client"

/* ── Data shape (shared by every use-case page) ─────────────────────────── */

export interface AutomationArea {
  number: string
  category?: "Process" | "Data" | "Coordination" | "Compliance" | "Analytics"
  icon?: unknown
  title: string
  problem: string
  solutions: string[]
  roi: string
}

/** Serialisable subset - strips the non-serialisable `icon` before crossing
 *  the Server to Client Component boundary. */
export type SerializableArea = Omit<AutomationArea, "icon">

/* ── Server wrapper: strips icons then delegates to the client grid ────── */

export function SolutionCardGrid({ areas }: { areas: AutomationArea[] }) {
  const safe: SerializableArea[] = areas.map(
    ({ icon: _icon, ...rest }) => rest,
  )
  return <SolutionCardGridClient areas={safe} />
}

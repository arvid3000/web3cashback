import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

const variants = [
  { path: "/", label: "V1" },
  { path: "/v2", label: "V2" },
]

export function VariantNav() {
  return (
    <div className="flex items-center gap-1 rounded-lg border p-1" style={{ borderColor: 'hsl(235,13%,91%)' }}>
      {variants.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          end
          className={({ isActive }) =>
            cn(
              "px-3 py-1 rounded-md text-sm font-medium transition-colors",
              isActive
                ? "bg-[#4A52B8] text-white"
                : "text-muted-foreground hover:text-foreground"
            )
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}

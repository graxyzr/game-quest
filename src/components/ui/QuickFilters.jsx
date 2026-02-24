import { Coffee, UtensilsCrossed, Moon, Calendar } from 'lucide-react'
import { quickFilterConfig } from '../../styles/theme'

const iconMap = {
    Coffee: Coffee,
    UtensilsCrossed: UtensilsCrossed,
    Moon: Moon,
    Calendar: Calendar,
}

/**
 * QuickFilters — colored pill buttons for time presets
 * Props:
 *   active   {string|null} - currently active filter id
 *   onChange {fn}          - (id: string|null) => void
 */
export default function QuickFilters({ active, onChange }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="section-title">Filtros rápidos</span>

            <div className="flex items-center gap-2 flex-wrap">
                {quickFilterConfig.map((filter) => {
                    const Icon = iconMap[filter.icon]
                    const isActive = active === filter.id
                    return (
                        <button
                            key={filter.id}
                            className={`${filter.class} ${isActive ? 'active' : ''}`}
                            onClick={() => onChange(isActive ? null : filter.id)}
                            aria-pressed={isActive}
                        >
                            {Icon && <Icon size={14} />}
                            <span>{filter.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
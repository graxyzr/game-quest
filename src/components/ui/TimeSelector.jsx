import { timeSelectorOptions } from '../../styles/theme'

/**
 * TimeSelector — Cyberpunk time picker
 * Props:
 *   selected   {number} - currently selected time in minutes
 *   onChange   {fn}     - (minutes: number) => void
 */
export default function TimeSelector({ selected, onChange }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="section-title">Tempo disponível</span>

            <div className="flex items-center gap-2 flex-wrap">
                {timeSelectorOptions.map((opt) => {
                    const isActive = selected === opt.value
                    return (
                        <button
                            key={opt.value}
                            className={`time-button ${isActive ? 'active' : ''}`}
                            onClick={() => onChange(opt.value)}
                            aria-pressed={isActive}
                            title={`Filtrar jogos para ${opt.label}`}
                        >
                            {/* Tooltip */}
                            <span className="cyber-tooltip">
                                Sessão de {opt.label}
                            </span>

                            <span className="leading-none">{opt.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
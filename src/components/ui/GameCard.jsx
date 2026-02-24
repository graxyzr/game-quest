import { Clock, Tag, Timer } from 'lucide-react'

/**
 * Format minutes → "Xh Ym" or "Xmin"
 */
function formatTime(minutes) {
    if (!minutes) return '—'
    if (minutes < 60) return `${minutes}min`
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    return m > 0 ? `${h}h ${m}min` : `${h}h`
}

/**
 * GameCard — Cyberpunk game card with cover art
 * Props:
 *   game {object}:
 *     title       {string}
 *     cover       {string}  - image URL
 *     category    {string}  - genre/category label
 *     totalTime   {number}  - total playtime in minutes
 *     sessionTime {number}  - recommended session in minutes
 *     available   {boolean} - fits in current time window
 *   index {number}          - for stagger animation
 *   onClick {fn}
 */
export default function GameCard({ game, index = 0, onClick }) {
    const {
        title = 'Unknown Game',
        cover = null,
        category = 'Unknown',
        totalTime = null,
        sessionTime = null,
        available = true,
    } = game || {}

    // Stagger delay classes
    const delays = ['delay-50', 'delay-100', 'delay-150', 'delay-200', 'delay-300', 'delay-400']
    const delayClass = delays[index % delays.length] ?? ''

    return (
        <article
            className={`cyber-card animate-cyber-slide ${delayClass} ${!available ? 'opacity-60' : ''}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
            aria-label={`${title} — ${formatTime(totalTime)}`}
        >
            {/* ── Cover art ──────────────────────────────────── */}
            <div className="card-cover">
                {cover ? (
                    <img src={cover} alt={`${title} cover`} loading="lazy" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-bg-tertiary">
                        <span className="text-4xl opacity-20">🎮</span>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="card-overlay" />

                {/* Category badge */}
                <span className="category-badge">
                    {category}
                </span>

                {/* Unavailable overlay */}
                {!available && (
                    <div className="card-unavailable">
                        <Timer size={24} className="text-text-tertiary" />
                        <span className="text-xs font-mono text-text-tertiary text-center px-2 leading-snug">
                            Tempo<br />insuficiente
                        </span>
                    </div>
                )}
            </div>

            {/* ── Card body ──────────────────────────────────── */}
            <div className="card-body">
                {/* Title */}
                <p className="card-title mb-2" title={title}>
                    {title}
                </p>

                {/* Times */}
                <div className="flex items-center justify-between gap-2">
                    {/* Total playtime */}
                    <span className="card-time-total">
                        {formatTime(totalTime)}
                    </span>

                    {/* Session time */}
                    {sessionTime && (
                        <span className="card-time-session">
                            <Clock size={11} />
                            {formatTime(sessionTime)}
                        </span>
                    )}
                </div>
            </div>
        </article>
    )
}
import { RefreshCw, Zap, Gamepad2 } from 'lucide-react'

export default function Header({ available = 0, total = 0, onRefresh, loading = false }) {
    return (
        <header className="glass-header">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-4">

                    {/* ── Left: Logo + badge ────────────────────────── */}
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="flex items-center gap-2">
                            <Gamepad2
                                size={22}
                                className="text-neon-blue flex-shrink-0"
                                style={{ filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.7))' }}
                            />
                            <h1 className="logo-glow text-xl sm:text-2xl tracking-widest whitespace-nowrap">
                                GAMEQUEST
                            </h1>
                        </div>

                        <span className="header-badge hidden sm:inline-flex">
                            <Zap size={10} />
                            Time-to-Beat
                        </span>
                    </div>

                    {/* ── Right: Stats + refresh ────────────────────── */}
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

                        {/* Available stat */}
                        <div className="stat-chip">
                            <span
                                className="stat-number"
                                style={{
                                    color: available > 0 ? '#00FF88' : '#737373',
                                    textShadow: available > 0 ? '0 0 10px rgba(0,255,136,0.5)' : 'none',
                                }}
                            >
                                {available}
                            </span>
                            <span className="stat-label">Disponíveis</span>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-8 bg-white/10 hidden sm:block" />

                        {/* Total stat */}
                        <div className="stat-chip">
                            <span className="stat-number text-neon-blue"
                                style={{ textShadow: '0 0 10px rgba(59,130,246,0.5)' }}>
                                {total}
                            </span>
                            <span className="stat-label">Total</span>
                        </div>

                        {/* Refresh */}
                        <button
                            className="refresh-button"
                            onClick={onRefresh}
                            disabled={loading}
                            aria-label="Atualizar jogos"
                            title="Atualizar jogos gratuitos"
                        >
                            <RefreshCw
                                size={16}
                                className={loading ? 'animate-spin-slow text-neon-blue' : 'transition-colors duration-200'}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
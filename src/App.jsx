import { useState, useMemo, useEffect } from 'react'
import { Search, RefreshCw, Zap, Gamepad2, Clock, Coffee, UtensilsCrossed, Moon, Calendar, Timer } from 'lucide-react'
import { getGamesWithDebug as getGames } from './services/freeToGameService'

// ── Google Fonts injected at runtime ──────────────────────────
const fontLink = document.createElement('link')
fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Space+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

// ── Design tokens ─────────────────────────────────────────────
const C = {
  bgPrimary: '#0A0A0F',
  bgSecondary: '#121217',
  bgTertiary: '#1C1C24',
  bgCard: '#13131A',
  neonBlue: '#3B82F6',
  neonPurple: '#A855F7',
  neonCyan: '#00FFFF',
  neonGreen: '#00FF88',
  textPrimary: '#FAFAFA',
  textSecondary: '#B3B3B3',
  textTertiary: '#737373',
}

const TIME_OPTIONS = [
  { label: '15min', value: 15 },
  { label: '30min', value: 30 },
  { label: '1h', value: 60 },
  { label: '2h', value: 120 },
  { label: '5h', value: 300 },
]

const QUICK_FILTERS = [
  { id: 'coffee', label: 'Coffee Break', Icon: Coffee, max: 30, color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.4)' },
  { id: 'lunch', label: 'Almoço', Icon: UtensilsCrossed, max: 60, color: '#10B981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.4)' },
  { id: 'night', label: 'Noite', Icon: Moon, max: 120, color: '#A855F7', bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.4)' },
  { id: 'weekend', label: 'Fim de Semana', Icon: Calendar, max: 300, color: '#3B82F6', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.4)' },
]

// ── Inject global CSS (MANTIDO IGUAL) ─────────────────────────
if (!document.getElementById('gq-styles')) {
  const s = document.createElement('style')
  s.id = 'gq-styles'
  s.textContent = `
    @keyframes gq-spin    { to { transform: rotate(360deg) } }
    @keyframes gq-fadeUp  { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:translateY(0) } }
    @keyframes gq-flicker { 0%,90%,100%{opacity:1} 92%{opacity:.7} 94%{opacity:1} 96%{opacity:.85} }
    *,*::before,*::after { box-sizing:border-box }
    body { margin:0; background:#0A0A0F; font-family:'Space Grotesk',sans-serif; color:#FAFAFA }
    input,button { font-family:inherit; border:none; background:none }
    button { cursor:pointer }
    ::-webkit-scrollbar { width:5px }
    ::-webkit-scrollbar-track { background:#121217 }
    ::-webkit-scrollbar-thumb { background:#2a2a38; border-radius:3px }
    ::-webkit-scrollbar-thumb:hover { background:#3B82F6 }
    ::selection { background:rgba(59,130,246,.3) }
    .gq-card { transition:transform .25s ease, border-color .25s ease, box-shadow .25s ease, opacity .25s ease }
    .gq-card:hover { transform:translateY(-5px) scale(1.015); border-color:rgba(59,130,246,.55) !important; box-shadow:0 0 22px rgba(59,130,246,.2), 0 12px 36px rgba(0,0,0,.65) !important }
    .gq-card .cimg { transition:transform .45s ease }
    .gq-card:hover .cimg { transform:scale(1.07) }
    .gq-tbtn { transition:all .18s ease }
    .gq-tbtn:hover { border-color:rgba(59,130,246,.65) !important; color:#fff !important; background:rgba(59,130,246,.12) !important }
    .gq-fbtn { transition:all .18s ease }
    .gq-fbtn:hover { filter:brightness(1.18); transform:translateY(-1px) }
    .gq-rbtn { transition:all .18s ease; padding:7px; border-radius:6px; border:1px solid transparent }
    .gq-rbtn:hover { background:rgba(59,130,246,.1); border-color:rgba(59,130,246,.35) }
    .gq-search input { transition:border-color .2s, box-shadow .2s }
    .gq-search input:focus { outline:none; border-color:rgba(59,130,246,.65) !important; box-shadow:0 0 0 3px rgba(59,130,246,.12) !important }
    .gq-logo { animation:gq-flicker 7s linear infinite }
  `
  document.head.appendChild(s)
}

// ── Helpers ───────────────────────────────────────────────────
function fmt(min) {
  if (!min) return '—'
  if (min < 60) return `${min}min`
  const h = Math.floor(min / 60), m = min % 60
  return m ? `${h}h ${m}min` : `${h}h`
}

// ── Sub-components ────────────────────────────────────────────
function StatChip({ value, label, color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px 14px', background: 'rgba(28,28,36,.85)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 6 }}>
      <span style={{ fontFamily: '"JetBrains Mono",monospace', fontWeight: 600, fontSize: 17, lineHeight: 1, color, textShadow: color ? `0 0 10px ${color}55` : 'none' }}>{value}</span>
      <span style={{ fontSize: 10, color: C.textTertiary, marginTop: 3, textTransform: 'uppercase', letterSpacing: '.1em' }}>{label}</span>
    </div>
  )
}

function Header({ available, total, onRefresh, loading }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(10,10,15,.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(59,130,246,.14)', boxShadow: '0 4px 24px rgba(0,0,0,.5)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Gamepad2 size={21} style={{ color: C.neonBlue, filter: `drop-shadow(0 0 6px ${C.neonBlue})`, flexShrink: 0 }} />
          <span className="gq-logo" style={{ fontFamily: '"Orbitron",sans-serif', fontWeight: 900, fontSize: 20, letterSpacing: '.22em', background: 'linear-gradient(135deg,#60A5FA 0%,#A855F7 55%,#00FFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 10px rgba(96,165,250,.4))' }}>GAMEQUEST</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 99, fontSize: 11, fontFamily: '"JetBrains Mono",monospace', background: 'rgba(0,255,255,.07)', border: '1px solid rgba(0,255,255,.32)', color: C.neonCyan, boxShadow: '0 0 10px rgba(0,255,255,.1)', whiteSpace: 'nowrap' }}>
            <Zap size={9} /> Time-to-Beat
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <StatChip value={available} label="Disponíveis" color={available > 0 ? C.neonGreen : C.textTertiary} />
          <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,.08)' }} />
          <StatChip value={total} label="Total" color={C.neonBlue} />
          <button className="gq-rbtn" onClick={onRefresh} aria-label="Atualizar" style={{ color: C.textSecondary }}>
            <RefreshCw size={15} style={{ display: 'block', animation: loading ? 'gq-spin 1s linear infinite' : 'none', color: 'inherit' }} />
          </button>
        </div>
      </div>
    </header>
  )
}

function TimeSelector({ selected, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 11, fontFamily: '"JetBrains Mono",monospace', color: C.textTertiary, textTransform: 'uppercase', letterSpacing: '.14em' }}>Tempo disponível</span>
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
        {TIME_OPTIONS.map(o => {
          const a = selected === o.value
          return (
            <button key={o.value} className="gq-tbtn" onClick={() => onChange(o.value)}
              style={{ padding: '8px 15px', borderRadius: 6, border: `1px solid ${a ? C.neonBlue : 'rgba(255,255,255,.1)'}`, background: a ? 'rgba(59,130,246,.18)' : 'rgba(28,28,36,.9)', color: a ? '#fff' : C.textSecondary, fontFamily: '"JetBrains Mono",monospace', fontSize: 13, fontWeight: 500, boxShadow: a ? '0 0 16px rgba(59,130,246,.4), inset 0 0 12px rgba(59,130,246,.07)' : 'none' }}>
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuickFilters({ active, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 11, fontFamily: '"JetBrains Mono",monospace', color: C.textTertiary, textTransform: 'uppercase', letterSpacing: '.14em' }}>Filtros rápidos</span>
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
        {QUICK_FILTERS.map(({ id, label, Icon, color, bg, border }) => {
          const a = active === id
          return (
            <button key={id} className="gq-fbtn" onClick={() => onChange(a ? null : id)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 99, border: `1px solid ${a ? color : border}`, background: a ? bg.replace('0.12', '0.24') : bg, color, fontSize: 13, fontWeight: 500, boxShadow: a ? `0 0 14px ${color}44` : 'none' }}>
              <Icon size={13} /> {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function GameCard({ game, index }) {
  const { title, coverUrl, category, timeToBeat, sessionLength, available } = game
  return (
    <div className="gq-card" style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,.07)', background: C.bgCard, animation: `gq-fadeUp .4s ease-out ${index * 55}ms both`, opacity: available ? 1 : .5 }}>
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
        <img className="cimg" src={coverUrl || 'https://via.placeholder.com/300x400?text=No+Image'} alt={title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 38%,rgba(10,10,15,.97) 100%)' }} />
        <span style={{ position: 'absolute', top: 8, left: 8, padding: '3px 8px', borderRadius: 4, background: 'rgba(168,85,247,.22)', border: '1px solid rgba(168,85,247,.48)', color: '#C084FC', fontSize: 11, fontWeight: 500, backdropFilter: 'blur(4px)' }}>{category}</span>
        {!available && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'rgba(10,10,15,.78)', backdropFilter: 'blur(3px)' }}>
            <Timer size={22} style={{ color: C.textTertiary }} />
            <span style={{ fontSize: 11, fontFamily: '"JetBrains Mono",monospace', color: C.textTertiary, textAlign: 'center', lineHeight: 1.5 }}>Tempo<br />insuficiente</span>
          </div>
        )}
      </div>
      <div style={{ padding: '10px 12px 12px' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: C.textPrimary, marginBottom: 7, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={title}>{title}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
          <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 13, fontWeight: 600, color: C.neonBlue, textShadow: `0 0 8px ${C.neonBlue}55` }}>{fmt(timeToBeat * 60)}</span>
          {sessionLength && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: C.textTertiary, fontFamily: '"JetBrains Mono",monospace' }}><Clock size={10} /> {fmt(sessionLength)}</span>}
        </div>
      </div>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────
export default function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedTime, setSelectedTime] = useState(() => {
    const saved = localStorage.getItem('gamequest-time')
    return saved ? parseInt(saved) : 30
  })
  const [activeFilter, setActiveFilter] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('gamequest-time', selectedTime)
  }, [selectedTime])

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        console.log('Tentando carregar jogos...');
        const data = await getGames();
        console.log('Dados recebidos:', data);
        setGames(data);
        setError(null);
      } catch (err) {
        console.error('Erro detalhado:', err);
        setError('Erro ao carregar jogos: ' + err.message);
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  const handleFilterChange = id => {
    setActiveFilter(id)
    if (id) {
      const f = QUICK_FILTERS.find(f => f.id === id)
      if (f) setSelectedTime(f.max)
    }
  }

  const handleTimeChange = min => {
    setSelectedTime(min)
    setActiveFilter(null)
  }

  const handleRefresh = async () => {
    setLoading(true)
    try {
      const data = await getGames()
      setGames(data)
      setError(null)
    } catch (err) {
      setError('Erro ao recarregar jogos')
    } finally {
      setLoading(false)
    }
  }

  const filteredGames = useMemo(() => {
    return games
      .filter(g => g.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(g => ({ ...g, available: g.sessionLength <= selectedTime }))
  }, [games, searchQuery, selectedTime])

  const avail = filteredGames.filter(g => g.available).length

  return (
    <div style={{ minHeight: '100vh', background: C.bgPrimary, backgroundImage: 'radial-gradient(at 15% 85%,rgba(59,130,246,.07) 0,transparent 50%),radial-gradient(at 85% 15%,rgba(168,85,247,.05) 0,transparent 50%)' }}>
      <Header available={avail} total={filteredGames.length} onRefresh={handleRefresh} loading={loading} />

      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 24px 60px' }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
          <div className="gq-search" style={{ position: 'relative', maxWidth: 400 }}>
            <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.textTertiary, pointerEvents: 'none' }} />
            <input type="search" placeholder="Buscar jogos..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', paddingLeft: 36, paddingRight: 14, paddingTop: 10, paddingBottom: 10, background: 'rgba(18,18,23,.95)', border: '1px solid rgba(255,255,255,.09)', borderRadius: 7, color: C.textPrimary, fontSize: 14 }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
            <TimeSelector selected={selectedTime} onChange={handleTimeChange} />
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,.06)' }} />
            <QuickFilters active={activeFilter} onChange={handleFilterChange} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(59,130,246,.28),rgba(168,85,247,.18),transparent)', marginBottom: 18 }} />

        {/* Count */}
        <p style={{ fontSize: 11, fontFamily: '"JetBrains Mono",monospace', color: C.textTertiary, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>
          {avail} de {filteredGames.length} jogos disponíveis
        </p>

        {/* Grid */}
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '80px 0' }}>
            <div style={{ width: 42, height: 42, border: `2px solid ${C.neonBlue}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'gq-spin 1s linear infinite' }} />
            <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: C.textTertiary, textTransform: 'uppercase', letterSpacing: '.15em' }}>Carregando jogos gratuitos...</span>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#FF4444', marginBottom: 16 }}>{error}</p>
            <button onClick={handleRefresh} style={{ padding: '8px 16px', background: C.neonBlue, color: '#fff', borderRadius: 6, border: 'none' }}>
              Tentar novamente
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))' }}>
            {filteredGames.map((g, i) => <GameCard key={g.id} game={g} index={i} />)}
          </div>
        )}
      </main>
    </div>
  )
}
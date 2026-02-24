/**
 * theme.js — GameQuest Cyberpunk Dark Design Tokens
 * Import these wherever you need programmatic access to the theme.
 */

export const colors = {
    // Backgrounds
    bgPrimary: '#0A0A0F',
    bgSecondary: '#121217',
    bgTertiary: '#1C1C24',
    bgCard: '#16161E',

    // Neons
    neonBlue: '#3B82F6',
    neonPurple: '#A855F7',
    neonCyan: '#00FFFF',
    neonPink: '#F472B6',
    neonGreen: '#00FF88',

    // Text
    textPrimary: '#FAFAFA',
    textSecondary: '#B3B3B3',
    textTertiary: '#737373',
    textDisabled: '#4D4D4D',

    // Feedback
    success: '#00FF88',
    warning: '#FFB800',
    error: '#FF4444',

    // Quick Filters
    filterCoffee: '#F59E0B',
    filterLunch: '#10B981',
    filterNight: '#A855F7',
    filterWeekend: '#3B82F6',
}

export const fonts = {
    display: '"Orbitron", sans-serif',
    sans: '"Space Grotesk", sans-serif',
    mono: '"JetBrains Mono", monospace',
}

export const shadows = {
    neonBlue: '0 0 8px rgba(59,130,246,0.6), 0 0 20px rgba(59,130,246,0.3)',
    neonPurple: '0 0 8px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.3)',
    neonCyan: '0 0 8px rgba(0,255,255,0.6), 0 0 20px rgba(0,255,255,0.3)',
    cardHover: '0 0 20px rgba(59,130,246,0.25), 0 8px 32px rgba(0,0,0,0.6)',
}

export const gradients = {
    cyber: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
    title: 'linear-gradient(135deg, #60A5FA 0%, #A855F7 50%, #00FFFF 100%)',
    card: 'linear-gradient(180deg, transparent 40%, rgba(10,10,15,0.98) 100%)',
    mesh: `
    radial-gradient(at 20% 80%, rgba(59,130,246,0.15) 0px, transparent 50%),
    radial-gradient(at 80% 20%, rgba(168,85,247,0.12) 0px, transparent 50%),
    radial-gradient(at 50% 50%, rgba(0,255,255,0.05) 0px, transparent 60%)
  `,
}

export const transitions = {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
}

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
}

export const quickFilterConfig = [
    {
        id: 'coffee',
        label: 'Coffee Break',
        icon: 'Coffee',
        class: 'filter-coffee',
        max: 30, // minutes
        color: colors.filterCoffee,
    },
    {
        id: 'lunch',
        label: 'Almoço',
        icon: 'UtensilsCrossed',
        class: 'filter-lunch',
        max: 60,
        color: colors.filterLunch,
    },
    {
        id: 'night',
        label: 'Noite',
        icon: 'Moon',
        class: 'filter-night',
        max: 120,
        color: colors.filterNight,
    },
    {
        id: 'weekend',
        label: 'Fim de Semana',
        icon: 'Calendar',
        class: 'filter-weekend',
        max: 300,
        color: colors.filterWeekend,
    },
]

export const timeSelectorOptions = [
    { label: '15min', value: 15 },
    { label: '30min', value: 30 },
    { label: '1h', value: 60 },
    { label: '2h', value: 120 },
    { label: '5h', value: 300 },
]

export default {
    colors,
    fonts,
    shadows,
    gradients,
    transitions,
    breakpoints,
    quickFilterConfig,
    timeSelectorOptions,
}
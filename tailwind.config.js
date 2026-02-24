/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Backgrounds
                'bg-primary': '#0A0A0F',
                'bg-secondary': '#121217',
                'bg-tertiary': '#1C1C24',
                'bg-card': '#16161E',

                // Neons
                'neon-blue': '#3B82F6',
                'neon-purple': '#A855F7',
                'neon-cyan': '#00FFFF',
                'neon-pink': '#F472B6',
                'neon-green': '#00FF88',

                // Text
                'text-primary': '#FAFAFA',
                'text-secondary': '#B3B3B3',
                'text-tertiary': '#737373',
                'text-disabled': '#4D4D4D',

                // Feedback
                'success': '#00FF88',
                'warning': '#FFB800',
                'error': '#FF4444',

                // Quick Filters
                'filter-coffee': '#F59E0B',
                'filter-lunch': '#10B981',
                'filter-night': '#A855F7',
                'filter-weekend': '#3B82F6',
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
                display: ['"Orbitron"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-cyber': 'linear-gradient(135deg, #3B82F6 0%, #A855F7 100%)',
                'gradient-header': 'linear-gradient(180deg, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.7) 100%)',
                'gradient-card': 'linear-gradient(180deg, transparent 40%, rgba(10,10,15,0.98) 100%)',
                'gradient-neon-blue': 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
                'gradient-mesh': 'radial-gradient(at 20% 80%, rgba(59,130,246,0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(168,85,247,0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(0,255,255,0.05) 0px, transparent 60%)',
            },
            boxShadow: {
                'neon-blue': '0 0 8px rgba(59,130,246,0.6), 0 0 20px rgba(59,130,246,0.3)',
                'neon-purple': '0 0 8px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.3)',
                'neon-cyan': '0 0 8px rgba(0,255,255,0.6), 0 0 20px rgba(0,255,255,0.3)',
                'neon-pink': '0 0 8px rgba(244,114,182,0.6), 0 0 20px rgba(244,114,182,0.3)',
                'neon-green': '0 0 8px rgba(0,255,136,0.6), 0 0 20px rgba(0,255,136,0.3)',
                'card-hover': '0 0 20px rgba(59,130,246,0.25), 0 8px 32px rgba(0,0,0,0.6)',
                'inner-glow': 'inset 0 0 20px rgba(59,130,246,0.1)',
            },
            keyframes: {
                glow: {
                    '0%, 100%': { boxShadow: '0 0 8px rgba(59,130,246,0.4), 0 0 20px rgba(59,130,246,0.2)' },
                    '50%': { boxShadow: '0 0 16px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.4)' },
                },
                'glow-purple': {
                    '0%, 100%': { boxShadow: '0 0 8px rgba(168,85,247,0.4)' },
                    '50%': { boxShadow: '0 0 16px rgba(168,85,247,0.8), 0 0 40px rgba(168,85,247,0.4)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
                'cyber-slide': {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0px)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                flicker: {
                    '0%, 95%, 100%': { opacity: '1' },
                    '96%': { opacity: '0.8' },
                    '97%': { opacity: '1' },
                    '98%': { opacity: '0.7' },
                    '99%': { opacity: '1' },
                },
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite',
                'glow-purple': 'glow-purple 2s ease-in-out infinite',
                'float': 'float 4s ease-in-out infinite',
                'cyber-slide': 'cyber-slide 0.4s ease-out forwards',
                'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
                'scanline': 'scanline 8s linear infinite',
                'spin-slow': 'spin-slow 1.2s linear infinite',
                'flicker': 'flicker 5s linear infinite',
            },
            backdropBlur: {
                xs: '2px',
            },
            borderRadius: {
                'cyber': '2px',
            },
        },
    },
    plugins: [],
}
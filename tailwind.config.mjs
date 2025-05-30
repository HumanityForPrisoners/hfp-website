import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    darkMode: ['selector', '[data-theme="dark"]'],
    plugins: [tailwindcssAnimate, typography],
    prefix: '',
    safelist: [
        'lg:col-span-4',
        'lg:col-span-6',
        'lg:col-span-8',
        'lg:col-span-12',
        'border-border',
        'bg-card',
        'border-error',
        'bg-error/30',
        'border-success',
        'bg-success/30',
        'border-warning',
        'bg-warning/30',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                '2xl': '2rem',
                DEFAULT: '1rem',
                lg: '2rem',
                md: '2rem',
                sm: '1rem',
                xl: '2rem',
            },
            screens: {
                '2xl': '86rem',
                lg: '64rem',
                md: '48rem',
                sm: '40rem',
                xl: '80rem',
            },
        },
        extend: {
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                background: 'hsl(var(--background))',
                border: 'hsla(var(--border))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                foreground: 'hsl(var(--foreground))',
                input: 'hsl(var(--input))',
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                ring: 'hsl(var(--ring))',
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                success: 'hsl(var(--success))',
                error: 'hsl(var(--error))',
                warning: 'hsl(var(--warning))',
            },
            fontFamily: {
                mono: ['var(--font-pt-serif)'],
                sans: ['var(--font-open-sans)'],
            },
            gap: {
                30: '1.875rem',
            },
            gridTemplateColumns: {
                '12-90': 'repeat(12, minmax(0, 5.265rem))',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            typography: () => ({
                DEFAULT: {
                    css: [
                        {
                            h1: {
                                fontSize: '3rem',
                                fontFamily: 'var(--font-pt-serif)',
                                fontWeight: '400',
                                lineHeight: '1.3',
                                marginBottom: '0.25em',
                            },
                            h2: {
                                fontSize: '3rem',
                                fontFamily: 'var(--font-pt-serif)',
                                fontWeight: '400',
                                lineHeight: '1.3',
                            },
                            h3: {
                                fontSize: '2.2rem',
                                fontFamily: 'var(--font-pt-serif)',
                                fontWeight: '400',
                                lineHeight: '1.3',
                            },
                            h4: {
                                fontSize: '1.3rem',
                                fontFamily: 'var(--font-pt-serif)',
                                fontWeight: '400',
                                lineHeight: '1.3',
                            },
                            h5: {
                                fontSize: '1.3rem',
                                fontFamily: 'var(--font-pt-serif)',
                                fontWeight: '400',
                                lineHeight: '1.3',
                            },
                            h6: {
                                fontSize: '1.1rem',
                                fontFamily: 'var(--font-pt-serif)',
                                fontWeight: '400',
                                lineHeight: '1.3',
                            },
                            p: {
                                fontFamily: 'var(--font-open-sans)',
                                fontWeight: '400',
                                fontSize: '0.9rem',
                                lineHeight: '1.4',
                            },
                        },
                    ],
                },
                md: {
                    css: [{}],
                },
            }),
        },
        screens: {
            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
    },
}

export default config

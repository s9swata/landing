import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			heading: ['var(--font-heading)', 'sans-serif'],
  			body: ['var(--font-body)', 'sans-serif'],
  			mono: ['var(--font-mono)', 'monospace'],
  			sans: ['var(--font-body)', 'sans-serif'],
  		},
colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			pearl: {
				DEFAULT: 'hsl(var(--pearl))',
				foreground: 'hsl(var(--pearl-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))',
          red: 'hsl(var(--accent-red))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          end: 'hsl(var(--surface-end))'
        },
        nav: {
          bg: 'hsl(var(--nav-bg))',
          border: 'hsl(var(--nav-border))',
          text: 'hsl(var(--nav-text))'
        },
        hero: {
          glow: 'hsl(var(--hero-glow))',
          accent: 'hsl(var(--hero-accent))'
        },
        badge: {
          from: 'hsl(var(--badge-from))',
          via: 'hsl(var(--badge-via))',
          to: 'hsl(var(--badge-to))',
          glow: 'hsl(var(--badge-glow))',
          inset: 'hsl(var(--badge-inset))',
          border: 'hsl(var(--badge-border))'
        },
        'btn-glass': {
          border: 'hsl(var(--btn-glass-border))',
          shadow: 'hsl(var(--btn-glass-shadow))',
          inset: 'hsl(var(--btn-glass-inset))'
        }
  		},
      backgroundImage: {
        'gradient-multicolor': 'var(--gradient-multicolor)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-card': 'var(--gradient-card)',
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},

  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

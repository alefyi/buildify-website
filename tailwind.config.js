/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      maxWidth: {
        'layout': '900px',
        'container-xs': '20rem',    // 320px
        'container-sm': '24rem',    // 384px
        'container-md': '28rem',    // 448px
        'container-lg': '32rem',    // 512px
        'container-xl': '36rem',    // 576px
        'container-2xl': '42rem',   // 672px
        'container-3xl': '48rem',   // 768px
        'container-4xl': '56rem',   // 896px
        'container-5xl': '64rem',   // 1024px
        'container-6xl': '72rem',   // 1152px
        'container-7xl': '80rem',   // 1280px
      },
      fontSize: {
        'hero': ['30px', { lineHeight: '36px', letterSpacing: '-0.75px', fontWeight: '600' }],
        'section': ['30px', { lineHeight: '36px', letterSpacing: '-0.75px', fontWeight: '600' }],
        'card-title': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'card-title-sm': ['18px', { lineHeight: '28px', fontWeight: '600' }],
        'label': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '26px', fontWeight: '500' }],
        'body': ['14px', { lineHeight: '22.75px', fontWeight: '400' }],
        'body-medium': ['14px', { lineHeight: '22.75px', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '20px', fontWeight: '400' }],
      },
      lineHeight: {
        'hero': '1.05',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

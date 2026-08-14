/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#080808",
          surface: "#0D0D0D",
          subtle: "#141414",
          elevated: "#1A1A1A",
          card: "#0F0F0F",
        },
        ink: {
          headline: "#F2F0EA",
          body: "#B7B5AE",
          muted: "#77746E",
          dim: "#454440",
        },
        acid: {
          DEFAULT: "#D7FF3F",
          dim: "rgba(215, 255, 63, 0.15)",
          ghost: "rgba(215, 255, 63, 0.05)",
          border: "rgba(215, 255, 63, 0.3)",
        },
        border: {
          hairline: "#1F1F1E",
          subtle: "#2A2A28",
          focus: "#3E3E3A",
        }
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'serif', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        forensic: '0.18em',
        tightest: '-0.04em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scan 2.5s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      }
    },
  },
  plugins: [],
};

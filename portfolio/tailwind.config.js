export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050711",
        "ink-light": "#0a0e1c",
        panel: "#0f1629",
        "panel-light": "#151e36",
        gold: "#f59e0b",
        "gold-light": "#fbbf24",
        accent: "#3b82f6",
        "accent-light": "#60a5fa",
        "accent-dark": "#1d4ed8",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(59, 130, 246, 0.25)",
        "glow-gold": "0 0 25px -5px rgba(245, 158, 11, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}


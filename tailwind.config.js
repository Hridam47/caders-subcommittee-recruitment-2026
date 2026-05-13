/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(132, 204, 22, 0.22)",
      },
      animation: {
        "live-badge": "liveBadge 2.4s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "slow-scan": "slowScan 9s linear infinite",
      },
      keyframes: {
        liveBadge: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(248, 113, 113, 0.34)",
            opacity: "1",
          },
          "50%": {
            boxShadow: "0 0 0 8px rgba(248, 113, 113, 0)",
            opacity: "0.82",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        slowScan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

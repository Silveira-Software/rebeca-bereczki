import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-warm": "#fbf6f3",
        cream: "#f7efe6",
        "cream-deep": "#f1e3d6",
        blush: "#f6dbe1",
        "tea-rose": "#efc3cd",
        "dusty-pink": "#d9a7b3",
        "old-rose": "#9c5a6a",
        "rosy-nude": "#e9d3c8",
        accent: {
          DEFAULT: "#d43f74",
          deep: "#ac2f5c",
          soft: "#f2b8cc",
        },
        graphite: "#35292e",
        wine: {
          DEFAULT: "#3e0f1f",
          deep: "#2a0a16",
        },
        ink: "#2a2024",
        muted: "#5f4f54",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "clamp(0.78rem, 0.74rem + 0.2vw, 0.9rem)",
        sm: "clamp(0.92rem, 0.88rem + 0.2vw, 1.05rem)",
        base: "clamp(1.05rem, 1rem + 0.25vw, 1.2rem)",
        md: "clamp(1.3rem, 1.15rem + 0.6vw, 1.7rem)",
        lg: "clamp(1.8rem, 1.5rem + 1.2vw, 2.6rem)",
        xl: "clamp(2.4rem, 1.9rem + 2vw, 3.8rem)",
        "2xl": "clamp(3.2rem, 2.3rem + 3.6vw, 6.2rem)",
        "3xl": "clamp(4rem, 2.6rem + 5.5vw, 9rem)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        sm: "6px",
        md: "18px",
        lg: "32px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(62, 15, 31, 0.25)",
        card: "0 12px 32px -12px rgba(62, 15, 31, 0.18)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
        silk: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.25" },
          "50%": { transform: "translateY(-30px)", opacity: "0.6" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

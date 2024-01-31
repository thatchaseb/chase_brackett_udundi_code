// Tailkit (Tailwind CSS v3 Configuration)
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { RadioGroupDescription } from "@headlessui/vue";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#611818",
      },
      backgroundImage: () => ({
        "tree-image": "url('/src/assets/Coding-Challenge-Image.png')",
      }),
      fontFamily: {
        didot: ["GFS Didot", "normal"],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "105rem",
        "10xl": "120rem",
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              "&:hover": {
                opacity: ".75",
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg,
            },
          },
        },
      },
      keyframes: {
        "fade-in-slow": {
          "0%": { opacity: 0 },
          "60%": { opacity: 0 },
          "100%": { opacity: 1.0 },
        },
        "fade-out-fast": {
          "0%": { opacity: 1.0 },
          "40%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "10%": { opacity: 0 },
          "90%": { opacity: 1.0 },
          "100%": { opacity: 1.0 },
        },
        "circle-border": {
          "0%": {
            borderRadius: "500px",
          },
          "10%": {
            borderRadius: "500px",
          },
          "60%": {
            borderRadius: "100px",
          },
          "90%": {
            borderRadius: "0px",
          },
          "100%": {
            borderRadius: "0px",
          },
        },
        "expand-modal": {
          "0%": {
            transform: "translate(-257px, 315px)  scale(0.07);",
            opacity: 0,
          },
          "10%": {
            transform: "translate(-257px, 315px)  scale(0.07);",
            opacity: 1,
          },
        },
      },
      animation: {
        "expand-modal": "expand-modal 0.7s ease-out 0s 1 forwards",
        "colapse-modal": "expand-modal 0.7s ease-out 0s 1 reverse",
        "expand-circle-border": "circle-border 0.7s ease-in-out 0s 1 forwards",
        "colapse-circle-border": "circle-border 0.7s ease-in-out 0s 1 reverse",
        "fade-in-slow": "fade-in-slow 1.0s ease-in-out 0s 1 normal forwards",
        "fade-out-fast": "fade-out-fast 0.6s ease-in-out 0s 1 normal forwards",
        "fade-in": "fade-in 0.6s ease-in-out 0s 1 normal forwards",
        "fade-out": "fade-in 0.6s ease-in-out 0s 1 normal reverse",
      },
    },
  },
  plugins: [],
};

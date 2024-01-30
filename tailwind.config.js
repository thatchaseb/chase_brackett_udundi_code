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
      backgroundImage: (theme) => ({
        trees: "url('/src/assets/Coding-Challenge-image.png')",
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
        "fade-out": {
          "0%": { opacity: 1.0 },
          "100%": { opacity: 0 },
        },
        "fade-in-slow": {
          "0%": { opacity: 0 },
          "40%": { opacity: 0 },
          "100%": { opacity: 1.0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1.0 },
        },
        "circle-border": {
          "0%": {
            borderRadius: "500px",
          },
          "60%": {
            borderRadius: "100px",
          },
          "100%": {
            borderRadius: "0px",
          },
        },
        "expand-modal": {
          "0%": {
            transform: "translate(-265px, 320px)  scale(0.04);",
          },
          "100%": {
            transform: "translate(0px, 0px)  scale(1.0); ",
          },
        },
      },
      animation: {
        "expand-modal": "expand-modal 0.7s ease-out 0s 1 forwards",
        "circle-border": "circle-border 0.6s ease-in-out 0s 1 forwards",
        "fade-in-slow": "fade-in-slow 1.0s ease-in-out 0s 1 normal forwards",
        "fade-in": "fade-in 1.0s ease-in-out 0s 1 normal forwards",
        "fade-out": "fade-out 1.0s ease-in-out 0s 1 normal forwards",
      },
    },
  },
  plugins: [
    aspectRatio,
    forms,
    typography,
    plugin(function ({ addUtilities }) {
      const utilFormSwitch = {
        ".form-switch": {
          border: "transparent",
          "background-color": colors.gray[300],
          "background-image":
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          "background-position": "left center",
          "background-repeat": "no-repeat",
          "background-size": "contain !important",
          "vertical-align": "top",
          "&:checked": {
            border: "transparent",
            "background-color": "currentColor",
            "background-image":
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            "background-position": "right center",
          },
          "&:disabled, &:disabled + label": {
            opacity: ".5",
            cursor: "not-allowed",
          },
        },
      };

      addUtilities(utilFormSwitch);
    }),
  ],
};

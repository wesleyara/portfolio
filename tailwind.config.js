/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `./app/components/**/*.{vue,js,ts}`,
    `./app/layouts/**/*.vue`,
    `./app/pages/**/*.vue`,
    `./app/utils/**/*.{js,ts}`,
    `./app/app.vue`,
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Bricolage Grotesque",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          bg: "#0b0f0e",
          surface: "#121816",
          "surface-2": "#18201d",
          line: "#24302c",
          fg: "#e7ecea",
          muted: "#8d9a95",
        },
        emerald: {
          500: "#00dc82",
          950: "#003721",
        },
      },
    },
  },
};

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        neutral: {
          lightest: "var(--color-neutral-lightest)",
          lighter: "var(--color-neutral-lighter)",
          light: "var(--color-neutral-light)",
          default: "var(--color-neutral)",
          dark: "var(--color-neutral-dark)",
          darker: "var(--color-neutral-darker)",
          darkest: "var(--color-neutral-darkest)",
        },
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        md: "var(--radius-md)",
      },
    },
  },
  plugins: [],
};

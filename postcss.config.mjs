const config = {
  plugins: ["@tailwindcss/postcss"],
  safelist: [
    "group-hover:[animation-play-state:paused]", // <-- optional if purge is aggressive
  ],
};

export default config;

import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      $: "jquery", // Aliasing jQuery to $
      jquery: "jquery", // Explicit alias for jQuery
      Popper: "@popperjs/core", // Ensure Vite can resolve Popper.js
    },
  },
});

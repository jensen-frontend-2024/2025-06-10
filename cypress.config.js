import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});


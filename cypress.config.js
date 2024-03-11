import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  mochawesomeReporter: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false,
  },
});

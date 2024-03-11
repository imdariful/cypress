import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {},
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    // reporter: generate, // Use the imported generate function
    overwrite: true,
    html: true,
    json: true,
  },
});

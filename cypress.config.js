const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); // Add this line
    },
    reporter: "cypress-mochawesome-reporter", // Add this line
    reporterOptions: {
      reportDir: "cypress/reports", // Ensure the report directory is correct
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});



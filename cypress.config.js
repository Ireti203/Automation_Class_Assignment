const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com'",
    defaultCommandTimeout: 10000,
    viewportHeight: 960,
    viewportWidth: 1530,
    setupNodeEvents(on, config) {
      //implement node event listeners here
    }
  },
});

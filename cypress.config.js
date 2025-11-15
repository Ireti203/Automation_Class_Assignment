const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.dummyticket.com/',
    defaultCommandTimeout : 10000,
    viewportHeight : 960,
    viewportWidth : 1530,
    chromeWebSecurity : false,
    watchForFileChanges :false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

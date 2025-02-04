const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    hideXHRInCommandLog: true,
    experimentalOriginDependencies :true,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      url: "https://www.indiarunning.com/",
      registrationUrl: "https://registrations.indiarunning.com/"
    }
  },
});

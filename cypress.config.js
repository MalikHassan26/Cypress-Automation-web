const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://develop.dz8b8vpt7uu5e.amplifyapp.com/',
    // viewportHeight:550,
    // viewportWidth:660,
    // experimentalStudio: true,
    // defaultCommandTimeout: 4000
  },
});

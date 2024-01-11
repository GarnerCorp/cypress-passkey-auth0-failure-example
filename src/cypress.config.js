const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 60000,
    responseTimeout: 60000,
    video: false,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    recoverFromRendererCrashes: true,
  }
});

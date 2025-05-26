// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const {
  "liveServer.settings.port": liveServerPort,
} = require("./.vscode/settings.json");
const mainPageUrl = `http://localhost:${liveServerPort}/`;
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: mainPageUrl,
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
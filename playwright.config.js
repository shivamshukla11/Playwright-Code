// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
// const rakLoginTest = ({
//   testDir: './tests/rakLoginTest',

//   //this time out is for the above specific test thsi is global.
//   timeout: 40000,

//   //this timeout is for the assertions we have set for title for example.
//   expect: {
//   timeout: 40000,
//  },
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     browserName: 'chromium',
//     // just to make the project running in headed or headless mode we need to set it as headed or headless.
//     headless: false
//   },

// });

const config = ({
  testDir: './tests',
  testIgnore: '*starter.spec.js',

  //this time out is for the above specific test thsi is global.
  timeout: 40000,

  //this timeout is for the assertions we have set for title for example.
  expect: {
  timeout: 40000,
 },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    // just to make the project running in headed or headless mode we need to set it as headed or headless.
    headless: false
  },

});

//this is we have exported just to make it avaialable in every folder or module.

module.exports = config;
// module.exports = rakLoginTest;


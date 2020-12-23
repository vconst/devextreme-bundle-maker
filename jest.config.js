module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:8080"
  },
  rootDir: "tests",
  testMatch: [
    "<rootDir>/*.test.js",
    "<rootDir>/**/*.test.js",
  ],
  verbose: true,
  testTimeout: 30000
}
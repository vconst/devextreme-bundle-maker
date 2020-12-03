module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:8080"
  },
  testMatch: [
    "<rootDir>/tests/*.test.js"
  ],
  verbose: true,
  testTimeout: 30000
}
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(png)$": "<rootDir>/__mocks__/file-mock.ts",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
    // Handle module aliases (this will be automatically configured for you soon)
    "^components/(.*)$": "<rootDir>/components/$1",
    "^pages/(.*)$": "<rootDir>/pages/$1",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    "^assets/(.*)$": "<rootDir>/assets/$1",
    "^routes/(.*)$": "<rootDir>/routes/$1",
    "^styles/(.*)$": "<rootDir>/styles/$1",
    "^services/(.*)$": "<rootDir>/services/$1",
    "^utils/(.*)$": "<rootDir>/utils/$1",
    "^context/(.*)$": "<rootDir>/context/$1",
    "^views/(.*)$": "<rootDir>/views/$1",
    "^animation/(.*)$": "<rootDir>/animation/$1",
  },
  // eslint-disable-next-line no-dupe-keys
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

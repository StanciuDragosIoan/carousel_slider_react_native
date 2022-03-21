module.exports = {
  preset: 'react-native',
  setupFiles: ['./setupTests.js'],
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  testEnvironment: 'jsdom',
};

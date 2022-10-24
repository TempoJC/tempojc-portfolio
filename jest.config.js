// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	moduleDirectories: ['node_modules', __dirname],
	moduleNameMapper: {
		// Components
		'^@/Atoms(.*)$': '<rootDir>/src/components/atoms$1',
		'^@/Molecules(.*)$': '<rootDir>/src/components/molecules$1',
		'^@/Organisms(.*)$': '<rootDir>/src/components/organisms$1',
		'^@/Templates(.*)$': '<rootDir>/src/components/templates$1',
		// Other folders
		'^@/Constants(.*)$': '<rootDir>/src/constants$1',
		'^@/@types(.*)$': '<rootDir>/@types$1',
		'^@/Config(.*)$': '<rootDir>/src/config$1',
		'^@/Mocks(.*)$': '<rootDir>/src/mockData$1',
		'^@/Pages(.*)$': '<rootDir>/src/pages$1',
		'^@/Public(.*)$': '<rootDir>/public$1',
		'^@/Utils(.*)$': '<rootDir>/src/utils$1',
		'^@/Hooks(.*)$': '<rootDir>/src/hooks$1',
		'^@/State(.*)$': '<rootDir>/src/state$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
